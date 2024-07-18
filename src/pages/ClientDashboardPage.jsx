import React, { useEffect, useState } from "react";
import EventImage from "../assets/image1.jpeg";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Button from "../components/Button";
import { addItem, clearItems, deleteItem } from "../features/itemSlice";

const ClientDashboardPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const [role, setRole] = useState("");

  const { client } = useSelector((state) => state.client);
  const { items } = useSelector((state) => state.item);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const getItems = async () => {
      await axios
        .get(BASE_URL + "/items/user/" + user.id)
        .then((res) => {
          const data = res.data.Items;
          // console.log(data);
          dispatch(clearItems());
          data.map((d) => {
            dispatch(addItem(d));
          });
        })
        .catch((err) => console.log(err));
    };
    getItems();
  }, []);

  const EventData = [
    {
      value: 22,
      name: "Done",
      color: "rgb(90, 219, 188)",
    },
    {
      value: 7,
      name: "in Progress",
      color: "rgb(255, 187, 108)",
    },
    {
      value: 14,
      name: "Waiting for Review",
      color: "rgb(103, 210, 239)",
    },
    {
      value: 12,
      name: "Ongoing",
      color: "rgb(255, 118, 158)",
    },
  ];

  const currentEventData = [
    {
      eventName: "Personal Wedding Event",
      name: "Saber & Oro",
      image1: EventImage,
      image2: EventImage,
    },
  ];

  useEffect(() => {
    const getTypes = async () => {
      const res = await axios.get(BASE_URL + "/types");
      console.log(res);
      const roleArray = res.data.types.filter(
        (type) => type._id === client.role
      );
      setRole(roleArray[0]?.type);
    };
    getTypes();
  }, []);

  if (!client) {
    return (
      <div className="flex items-center justify-center text-center p-[300px]  bg-accent">
        Loading...
      </div>
    );
  }

  const handleUpdate = () => {
    const clientId = client._id;
    navigate("/client/register", { state: { clientId } });
  };

  const handleDelete = async (id) => {
    // console.log(id);
    await axios
      .delete(`${BASE_URL}/items/delete/${id}`)
      .then((res) => {
        console.log(res.data);
        dispatch(deleteItem(id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" min-h-screen p-10 bg-secondary ">
      <div className=" rounded-lg shadow-md mb-6 h-auto p-4 bg-accent ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold  text-foreground">
            Client Details
          </h2>
          <Link to="/client/create">
            <button className="bg-primary text-white px-4 py-2 rounded-[25px]">
              Add Services
            </button>
          </Link>
        </div>
        <div className="bg-purple-100 p-4 rounded-lg mb-6 flex justify-between items-center">
          <div>
            <p className="text-xl font-semibold">
              {client
                ? client.firstName + " " + client.lastName
                : "Isabella Singh"}
            </p>
            <p className="text-gray-700">Role: {client ? role : ""}</p>
            <p className="text-gray-700">
              Work Experience: {client ? client.workExperience : ""} years
            </p>
            <p className="text-gray-700">
              Location: {client ? client.location : ""}
            </p>
          </div>
          <button
            onClick={handleUpdate}
            className="bg-primary text-white px-4 py-2 rounded-lg"
          >
            Update Profile
          </button>
        </div>

        {items.length > 0 && (
          <h2 className="text-2xl font-semibold mb-4">Service Details</h2>
        )}

        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex justify-between"
            >
              <div>
                <p className="text-lg font-semibold mb-2">Name: {item.name}</p>
                <p className="text-gray-600 mb-2">
                  Description: {item.description}
                </p>
                <p className="text-gray-600 mb-2">
                  Contact: {item.contactInfo}
                </p>
                <p className="text-gray-600">Location: {item.location}</p>
              </div>
              <div>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-primary text-white p-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 flex flex-col gap-1">
          <p className="font-extrabold text-2xl text-foreground">
            GM Organizing Events
          </p>
          <p className="font-normal text-muted-foreground">
            5 Tasks are pending
          </p>
        </div>

        <div className="pl-8 gap-10 grid grid-cols-4">
          {EventData.map((data, index) => (
            <div
              key={index}
              className="h-auto w-[180px] rounded-3xl flex flex-col  gap-2 drop-shadow-2xl p-8 my-4 items-center text-center justify-center text-white"
              style={{ backgroundColor: data.color }}
            >
              <p className="text-4xl">{data.value}</p>
              <p>{data.name}</p>
            </div>
          ))}
        </div>
        <div className="p-8 flex flex-col">
          <p className="font-extrabold text-2xl text-foreground">
            Current Event
          </p>
        </div>
        <div className="pl-8 gap-10 grid grid-cols-2">
          {currentEventData.map((data, index) => (
            <div
              key={index}
              className="bg-primary h-auto w-[400px] rounded-xl shadow-md p-4 text-white relative"
            >
              <p className="font-bold">{data.eventName}</p>
              <p>{data.name}</p>
              <div className="flex">
                <img
                  src={data.image1}
                  className="size-5 rounded-xl border-[1px] border-white"
                />
                <img
                  src={data.image2}
                  className="size-5 rounded-xl border-[1px] border-white absolute top-16 right-[350px]"
                />
              </div>
              <p className="absolute right-6 bottom-4 text-sm">Now</p>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center p-4 pt-28">
          <button className="bg-primary rounded-lg text-white p-4 pr-20 pl-20">
            View Tasks
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboardPage;
