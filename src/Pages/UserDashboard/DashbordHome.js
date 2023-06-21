import React from "react";
import { FaUsers, FaYenSign } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { useGetUserQuery } from "../../features/api/loginApi";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const DashbordHome = () => {
  const { data } = useGetUserQuery();
  const user = data?.data;

  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/v1/orderlist?role=${user?.role}&email=${user?.email}`
        );
        setOrders(response?.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [user?.role, user?.email]);
  return (
    <div className="bg-[#9a573bc4] h-screen p-4 pt-10 lg:pt-4">
      <h2 className="text-2xl text-white font-bold mb-4 text-center md:text-left">
        User Dashboard
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <div className="flex items-center px-4 py-4 bg-black text-white rounded-2xl justify-between bg-opacity-30">
          <FaUsers className="text-3xl rounded-full bg-white p-1 text-black" />
          <div>
            <h2>{orders?.length}</h2>
            <p>Number of Order</p>
          </div>
        </div>
        <div className="flex items-center px-4 py-4 bg-black text-white rounded-2xl justify-between bg-opacity-30">
          <AiOutlineUserAdd className="text-3xl rounded-full bg-white p-1 text-black" />
          <div>
            <h2>12</h2>
            <p>Number of Order</p>
          </div>
        </div>
        <div className="flex items-center px-4 py-4 bg-black text-white rounded-2xl justify-between bg-opacity-30">
          <FaYenSign className="text-3xl rounded-full bg-white p-1 text-black" />
          <div>
            <h2>5000</h2>
            <p>Total Order Amount</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashbordHome;
