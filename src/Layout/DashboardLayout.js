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
  const [gShow, setGShow] = useState(false);
  const [trShow, setTrShow] = useState(false);
  const [eShow, setEShow] = useState(false);
  const [uShow, setUShow] = useState(false);
  const [blankShow, setBlankShow] = useState(false);

  const handleRegion = () => {
    setRShow(!rShow);
    setPShow(false);
    setBShow(false);
    setGShow(false);
    setTrShow(false);
    setEShow(false);
    setUShow(false);
    setBlankShow(false);
  };
  const handleProduct = () => {
    setPShow(!pShow);
    setRShow(false);
    setBShow(false);
    setGShow(false);
    setTrShow(false);
    setEShow(false);
    setUShow(false);
    setBlankShow(false);
  };
  const handleBrand = () => {
    setBShow(!bShow);
    setPShow(false);
    setRShow(false);
    setGShow(false);
    setTrShow(false);
    setEShow(false);
    setUShow(false);
    setBlankShow(false);
  };
  const handleGiftBox = () => {
    setGShow(!gShow);
    setBShow(false);
    setPShow(false);
    setRShow(false);
    setTrShow(false);
    setEShow(false);
    setUShow(false);
    setBlankShow(false);
  };
  const handleTrending = () => {
    setTrShow(!trShow);
    setGShow(false);
    setBShow(false);
    setPShow(false);
    setRShow(false);
    setEShow(false);
    setUShow(false);
    setBlankShow(false);
  };
  const handleEvent = () => {
    setEShow(!eShow);
    setTrShow(false);
    setGShow(false);
    setBShow(false);
    setPShow(false);
    setRShow(false);
    setUShow(false);
    setBlankShow(false);
  };
  const handleBlankBox = () => {
    setBlankShow(!blankShow);
    setEShow(false);
    setTrShow(false);
    setGShow(false);
    setBShow(false);
    setPShow(false);
    setRShow(false);
    setUShow(false);
  };
  const handleUsers = () => {
    setUShow(!uShow);
    setEShow(false);
    setTrShow(false);
    setGShow(false);
    setBShow(false);
    setPShow(false);
    setRShow(false);
    setBlankShow(false);
  };
  

  const { data } = useGetUserQuery();
  const users = data?.data;

  const location = useLocation();
  const { pathname } = location;

  return (
    <div className="drawer drawer-mobile bg-slate-50 ">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet />
      </div>
      <div className="drawer-side shadow-lg shadow-indigo-500/40">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>

        <ul className="menu p-4 w-60 bg-slate-50 border-t-[1px] text-yellow-800">
          <Link to="/dashboard">
            <div className="menu bg-[#9A583B]  rounded-md shadow-xl mb-4 p-4 border-t-[1px]">
              <div className=" flex justify-between items-center ">
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
            onClick={handleRegion}
            className="dropdown dropdown-bottom mb-3 mt-1 shadow-md p-2 rounded-md"
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
              <p className="ml-2">Region & District</p>
              <p className="mt-1 ml-2">
                <IoMdArrowDropdown />
              </p>
            </label>

            {rShow && (
              <ul
                tabIndex={0}
                className="dropdown-content menu shadow bg-slate-200 w-50"
              >
                <li htmlFor="dashboard-drawer">
                  <Link to="/dashboard/addregion">Add Region & District</Link>
                </li>
                <li>
                  <Link to="/dashboard/regionlist">All Region & District</Link>
                </li>
              </ul>
            )}
          </div>

          {/* Brand  */}
          <div
            onClick={handleBrand}
            className={`dropdown dropdown-bottom mb-3 mt-1 shadow-md p-2 rounded-md ${
              rShow ? "mt-24" : "mt-0"
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
            {bShow && (
              <ul
                tabIndex={0}
                className="dropdown-content menu shadow bg-slate-200  w-50"
              >
                <li>
                  <Link to="/dashboard/addbrand">Add Brand</Link>
                </li>
                <li>
                  <Link to="/dashboard/brandlist">Brands List</Link>
                </li>
              </ul>
            )}
          </div>

          {/* Products  */}

          <div
            onClick={handleProduct}
            className={`dropdown dropdown-bottom mb-3 mt-1 shadow-md p-2 rounded-md ${
              bShow ? "mt-24" : "mt-0"
            }`}
          >
            <label
              tabIndex={0}
              className={`ml-2 cursor-pointer flex ${
                pathname === "/dashboard/allproduct"
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
                className="dropdown-content menu shadow bg-slate-200  w-50"
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

          {/* Add Gift Items  */}
          <div
            onClick={handleGiftBox}
            className={`dropdown dropdown-bottom mb-3 mt-1 shadow-md p-2 rounded-md ${
              pShow ? "mt-24" : "mt-0"
            }`}
          >
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
            {gShow && (
              <ul
                tabIndex={0}
                className="dropdown-content menu shadow bg-slate-200  w-50"
              >
                <li>
                  <Link to="/dashboard/addgiftitem">Add Gift Box</Link>
                </li>
                <li>
                  <Link to="/dashboard/giftitemlist">Gift Box List</Link>
                </li>
              </ul>
            )}
          </div>

          {/* Trending Gift  */}

          <div
            onClick={handleTrending}
            className={`dropdown dropdown-bottom mb-3 mt-1 shadow-md p-2 rounded-md ${
              gShow ? "mt-24" : "mt-0"
            }`}
          >
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
            {trShow && (
              <ul
                tabIndex={0}
                className="dropdown-content menu shadow bg-slate-200  w-50"
              >
                <li>
                  <Link to="/dashboard/addtgift">Add TrendingGift</Link>
                </li>
                <li>
                  <Link to="/dashboard/trendgiftlist">TrendingGift List</Link>
                </li>
              </ul>
            )}
          </div>

          {/* Event  */}

          <div
            onClick={handleEvent}
            className={`dropdown dropdown-bottom mb-3 mt-1 shadow-md p-2 rounded-md ${
              trShow ? "mt-24" : "mt-0"
            }`}
          >
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
            {eShow && (
              <ul
                tabIndex={0}
                className="dropdown-content menu shadow bg-slate-200  w-50"
              >
                <li>
                  <Link to="/dashboard/addevent">Add Event</Link>
                </li>
                <li>
                  <Link to="/dashboard/eventlist">Event List</Link>
                </li>
              </ul>
            )}
          </div>

           {/* BlankBox  */}

           <div
            onClick={handleBlankBox}
            className={`dropdown dropdown-bottom mb-3 mt-1 shadow-md p-2 rounded-md ${
              eShow ? "mt-24" : "mt-0"
            }`}
          >
            <label
              tabIndex={0}
              className={`ml-2 cursor-pointer flex ${
                pathname === "/dashboard/addblankbox"
                  ? "active"
                  : pathname === "/dashboard/blanklist"
                  ? "active"
                  : ""
              }`}
            >
              <div className="mt-1 ml-2">
                <BsCalendarEvent />
              </div>
              <div className="ml-2">Blank Box</div>
              <div className="mt-1 ml-2">
                <IoMdArrowDropdown />
              </div>
            </label>
            {blankShow && (
              <ul
                tabIndex={0}
                className="dropdown-content menu shadow bg-slate-200  w-50"
              >
                <li>
                  <Link to="/dashboard/addblankbox">Add Blank Box</Link>
                </li>
                <li>
                  <Link to="/dashboard/blanklist">Blank Box List</Link>
                </li>
              </ul>
            )}
          </div>

          {/* users */}
          <div
            onClick={handleUsers}
            className={`dropdown dropdown-bottom mb-3 mt-1 shadow-md p-2 rounded-md ${
              blankShow ? "mt-24" : "mt-0"
            }`}
          >
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
            {uShow && (
              <ul
                tabIndex={0}
                className="dropdown-content menu shadow bg-slate-200  w-50"
              >
                <li>
                  <Link to="/dashboard/alluser">Manage User</Link>
                </li>
                <li>
                  <Link to="/dashboard/visitor">Visitor's</Link>
                </li>
              </ul>
            )}
          </div>

          {/* dropdown  */}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
