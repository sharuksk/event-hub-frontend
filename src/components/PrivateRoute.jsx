import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = () => {
  const { client } = useSelector((state) => state.client);
  console.log("******************");
  console.log(client);
  console.log("******************");

  if (!client) return <Navigate to="/client" />;
  const { user } = useSelector((state) => state.user);
  console.log(user);
  if (!user?.id) return <Navigate to="/" />;
  return user.role.toLowerCase() === "ventor" ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};
