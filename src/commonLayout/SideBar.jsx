import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Image from "../assets/profile_image.avif";
import { IoPersonOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { TfiHelpAlt } from "react-icons/tfi";
import { PiSignInBold } from "react-icons/pi";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setUser } from "../features/userSlice";
import { clearItems } from "../features/itemSlice";
import { setClient } from "../features/clientSlice";

const SideBar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);
  const { client } = useSelector((state) => state.client);

  console.log(client);

  const handlesignOut = () => {
    dispatch(setUser({}));
    dispatch(setClient({}));
    dispatch(clearItems());
    navigate("/");
  };

  const handleUpdate = () => {
    const clientId = client._id;
    navigate("/client/register", { state: { clientId } });
  };

  return (
    <aside className="px-2 pr-[50px] py-4 border-r border-muted-foreground grid-row-span-full flex flex-col gap-8 font-semibold bg-background  h-full min-w-[19rem]">
      <div className="bg-background p-4 border-muted-foreground">
        <h1 className="text-2xl font-bold text-foreground ">Qatar Event Hub</h1>
      </div>
      <div className="flex gap-3">
        {user && user.role.toLowerCase() === "ventor" ? (
          <img
            onClick={handleUpdate}
            className="h-14 w-14 rounded-full border-[3px] border-blue-900 cursor-pointer"
            src={client && client.bestWork ? client.bestWork : Image}
          />
        ) : (
          <img
            className="h-14 w-14 rounded-full border-[3px] border-blue-900"
            src={Image}
          />
        )}

        <nav>
          <ul className="text-sm ">
            <li className="font-bold text-foreground">
              {user ? user.name : "Isabella Singh"}
            </li>
            <li className="underline underline-offset-1 font-normal text-muted-foreground">
              {user ? user.email : "isabellasingh@gmail.com"}
            </li>
            <li className="font-normal text-muted-foreground">
              Role - {user ? user.role : ""}
            </li>
          </ul>
        </nav>
      </div>
      <nav>
        <ul className="flex flex-col gap-2 font-normal text-muted-foreground">
          <li>
            <NavLink
              to={user.role === "User" ? "/user/profile" : "/client/dashboard"}
              className={`flex items-center gap-6    hover:bg-accent rounded-md py-3 px-4 transition duration-300 ${
                location.pathname === "#"
              }`}
            >
              <IoPersonOutline className="size-7" />
              <span>My Profile</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={user.role === "User" ? "/user/events" : "/client/events"}
              className={`flex items-center gap-6   hover:bg-accent rounded-md py-3 px-4 transition duration-300 ${
                location.pathname === "#"
              }`}
            >
              <CiCalendar className="size-7" />
              <span>Events</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={user.role === "User" ? "/user/settings" : "#"}
              className={`flex items-center gap-6  hover:bg-accent rounded-md py-3 px-4 transition duration-300 ${
                location.pathname === "#"
              }`}
            >
              <CiSettings className="size-7" />
              <span>Settings</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={user.role === "User" ? "#" : "#"}
              className={`flex items-center gap-6 hover:bg-accent rounded-md py-3 px-4 transition duration-300 ${
                location.pathname === "#"
              }`}
            >
              <TfiHelpAlt className="size-7" />
              <span>Help & FAQs</span>
            </NavLink>
          </li>
        </ul>
      </nav>

      <button
        onClick={handlesignOut}
        className="flex gap-4 text-center items-center bg-primary p-3 rounded-lg mx-auto my-auto relative top-20 text-white"
      >
        <PiSignInBold /> Sign Out
      </button>
    </aside>
  );
};

export default SideBar;
