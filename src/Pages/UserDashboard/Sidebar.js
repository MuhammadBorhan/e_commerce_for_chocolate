import React from "react";
import { MdDashboard, MdOutlineWorkHistory, MdPayment } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiOutlineUnorderedList } from "react-icons/ai";

const Sidebar = () => {
  return (
    <div
      className={`bg-[#914221] text-white h-screen p-4 hidden md:block shrink-0 w-[230px]`}
    >
      <ul className="space-y-4">
        <li>
          <Link to="/user/dashboard" className="flex items-center gap-x-1">
            <MdDashboard /> <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/user/dashboard/order-history"
            className="flex items-center gap-x-1"
          >
            <MdOutlineWorkHistory /> <span>Order History</span>
          </Link>
        </li>
        <li>
          <Link
            to="/user/dashboard/shipping-address"
            className="flex items-center gap-x-1"
          >
            <FaRegAddressCard /> <span>Shipping Address</span>
          </Link>
        </li>
        <li>
          <Link
            to="/user/dashboard/payment"
            className="flex items-center gap-x-1"
          >
            <MdPayment /> <span>Payment Method</span>
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/order-history"
            className="flex items-center gap-x-1"
          >
            <AiOutlineUnorderedList /> <span>Wish List</span>
          </Link>
        </li>
      </ul>
      <Link to="/user/dashboard/subscription">
        <button className=" mt-2 btn btn-outline bg-slate-100 text-yellow-900">
          Add Subscription
        </button>
      </Link>
    </div>
  );
};

export default Sidebar;
