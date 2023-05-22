import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useGetUserQuery } from "../features/api/loginApi";
import { MdDashboard } from "react-icons/md";
import { TbBrandShopee, TbGiftCard } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi";
import { SiBrandfolder } from "react-icons/si";
import { BsCalendarEvent, BsGift } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { RiProductHuntLine } from "react-icons/ri";

import { IoMdArrowDropdown } from "react-icons/io";

const DashboardLayout = () => {
  const [pShow, setPShow] = useState(false);
  const [rShow, setRShow] = useState(false);
  const [bShow, setBShow] = useState(false);
  const [eShow, setEShow] = useState(false);
  const [gShow, setGShow] = useState(false);

  const { data } = useGetUserQuery();
  const users = data?.data;

  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="drawer drawer-mobile bg-slate-50">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet />
      </div>
      <div className="drawer-side shadow-lg shadow-indigo-500/40">
        {/* <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> */}

        <ul className="menu p-4 w-60 bg--slate-50 border-t-[1px] text-yellow-800">
          <Link to="/dashboard">
            <div className="menu bg-[#9A583B]  rounded-md shadow-xl mb-4 p-4 border-t-[1px]">
              <div className=" flex justify-between justify-items-center ">
                <p className="text-xl text-gray-50">
                  <MdDashboard />
                </p>

                <div>
                  <p className="text-gray-50 text-xl font-bold">Dashboard</p>
                </div>
              </div>
            </div>
          </Link>
          {/* region and district */}
          <div
            className="dropdown dropdown-bottom mb-3 mt-1 shadow-md p-2 rounded-md"
            onClick={() => setRShow(!rShow)}
          >
            <label
              tabIndex={0}
              className={`ml-2 cursor-pointer flex ${
                pathname === "/dashboard/addregion"
                  ? "active"
                  : pathname === "/dashboard/regionlist"
                  ? "active"
                  : ""
              }`}
            >
              <div className="mt-1 ml-2">
                <CiLocationOn />
              </div>
              <div className="ml-2">Region & District</div>
              <div className="mt-1 ml-2">
                <IoMdArrowDropdown />
              </div>
            </label>

            {rShow && (
              <ul
                tabIndex={0}
                className="dropdown-content menu shadow bg-slate-50 w-50"
              >
                <li>
                  <Link to="/dashboard/addregion">Add Region & District</Link>
                </li>
                <li>
                  <Link to="/dashboard/regionlist">All Region & District</Link>
                </li>
              </ul>
            )}
          </div>

          {/* Products  */}

          <div
            onClick={() => setPShow(!pShow)}
            className={`dropdown dropdown-bottom mb-3 mt-1 shadow-md p-2 rounded-md ${
              rShow ? "mt-24" : "mt-0"
            }`}
          >
            <label
              tabIndex={0}
              className={`ml-2 cursor-pointer flex ${
                pathname === "/dashboard/addproduct"
                  ? "active"
                  : pathname === "/dashboard/addproduct"
                  ? "active"
                  : ""
              }`}
            >
              <div className="mt-1 ml-2">
                <RiProductHuntLine />
              </div>
              <div className="ml-2">Products</div>
              <div className="mt-1 ml-2">
                <IoMdArrowDropdown />
              </div>
            </label>
            {pShow && (
              <ul
                tabIndex={0}
                className="dropdown-content menu shadow bg-slate-50  w-50"
              >
                <li>
                  <Link to="/dashboard/addproduct">Add Products</Link>
                </li>
                <li>
                  <Link to="/dashboard/allproduct">All Products</Link>
                </li>
              </ul>
            )}
          </div>

          {/* Brand  */}

          <div
            onClick={() => setBShow(!bShow)}
            className={`dropdown dropdown-bottom mb-3 mt-1 shadow-md p-2 rounded-md ${
              pShow ? "mt-24" : "mt-0"
            }`}
          >
            <label
              tabIndex={0}
              className={`ml-2 cursor-pointer flex ${
                pathname === "/dashboard/addbrand"
                  ? "active"
                  : pathname === "/dashboard/brandlist"
                  ? "active"
                  : ""
              }`}
            >
              <div className="mt-1 ml-2">
                <SiBrandfolder />
              </div>
              <div className="ml-2">Brands</div>
              <div className="mt-1 ml-2">
                <IoMdArrowDropdown />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu shadow bg-slate-50  w-50"
            >
              <li>
                <Link to="/dashboard/addbrand">Add Brand</Link>
              </li>
              <li>
                <Link to="/dashboard/brandlist">Brands List</Link>
              </li>
            </ul>
          </div>

          {/* Add Gift Items  */}
          <div className="dropdown dropdown-bottom mt-2 shadow-md p-2 rounded-md">
            <label
              tabIndex={0}
              className={`ml-2 cursor-pointer flex ${
                pathname === "/dashboard/addgiftitem"
                  ? "active"
                  : pathname === "/dashboard/giftitemlist"
                  ? "active"
                  : ""
              }`}
            >
              <div className="mt-1 ml-2">
                <BsGift />
              </div>
              <div className="ml-2">Gift Box</div>
              <div className="mt-1 ml-2">
                <IoMdArrowDropdown />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu shadow bg-slate-50  w-50"
            >
              <li>
                <Link to="/dashboard/addgiftitem">Add Gift Box</Link>
              </li>
              <li>
                <Link to="/dashboard/giftitemlist">Gift Box List</Link>
              </li>
            </ul>
          </div>

          {/* Trending Gift  */}

          <div className="dropdown dropdown-bottom mt-2 shadow-md p-2 rounded-md">
            <label
              tabIndex={0}
              className={`ml-2 cursor-pointer flex ${
                pathname === "/dashboard/addtgift"
                  ? "active"
                  : pathname === "/dashboard/trendgiftlist"
                  ? "active"
                  : ""
              }`}
            >
              <div className="mt-1 ml-2">
                <TbGiftCard />
              </div>
              <div className="ml-2">Trending Gift</div>
              <div className="mt-1 ml-2">
                <IoMdArrowDropdown />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu shadow bg-slate-50  w-50"
            >
              <li>
                <Link to="/dashboard/addtgift">Add TrendingGift</Link>
              </li>
              <li>
                <Link to="/dashboard/trendgiftlist">TrendingGift List</Link>
              </li>
            </ul>
          </div>

          {/* Event  */}

          <div className="dropdown dropdown-bottom mt-2 shadow-md p-2 rounded-md">
            <label
              tabIndex={0}
              className={`ml-2 cursor-pointer flex ${
                pathname === "/dashboard/addevent"
                  ? "active"
                  : pathname === "/dashboard/eventlist"
                  ? "active"
                  : ""
              }`}
            >
              <div className="mt-1 ml-2">
                <BsCalendarEvent />
              </div>
              <div className="ml-2">Events</div>
              <div className="mt-1 ml-2">
                <IoMdArrowDropdown />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu shadow bg-slate-50  w-50"
            >
              <li>
                <Link to="/dashboard/addevent">Add Event</Link>
              </li>
              <li>
                <Link to="/dashboard/eventlist">Event List</Link>
              </li>
            </ul>
          </div>

          {/* users */}
          <div className="dropdown dropdown-bottom mt-2 shadow-md p-2 rounded-md">
            <label
              tabIndex={0}
              className={`ml-2 cursor-pointer flex ${
                pathname === "/dashboard/alluser" ? "active" : ""
              }`}
            >
              <div className="mt-1 ml-2">
                <HiOutlineUsers />
              </div>
              <div className="ml-2">Users</div>
              <div className=" mt-1 ml-2 ">
                <IoMdArrowDropdown />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu shadow bg-slate-50  w-50"
            >
              <li>
                <Link to="/dashboard/alluser">Manage User</Link>
              </li>
            </ul>
          </div>

          {/* dropdown  */}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
