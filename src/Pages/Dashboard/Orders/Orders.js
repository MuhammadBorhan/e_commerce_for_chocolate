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

  // const userPosition = "6:100000";

  // const [userLevel, userPositionIndex] = userPosition.split(":").map(Number);
  // let parentLevels = [];
  // let parentPositions = [];

  // for (let level = userLevel - 1; level >= 1; level--) {
  //   const levelMultiplier = Math.ceil(
  //     userPositionIndex / 10 ** (userLevel - level)
  //   );
  //   parentLevels.push(level);
  //   parentPositions.push(`${level}:${levelMultiplier}`);
  // }
  return (
    <div className="p-6 bg-[#F4F6F9]">
      <h1 className="text-xl font-bold mb-4">Total Orders {orders?.length}</h1>
      {/* <p>user position: {userPosition}</p>
      <p>Parent Levels: {parentLevels.join(", ")}</p>
      <p>Parent Positions: {parentPositions.join(", ")}</p> */}
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
