import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = () => {
  const { client } = useSelector((state) => state.client);

  const { user } = useSelector((state) => state.user);
  console.log(user);
  if (!user?.id) return <Navigate to="/" />;
  return user.role.toLowerCase() === "client" ? (
    <Outlet />
  ) : (
    <Navigate to="/" />
  );
};
