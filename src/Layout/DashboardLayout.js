import React from "react";
import Navbar from "./Navbar";
import { Link, Outlet } from "react-router-dom";
import { useGetUserQuery } from "../features/api/loginApi";
import { MdDashboard } from "react-icons/md";

const DashboardLayout = () => {
  const { data } = useGetUserQuery();
  const users = data?.data;
  return (
    <div className="drawer drawer-mobile">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet />
      </div>
      <div className="drawer-side shadow-lg shadow-indigo-500/40">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <ul className="menu p-4 w-60 bg-green-700 text-white">
          <li>
            <Link to="/dashboard">
              <MdDashboard /> Dashboard
            </Link>
          </li>
          {users?.role == "admin" && (
            <li>
              <Link to="/dashboard/addregion">Add Region And District</Link>
            </li>
          )}
          {users?.role == "admin" && (
            <li>
              <Link to="/dashboard/addbrand">Add Products</Link>
            </li>
          )}
          {users?.role == "admin" && (
            <li>
              <Link to="/dashboard/allproducts">Manage Products</Link>
            </li>
          )}
          <li>
            <Link to="/dashboard/alluser">All User</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
