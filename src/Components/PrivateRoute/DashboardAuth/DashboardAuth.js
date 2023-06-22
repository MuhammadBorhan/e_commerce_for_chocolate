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
      <div className="flex flex-col items-center mt-[20%]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
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
