import axios from "axios";
import React, { useEffect, useState } from "react";
import { useGetUserQuery } from "../../../features/api/loginApi";
import { useGetAllGiftBoxQuery } from "../../../features/api/GiftBoxApi";
import { useGetAllBlankBoxQuery } from "../../../features/api/blankBoxApi";

const Order = () => {
  // user
  const { data } = useGetUserQuery();
  const user = data?.data;
  // all gift box
  const { data: allGiftBox } = useGetAllGiftBoxQuery();
  const giftBox = allGiftBox?.data;
  //all blank box
  const { data: allBlankBox } = useGetAllBlankBoxQuery();
  const blankBox = allBlankBox?.data;
  // fetch all order
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5003/api/v1/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data?.data));
  }, []);

  return (
    <div>
      <div className="p-8">
        <div className="overflow-x-auto">
          <h2 className="text-xl font-bold mt-2">Your Order</h2>
          <table className="table w-full mt-2">
            {/* head */}
            <thead>
              <tr>
                <th>Order No.</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Total Amount</th>
                <th>Gift Box Image</th>
                <th>Blank Box Image</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {orders?.map((order, index) => {
                // gift box image
                const giftBoxImage = giftBox?.filter(
                  (box) => box?.name === order?.product
                );
                // blank box image
                const blankBoxImage = blankBox?.filter((box) => {
                  return order?.boxName?.some((order) => order === box?.name);
                });
                return (
                  <tr key={index}>
                    <th>#OR{order?.orderNumber}</th>
                    <td>{order?.product}</td>
                    <td>{order?.quantity}</td>
                    <td>${order?.amount}</td>
                    <td>
                      <img
                        src={`http://localhost:5003/${giftBoxImage[0]?.image}`}
                        className="w-16"
                      />
                    </td>
                    <td className="flex gap-x-1 w-28 overflow-x-auto">
                      {blankBoxImage?.map((img) => (
                        <img
                          src={`http://localhost:5003/${img?.image}`}
                          className="w-8"
                        />
                      ))}
                    </td>

                    {/* <td>
                      {" "}
                      <button
                        className="text-blue-500"
                        style={{ width: "40px", fontSize: "25px" }}
                      >
                        <Linl to={`/dashboard/updatebrand/${brand?._id}`}>
                          <FaEdit />
                        </Link>
                      </button>
                      <button
                        onClick={() => handleDelete(brand?._id)}
                        className="text-red-500"
                        style={{ width: "40px", fontSize: "25px" }}
                      >
                        <AiTwotoneDelete />
                      </button>
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Order;
