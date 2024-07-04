import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Image from "../assets/profile_image.avif";
import { IoPersonOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { TfiHelpAlt } from "react-icons/tfi";
import { PiSignInBold } from "react-icons/pi";

const ClientSidebar = () => {
  const location = useLocation();
  return (
    <aside className="px-2 pr-6 py-8 border-r border-gray-200 grid-row-span-full flex flex-col gap-8 font-semibold">
      <div className="flex gap-3">
        <img
          className="h-14 w-14 rounded-full border-[3px] border-blue-900"
          src={Image}
        />
        <nav>
          <ul className="text-sm ">
            <li className="font-bold ">Isabella Singh</li>
            <li>
              <Link
                className="underline underline-offset-1 font-normal text-[#838383]"
                to="/about"
              >
                isabellasingh@gmail.com
              </Link>
            </li>
            <li className="font-normal text-[#838383]">Role - Client</li>
          </ul>
        </nav>
      </div>
      <nav>
        <ul className="flex flex-col gap-2 font-normal text-[#838383]">
          <li>
            <NavLink
              to="/client/profile"
              className={`flex items-center gap-6 text-gray-600 hover:text-gray-800 hover:bg-gray-300 rounded-md py-3 px-4 transition duration-300 ${
                location.pathname === "#"
              }`}
            >
              <IoPersonOutline className="size-7" />
              <span>My Profile</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="#"
              className={`flex items-center gap-6 text-gray-600 hover:text-gray-800 hover:bg-gray-300 rounded-md py-3 px-4 transition duration-300 ${
                location.pathname === "#"
              }`}
            >
              <CiCalendar className="size-7" />
              <span>Events</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className={`flex items-center gap-6 text-gray-600 hover:text-gray-800 hover:bg-gray-300 rounded-md py-3 px-4 transition duration-300 ${
                location.pathname === "#"
              }`}
            >
              <CiSettings className="size-7" />
              <span>Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="#"
              className={`flex items-center gap-6 text-gray-600 hover:text-gray-800 hover:bg-gray-300 rounded-md py-3 px-4 transition duration-300 ${
                location.pathname === "#"
              }`}
            >
              <TfiHelpAlt className="size-7" />
              <span>Help & FAQs</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <button className="flex gap-4 text-center items-center bg-[#24c690] p-3 rounded-lg mx-auto my-auto relative top-28 text-white">
        <PiSignInBold /> Sign Out
      </button>
    </aside>
  );
};

export default ClientSidebar;
