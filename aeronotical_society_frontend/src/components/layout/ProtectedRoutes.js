import React from "react";
import { Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
  return localStorage.getItem("authTokens") != null ? (
    <Outlet />
  ) : (
    window.location.replace("http://localhost:3000/login")
  );
};
