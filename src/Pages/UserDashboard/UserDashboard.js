import React, { useState } from "react";

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import SidebarMobile from "./SidebarMobile";
import { MdDashboard } from "react-icons/md";

const UserDashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="flex">
      {!isSidebarOpen && (
        <button
          className="absolute text-2xl bg-gray-500 p-1 rounded-full text-white z-20 left-2 top-20 block lg:hidden"
          onClick={toggleSidebar}
        >
          <MdDashboard />
        </button>
      )}
      <Sidebar className="" />
      <SidebarMobile isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      {/* <div className=" z-10  flex-1">
        <Outlet />
      </div> */}
    </div>
  );
};

export default UserDashboard;
