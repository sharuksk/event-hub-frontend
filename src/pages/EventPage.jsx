import React from "react";
import EventImage from "../assets/image1.jpeg";
import { CiCalendar } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

const EventPage = () => {
    const EventData = [
        {
            image: EventImage,
            date: "27 July, 24",
            location: "Doha, Qatar",
            booked: "Amith",
            contact: "+ 123 567 879",
            Mail: "abc@gmail.com",
        },
        {
            image: EventImage,
            date: "27 July, 24",
            location: "Doha, Qatar",
            booked: "Amith",
            contact: "+ 123 567 879",
            Mail: "abc@gmail.com",
        },
        {
            image: EventImage,
            date: "27 July, 24",
            location: "Doha, Qatar",
            booked: "Amith",
            contact: "+ 123 567 879",
            Mail: "abc@gmail.com",
        },
        {
            image: EventImage,
            date: "27 July, 24",
            location: "Doha, Qatar",
            booked: "Amith",
            contact: "+ 123 567 879",
            Mail: "abc@gmail.com",
        },
        {
            image: EventImage,
            date: "27 July, 24",
            location: "Doha, Qatar",
            booked: "Amith",
            contact: "+ 123 567 879",
            Mail: "abc@gmail.com",
        },
        {
            image: EventImage,
            date: "27 July, 24",
            location: "Doha, Qatar",
            booked: "Amith",
            contact: "+ 123 567 879",
            Mail: "abc@gmail.com",
        },
    ];

    return (
        <div className="bg-secondary min-h-screen p-10">
            <div className="bg-accent rounded-lg shadow-md mb-6 h-auto p-4    ">
                <p className="font-bold text-foreground ">Upcoming Events :</p>
                <div className="pl-8 gap-10 grid grid-cols-4 ">
                    {EventData.map((data, index) => (
                        <div
                            key={index}
                            className="bg-secondary text-foreground border-[] h-auto w-[250px] rounded-3xl flex flex-col  gap-2 drop-shadow-2xl p-4 my-4 font-bold text-xs"
                        >
                            <img
                                src={data.image}
                                alt="Event"
                                className="rounded-3xl h-[150px] w-full object-cover"
                            />
                            <div className="flex gap-10">
                                <p className=" flex gap-2 text-center">
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
                            <p>Booked By : {data.booked}</p>
                            <p>Contact : {data.contact}</p>
                            <p>Mail : {data.Mail}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EventPage;
