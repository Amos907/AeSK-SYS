import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Login from "../../pages/login/Login";

export const ProtectedRoutes = () => {
  const navigate = useNavigate();
  return localStorage.getItem("adminTokens") != null ? <Outlet /> : <Login />;
};
