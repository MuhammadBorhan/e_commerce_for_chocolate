import React from "react";
import { RxCrossCircled } from "react-icons/rx";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const SidebarMobile = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`bg-gray-200 h-screen fixed z-50 w-[60%] transition-transform duration-300 transform p-4 block md:hidden ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <ul className="space-y-4">
        <button
          className="absolute text-red-500 text-2xl right-2 top-2 block lg:hidden"
          onClick={toggleSidebar}
        >
          <RxCrossCircled />
        </button>
        <li>
          <Link
            to="/user/dashboard"
            onClick={toggleSidebar}
            className="flex items-center gap-x-1"
          >
            <MdDashboard /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/user/dashboard/order-history" onClick={toggleSidebar}>
            Order History
          </Link>
        </li>
        <li>
          <Link to="/user/dashboard/shipping-address" onClick={toggleSidebar}>
            Shipping Addresses
          </Link>
        </li>
        <li>
          <Link to="/user/dashboard/payment" onClick={toggleSidebar}>
            Payment Methods
          </Link>
        </li>
        <li>
          <Link to="/wish-list" onClick={toggleSidebar}>
            Wish List
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SidebarMobile;
