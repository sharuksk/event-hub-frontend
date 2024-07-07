import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";

const BookSlots = ({
    close,
    slot,
    setSlot,
    selectedSession,
    setSelectedSession,
}) => {
    const handleButton = () => {
        // const formattedDate = slot.format("YYYY-MM-DD");
        // const dayOfWeek = slot.format("dddd");
        // console.log(formattedDate, dayOfWeek, selectedSession);
        close();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-white p-5">
            <div className="bg-gray-200 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex items-center bg-white rounded-b-xl p-4">
                    <button onClick={close} className="text-gray-700">
                        <FaArrowLeft />
                    </button>
                    <h1 className="text-xl font-semibold text-center flex-grow">
                        Book Your Slots
                    </h1>
                </div>
                <div className="p-6">
                    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateCalendar
                                value={slot}
                                onChange={(date) => setSlot(date)}
                            />
                        </LocalizationProvider>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                        <h2 className="text-lg font-semibold mb-2">Session</h2>
                        <div className="flex justify-around">
                            {["Day", "Noon", "Evening", "Night"].map(
                                (session) => (
                                    <button
                                        key={session}
                                        className={`p-2 rounded-md border ${
                                            selectedSession === session
                                                ? "bg-black text-white"
                                                : "bg-white"
                                        }`}
                                        onClick={() =>
                                            setSelectedSession(session)
                                        }
                                    >
                                        {session}
                                    </button>
                                )
                            )}
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button
                            onClick={handleButton}
                            className="bg-[#24c690] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-600"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookSlots;
