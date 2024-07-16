import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = () => {
  const { user } = useSelector((state) => state.user);

  if (!user?.id) return <Navigate to="/auth/signin" />;
  return user.role === "client" ? <Outlet /> : <Navigate to="/auth/signin" />;
};
