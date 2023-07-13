import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useGetAllUserQuery } from "../../../features/api/loginApi";

const OrderDetails = ({ order }) => {
  const { data: getAllUsers } = useGetAllUserQuery();
  const allUsers = getAllUsers?.data;
  const filters = allUsers?.filter((user) => user?.email === order?.email);
  const finding = filters?.find((user) => user);
  const index = allUsers?.findIndex((user) => user?.email === order?.email);
  const userPosition = index + 1;

  const getUserLevel = (position) => {
    if (position <= 10) {
      return 1;
    } else if (position <= 110) {
      return 2;
    } else if (position <= 1110) {
      return 3;
    } else if (position <= 11110) {
      return 4;
    } else if (position <= 111110) {
      return 5;
    } else if (position <= 1111110) {
      return 6;
    } else {
      return 0;
    }
  };
  const level = getUserLevel(userPosition);

  const getPosition = (count) => {
    const level = getUserLevel(count);
    if (level === 1) {
      return `1:${count}`;
    } else if (level === 2) {
      return `2:${count - 10}`;
    } else if (level === 3) {
      return `3:${count - 110}`;
    } else if (level === 4) {
      return `4:${count - 1110}`;
    } else if (level === 5) {
      return `5:${count - 11110}`;
    } else if (level === 6) {
      return `6:${count - 111110}`;
    } else {
      return "0";
    }
  };
  const position = getPosition(userPosition);

  let getCoin;
  if (level == 1) {
    getCoin = 100;
  } else if (level == 2) {
    getCoin = 50;
  } else if (level == 3) {
    getCoin = 30;
  } else if (level == 4) {
    getCoin = 12;
  } else if (level == 5) {
    getCoin = 6;
  } else if (level == 6) {
    getCoin = 2;
  }

  // try to find parent level and position
  const [parentLevel, parentPosition] = calculateParent(position);
  function calculateParent(uPosition) {
    let parentLevel, parentPosition;

    const [level, position] = uPosition.split(":").map(Number);

    if (level === 1) {
      parentLevel = null; // no parent for level 1
      parentPosition = null; // no parent for position 1:1
    } else {
      parentLevel = level - 1;

      const parentPositions = Math.ceil(position / 10);
      parentPosition = `${parentLevel}:${parentPositions}`;
    }

    return [parentLevel, parentPosition];
  }

  // Find parent user
  const parentUser = parentPosition
    ? allUsers?.find((user) => {
        const [level, uPosition] = position.split(":").map(Number);
        const [parentLevel, parentPositionIndex] = parentPosition
          .split(":")
          .map(Number);
        return (
          level > parentLevel &&
          uPosition >= parentPositionIndex &&
          uPosition < parentPositionIndex + 10
        );
      })
    : null;
  // console.log(parentUser?._id);

  let parentCoin;
  if (level == 1) {
    parentCoin = 0;
  } else if (level > 1) {
    parentCoin = 100;
  }

  const handleToggle = async (id, isEnabled) => {
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/v1/order/${id}`,
        {
          isEnabled: !isEnabled,
        }
      );
      const response2 = await axios.patch(
        `http://localhost:5000/api/v1/user/${finding?._id}`,
        {
          earnedCoin: getCoin,
        }
      );
      const response3 = await axios.patch(
        `http://localhost:5000/api/v1/user/${parentUser?._id}`,
        {
          earnedCoin: parentCoin,
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

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
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
                  </p>
                  <p>Email: {order?.email}</p>
                  <p>Address: {order?.address}</p>
                  <p>Phone: {order?.phone}</p>
                  <p>Region : {order?.region}</p>
                  <p>District: {order?.district}</p>
                  <p>serial: {userPosition}</p>
                  <p>level: {level}</p>
                  <p>position: {position}</p>
                  <p>pLevel: {parentLevel}</p>
                  <p>pPosition: {parentPosition}</p>
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

// I have many users on my website. So I have divided them into 6 levels. First 10 users in level 1, next 100 users in level 2, next 1000 users in level 3, next 10000 users in level 4, next 100000 users in level 5, next 100000 users in level 6. Where user position of level 1 is 1:1 to 1:10, level 2 is 2:1 to 2:100, level 3 is 3:1 to 3:1000, level 4 is 4:1 to 4:10000, level 5 is 5:1 to 5:100000, level 6 is 6:1 to 6:100000. 1:1 means position number 1 of level 1, 1:6 means position number 6 of level 1, 1:10 means position number 10 of level 1, 2:45 means position number 45 of level 2, 6:3333 means position number 3333 of level 6. Here, each user has 10 children. That means for example 2:1 position to 2:10 position is child of 1:1, 2:11 position to 2:20 position is child of 1:2, 3:31 position to 3:40 position is child of 2:4 and same process will the rest position.
// Now if the user's position is 2:8 it means this user's parent level 1 and position is 1:1.
