import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { Link, useNavigate } from "react-router-dom";
import dayjs from "dayjs";

const ServiceBookSlots = ({ close }) => {
  const [selectedDates, setSelectedDates] = useState([]);
  const navigate = useNavigate();

  const handleDateChange = (date) => {
    const formattedDate = dayjs(date).format("YYYY-MM-DD");
    if (selectedDates.includes(formattedDate)) {
      setSelectedDates(selectedDates.filter((d) => d !== formattedDate));
    } else {
      setSelectedDates([...selectedDates, formattedDate]);
    }
  };

  const handleSave = () => {
    navigate("/service", { state: { selectedDates } });
    console.log(selectedDates);
  };

  const isDateDisabled = (date) => {
    return dayjs(date).isBefore(dayjs().startOf("day"));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-5">
      <div className="bg-gray-200 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center bg-white rounded-b-xl p-4">
          <button onClick={close} className="text-gray-700">
            <FaArrowLeft />
          </button>
          <h1 className="text-xl font-semibold text-center flex-grow">
            Book Your Dates
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
          <div className="flex justify-center">
            <button
              onClick={handleSave}
              className="bg-primary text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#5c0322]"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceBookSlots;
