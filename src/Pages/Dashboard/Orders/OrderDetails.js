import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useGetAllUserQuery } from "../../../features/api/loginApi";

const OrderDetails = ({ order }) => {
  const { data: getAllUsers } = useGetAllUserQuery();
  const allUsers = getAllUsers?.data;

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  // delivery
  const handleToggle = async (id, isEnabled) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/v1/order/${id}`,
        {
          isEnabled: !isEnabled,
        }
      );
      if (response) {
        setTimeout(() => {
          window.location.reload();
        }, 10);
        setIsOpen(false);
        document.body.style.overflow = "auto";
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="px-6 py-2 bg-[#9A583B] rounded-sm text-white font-bold"
      >
        #OR{order?.orderNumber}
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-md">
            <div className="card bg-base-100 overflow-auto shadow-xl mb-12">
              <div className="card-body">
                <div className="text-center">
                  <h2 className=" font-bold">
                    Order No. #OR{order?.orderNumber}
                  </h2>
                </div>
                <div
                  className="flex flex-col items-start font-extralight"
                  style={{ lineHeight: "30px" }}
                >
                  <p>
                    Name: {order?.firstName} {order?.lastName}
                    {allUsers?.length}
                  </p>
                  <p>Email: {order?.email}</p>
                  <p>Address: {order?.address}</p>
                  <p>Phone: {order?.phone}</p>
                  <p>Region : {order?.region}</p>
                  <p>District: {order?.district}</p>
                </div>
                <button
                  onClick={() => handleToggle(order?._id, order?.isEnabled)}
                >
                  {/* {order?.isEnabled === false ? (
                    <p className="px-4 py-2 bg-green-500 text-white font-bold">
                      Confirm
                    </p>
                  ) : (
                    <p className="px-4 py-2 bg-red-500 text-white font-bold">
                      Delivered
                    </p>
                  )} */}
                  {order?.isEnabled === false && (
                    <p className="px-4 py-2 bg-green-500 text-white font-bold">
                      Confirm
                    </p>
                  )}
                </button>
              </div>
            </div>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
