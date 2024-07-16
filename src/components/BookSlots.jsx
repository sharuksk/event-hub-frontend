import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker, PickersDay } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const BookSlots = ({ close, slot, setSlot }) => {
  const [selectedDates, setSelectedDates] = useState(
    slot.map((s) => dayjs(s.date).format("YYYY-MM-DD"))
  );

  useEffect(() => {
    setSelectedDates(slot.map((s) => dayjs(s.date).format("YYYY-MM-DD")));
  }, [slot]);

  const handleDateChange = (date) => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    if (selectedDates.includes(formattedDate)) {
      setSelectedDates(selectedDates.filter((d) => d !== formattedDate));
    } else {
      setSelectedDates([...selectedDates, formattedDate]);
    }
  };

  const isDateDisabled = (date) => {
    return dayjs(date).isBefore(dayjs().startOf("day"));
  };

  const handleButton = () => {
    const availability = selectedDates.map((date) => ({
      date: dayjs(date).toISOString(),
      isAvailable: true,
    }));

    setSlot(availability);
    console.log(availability);
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
              <StaticDatePicker
                displayStaticWrapperAs="desktop"
                value={null}
                onChange={handleDateChange}
                renderDay={(day, _value, DayComponentProps) => {
                  const formattedDate = dayjs(day).format("YYYY-MM-DD");
                  const isSelected = selectedDates.includes(formattedDate);
                  const isDisabled = isDateDisabled(day);
                  return (
                    <PickersDay
                      {...DayComponentProps}
                      day={day}
                      selected={isSelected}
                      disabled={isDisabled}
                      onDaySelect={handleDateChange}
                      className={isSelected ? "bg-primary text-white" : ""}
                    />
                  );
                }}
                shouldDisableDate={isDateDisabled}
              />
            </LocalizationProvider>
          </div>
          <div className="grid grid-cols-3 gap-2 mb-3">
            {selectedDates.map((s) => (
              <p className="text-red-700" key={s}>
                {s}
              </p>
            ))}
          </div>
          {/* <div className="bg-white p-4 rounded-lg shadow-md mb-6">
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
                    </div> */}
          <div className="flex justify-center">
            <button
              onClick={handleButton}
              className="bg-primary text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-600"
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
