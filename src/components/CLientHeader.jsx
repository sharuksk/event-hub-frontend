import React from "react";
import { NavLink } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const CLientHeader = ({ clientDetail }) => {
  return (
    <header className="border-gray-200 flex flex-row bg-primary">
      <div className="flex p-6 gap-[640px] text-white">
        <p className="text-2xl font-bold">Welcome to Client Dashboard</p>
        <NavLink to="/" className="flex items-center">
          <div className="flex gap-2 ">
            <FaLocationDot className="text-blue-500 text-xl" />
            <p className=" underline underline-offset-1">
              {clientDetail ? clientDetail.location : "Michingam, US"}
            </p>
          </div>
        </NavLink>
      </div>
    </header>
  );
};

export default CLientHeader;
