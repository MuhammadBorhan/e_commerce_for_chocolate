import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useGetUserQuery } from "../../features/api/loginApi";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { data, isLoading } = useGetUserQuery();
  const user = data?.data;

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
  return children;
};

export default RequireAuth;
