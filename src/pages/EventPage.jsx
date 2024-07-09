import React, { useState } from "react";
import EventImage from "../assets/image1.jpeg";
import { CiCalendar } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

const EventPage = () => {
  const [showPastEvents, setShowPastEvents] = useState(false);

  const upcomingEventData = [
    {
      image: EventImage,
      date: "27 July, 24",
      location: "Doha, Qatar",
      booked: "Amith",
      contact: "+ 123 567 879",
      mail: "abc@gmail.com",
    },
  ];

  const pastEventData = [
    {
      image: EventImage,
      date: "27 June, 24",
      location: "Dubai, UAE",
      booked: "John",
      contact: "+ 987 654 321",
      mail: "xyz@gmail.com",
    },
    {
      image: EventImage,
      date: "27 June, 24",
      location: "Dubai, UAE",
      booked: "John",
      contact: "+ 987 654 321",
      mail: "xyz@gmail.com",
    },
    {
      image: EventImage,
      date: "27 June, 24",
      location: "Dubai, UAE",
      booked: "John",
      contact: "+ 987 654 321",
      mail: "xyz@gmail.com",
    },
    {
      image: EventImage,
      date: "27 June, 24",
      location: "Dubai, UAE",
      booked: "John",
      contact: "+ 987 654 321",
      mail: "xyz@gmail.com",
    },
    {
      image: EventImage,
      date: "27 June, 24",
      location: "Dubai, UAE",
      booked: "John",
      contact: "+ 987 654 321",
      mail: "xyz@gmail.com",
    },
  ];

  const handleToggle = () => {
    setShowPastEvents((prev) => !prev);
  };

  const renderEventCards = (eventData) =>
    eventData.map((data, index) => (
      <div
        key={index}
        className="bg-secondary text-foreground border-[] h-auto w-[250px] rounded-3xl flex flex-col gap-2 drop-shadow-2xl p-4 my-4 font-bold text-xs"
      >
        <img
          src={data.image}
          alt="Event"
          className="rounded-3xl h-[150px] w-full object-cover"
        />
        <div className="flex gap-10">
          <p className="flex gap-2 text-center">
            <span>
              <CiCalendar className="size-4 text-blue-500" />
            </span>
            {data.date}
          </p>
          <p className="flex gap-1">
            <span>
              <FaLocationDot className="text-blue-500 size-3" />
            </span>
            {data.location}
          </p>
        </div>
        <p>Booked By: {data.booked}</p>
        <p>Contact: {data.contact}</p>
        <p>Mail: {data.mail}</p>
      </div>
    ));

  return (
    <div className="bg-secondary min-h-screen p-10">
      <div className="bg-accent rounded-lg shadow-md mb-6 h-auto p-4">
        <div className="text-end relative top-10">
          <label className="inline-flex items-center mb-5 cursor-pointer">
            <input
              type="checkbox"
              checked={showPastEvents}
              onChange={handleToggle}
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <p className="font-extrabold text-foreground">
          {showPastEvents ? "Past Events" : "Upcoming Events"}:
        </p>
        <div className="pl-8 gap-10 grid grid-cols-4">
          {showPastEvents
            ? renderEventCards(pastEventData)
            : renderEventCards(upcomingEventData)}
        </div>
      </div>
    </div>
  );
};

export default EventPage;
