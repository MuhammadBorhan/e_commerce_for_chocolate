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

        <ul className="menu p-4 w-60 bg-[#9A583B] border-t-[1px] text-white">
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
          {/* {users?.role == "user" && (
          <li>
            <Link to="/dashboard/addbrand">Add Products</Link>
          </li>
          )} */}
          <div className="dropdown dropdown-bottom">
            <label tabIndex={0} className="ml-2 cursor-pointer">
              Products
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-[#6d2507] rounded-box w-50"
            >
              <li>
                <Link to="/dashboard/addproduct">Add Products</Link>
              </li>
              <li>
                <Link>All Products</Link>
              </li>
            </ul>
          </div>

          {/* Brand  */}

          <div className="dropdown dropdown-bottom mt-2">
            <label tabIndex={0} className="ml-2  cursor-pointer">
              Brands
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-[#6d2507] rounded-box w-50"
            >
              <li>
                <Link to="/dashboard/addbrand">Add Brand</Link>
              </li>
              <li>
                <Link>Brands Details</Link>
              </li>
            </ul>
          </div>

          {/* Add Gift Items  */}
          <div className="dropdown dropdown-bottom mt-2">
            <label tabIndex={0} className="ml-2  cursor-pointer">
              Gift Items
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-[#6d2507] rounded-box w-50"
            >
              <li>
                <Link to="/dashboard/addgiftitem">Add Gift Items</Link>
              </li>
              <li>
                <Link>Gift Item List</Link>
              </li>
            </ul>
          </div>

          {users?.role == "admin" && (
            <li>
              <Link to="/dashboard/allproducts">Manage Products</Link>
            </li>
          )}
          <li>
            <Link to="/dashboard/alluser">All User</Link>
          </li>
          {/* dropdown  */}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
