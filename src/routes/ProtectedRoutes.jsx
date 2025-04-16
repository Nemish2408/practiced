import React from "react";
import { Navigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const ProtectedRoutes = ({ children, reqRole }) => {
  const { role, tokens } = useAuth();

  if (!role && !tokens) {
    return <Navigate to="/login" replace />;
  }

  if (reqRole && role !== reqRole) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoutes;
