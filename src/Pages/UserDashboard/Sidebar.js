import React from "react";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

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
          <Link to="/user/dashboard/order-history">Order History</Link>
        </li>
        <li>
          <Link to="/shipping-addresses">Shipping Addresses</Link>
        </li>
        <li>
          <Link to="/payment-methods">Payment Methods</Link>
        </li>
        <li>
          <Link to="/wish-list">Wish List</Link>
        </li>
        <li>
          <Link to="/customer-support">Customer Support</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
