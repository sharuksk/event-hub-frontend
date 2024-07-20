import React, { useEffect, useState } from "react";
import EventImage from "../assets/image1.jpeg";
import { CiCalendar } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import axios from "axios";
import { useSelector } from "react-redux";
import dayjs from "dayjs";

const EventPage = () => {
  const [showPastEvents, setShowPastEvents] = useState(false);
  const [checked, setChecked] = useState(false);
  const [upcomingEventData, setUpcomingEventData] = useState([]);
  const [confirmationStatus, setConfirmationStatus] = useState({});
  const { client } = useSelector((state) => state.client);
  const { user } = useSelector((state) => state.user);

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const formatDate = (dateString) => {
    return dayjs(dateString).format("D MMMM, YY");
  };

  useEffect(() => {
    const getBookings = async () => {
      try {
        console.log(BASE_URL + "/bookings/" + client._id);
        // Get bookings
        const bookingsResponse = await axios.get(
          BASE_URL + "/bookings/" + client._id,
        );
        const bookings = bookingsResponse.data.bookings;
        console.log(bookings);
        const eventData = await Promise.all(
          bookings.map(async (booking) => {
            //userData
            const userResponse = await axios.get(
              BASE_URL + "/user/" + booking.user,
            );
            const userData = userResponse.data.users;

            const dates = booking.date.map((d) => formatDate(d));
            //clientData
            const clientData = await axios.get(
<<<<<<< HEAD
              BASE_URL + "/client/" + booking.clientId,
=======
              BASE_URL + "/client/" + booking.clientId
>>>>>>> 92e868c10055357b888a9cf3274ce7dce21ba2f5
            );

            //itemData
            const itemData = await axios.get(
              BASE_URL + "/items/" + booking.itemId,
            );

            return {
              id: booking._id,
              title: booking.title,
              image: itemData.data.images[0].data,
              date: dates,
              location: "Doha, Qatar",
              booked: userData.name,
              contact: clientData?.data?.data?.client?.contact,
              mail: userData.email,
              status: booking.status,
              isConfirmed: booking.isConfirmed,
            };
          }),
        );

        setUpcomingEventData(eventData);

        const initialConfirmationStatus = eventData.reduce((acc, event) => {
          acc[event.id] = event.isConfirmed;
          return acc;
        }, {});
        setConfirmationStatus(initialConfirmationStatus);
      } catch (err) {
        console.log(err);
      }
    };

    getBookings();
  }, []);

  const pastEventData = [
    {
      image: EventImage,
      date: ["27 June, 24"],
      location: "Dubai, UAE",
      booked: "John",
      contact: "+ 987 654 321",
      mail: "xyz@gmail.com",
    },
    {
      image: EventImage,
      date: ["27 June, 24"],
      location: "Dubai, UAE",
      booked: "John",
      contact: "+ 987 654 321",
      mail: "xyz@gmail.com",
    },
    {
      image: EventImage,
      date: ["27 June, 24"],
      location: "Dubai, UAE",
      booked: "John",
      contact: "+ 987 654 321",
      mail: "xyz@gmail.com",
    },
  ];

  const handleToggle = () => {
    setShowPastEvents((prev) => !prev);
    setChecked(!checked);
  };

  const handleCheckboxChange = (id) => {
    setConfirmationStatus((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSave = async (id) => {
    console.log(id);
    // console.log(
    //   `Event ID: ${id}, Confirmation Status: ${confirmationStatus[id]}`
    // );

    const data = {
      isConfirmed: confirmationStatus[id],
    };

    await axios
      .put(BASE_URL + "/bookings/confirm/" + id, data)
      .then((res) => {
        // console.log(res);
        alert(`event accepted for ${id}`);
      })
      .catch((err) => console.log(err));
  };

  const renderEventCards = (eventData) =>
    eventData.map((data, index) => (
      <div
        key={index}
        className="bg-secondary text-foreground h-auto w-[300px] rounded-3xl flex flex-col gap-2 drop-shadow-2xl p-4 my-4 font-bold text-xs"
      >
        <img
          src={`data:image/jpeg;base64,${data.image}`}
          alt="Event"
          className="rounded-3xl h-[150px] w-full object-cover"
        />
        <div className="flex gap-16">
          <p className="flex gap-2 text-center pl-2">
            <span>
              <CiCalendar className="size-4 text-blue-500" />
            </span>
            <div className="flex flex-col gap-1">
              {data.date.map((d) => (
                <p>{d}</p>
              ))}
            </div>
          </p>
          <p className="flex gap-1">
            <span>
              <FaLocationDot className="text-blue-500 size-3" />
            </span>
            {data.location}
          </p>
        </div>
        <div className="flex flex-col gap-1 pl-4">
          <p>Title: {data.title}</p>
          <p>Booked By: {data.booked}</p>
          <p>Contact: {data.contact}</p>
          <p>Mail: {data.mail}</p>
          <p>status: {data.status}</p>
          <div className="flex gap-2 items-center text-[14px]">
            <input
              type="checkbox"
              checked={confirmationStatus[data.id] || false}
              onChange={() => handleCheckboxChange(data.id)}
              className="size-5"
            />
            <p>confirm</p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={() => handleSave(data.id)}
            className="p-3 pr-8 pl-8 bg-primary rounded-xl text-[14px] text-white"
          >
            save
          </button>
        </div>
      </div>
    ));

  return (
    <div className="bg-secondary min-h-screen p-10">
      <div className="bg-accent rounded-lg shadow-md mb-6 h-auto p-4">
        <div>
          <div className="relative w-56 h-10 shadow-lg rounded-3xl flex items-center justify-center bg-white left-[850px]">
            <input
              type="checkbox"
              className="absolute w-full h-full opacity-0 cursor-pointer z-20"
              checked={showPastEvents}
              onChange={handleToggle}
            />
            <div className="absolute w-full h-full flex items-center rounded-xl justify-between px-3 z-10">
              <span
                className={`font-bold text-sm ${
                  checked ? "text-black" : "text-white"
                } `}
              >
                Current Event
              </span>
              <span
                className={`font-bold text-sm ${
                  checked ? "text-white" : "text-black"
                } `}
              >
                Past Event
              </span>
            </div>
            <div className="absolute top-1 right-1 bottom-1 left-1 rounded transition-all duration-500 ease-in-out"></div>
            <div className="absolute w-full h-10 flex items-center justify-between px z-0">
              <div
                className={`bg-blue-500 ${
                  checked ? "w-28" : "w-32"
                } rounded-xl h-10 transition-all duration-500 ease-in-out ${
                  checked ? "ml-28 " : ""
                }`}
              ></div>
            </div>
          </div>
        </div>

        <p className="font-extrabold text-foreground">
          {showPastEvents ? "Past Events" : "Upcoming Events"}:
        </p>
        <div className="pl-8 gap-[20px] grid grid-cols-3 overflow-hidden">
          {showPastEvents
            ? renderEventCards(pastEventData)
            : renderEventCards(upcomingEventData)}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
