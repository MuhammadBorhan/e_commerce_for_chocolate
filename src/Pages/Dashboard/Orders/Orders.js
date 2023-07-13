import React, { useEffect, useState } from "react";
import axios from "axios";
import OrderDetails from "./OrderDetails";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/v1/orders`);
        setOrders(response?.data?.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);
  return (
    <div className="p-6 bg-[#F4F6F9]">
      <h1 className="text-xl font-bold mb-4">Total Orders {orders?.length}</h1>
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-2">
        {orders?.map((order, index) => (
          <div className="p-4 bg-white shadow-md text-center" key={index}>
            <OrderDetails order={order} />
            <p className=" font-bold mt-4">
              {order?.isEnabled === true ? (
                <span className="text-red-500">Delivered</span>
              ) : (
                <span className="text-blue-500">Pending</span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
