import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useGetUserQuery } from "../../../features/api/loginApi";

const DashboardAuth = ({ children, allowedRoles }) => {
  const location = useLocation();
  const { data, isLoading } = useGetUserQuery();
  const user = data?.data;
  const userRole = user?.role;

  const isAuthenticated = localStorage.getItem("accessToken");

  if (isLoading) {
    return (
      <p className="text-center text-danger fs-1 fw-bold loading-issue">
        Loading...
      </p>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ path: location.pathname }} replace />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default DashboardAuth;
