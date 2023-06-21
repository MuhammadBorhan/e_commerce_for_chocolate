import axios from "axios";
import React, { useEffect, useState } from "react";
import { useGetUserQuery } from "../../../features/api/loginApi";

const Order = () => {
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
    <div>
      <div className="p-8">
        <div className="overflow-x-auto">
          <h2 className="text-xl font-bold mt-2">Your Order</h2>
          <table className="table w-full mt-2">
            {/* head */}
            <thead>
              <tr>
                <th>Order No.</th>
                <th>Amount</th>
                <th>Quantity</th>
                <th>Gift Box Image</th>
                <th>Blank Box Image</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {orders?.map((order, index) => {
                return (
                  <tr key={index}>
                    <th>#OR{order?.orderNumber}</th>
                    {/* <td>#OR{order?.orderNumber}</td> */}
                    <td>{order?.amount}</td>
                    <td>{order?.quantity}</td>
                    <td>
                      <img
                        src={`http://localhost:5000/${order?.logo}`}
                        className="w-16"
                      />
                    </td>
                    <td>
                      <img
                        src={`http://localhost:5000/${order?.image}`}
                        className="w-32"
                      />
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
