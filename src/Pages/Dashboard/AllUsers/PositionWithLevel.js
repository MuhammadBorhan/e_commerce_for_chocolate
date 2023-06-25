import React from "react";
import {
  useGetAllUserQuery,
  useGetUserQuery,
} from "../../../features/api/loginApi";

import DashBoardMenu from "../../../Components/DashBoardMenu/DashBoardMenu";

const PositionWithLevel = () => {
  const { data, isLoading } = useGetAllUserQuery();
  const users = data?.data;

  const { data: me } = useGetUserQuery();
  const getMe = me?.data;

  // Users Level calculation MLM structure
  const getUserLevel = (users) => {
    if (users <= 10) {
      return 1;
    } else if (users <= 100) {
      return 2;
    } else if (users <= 1000) {
      return 3;
    } else if (users <= 10000) {
      return 4;
    } else if (users <= 100000) {
      return 5;
    } else if (users <= 1000000) {
      return 6;
    } else {
      return 0;
    }
  };

  // Function to determine the position based on the serial number
  function getPosition(serialNumber) {
    const level = getUserLevel(serialNumber);
    let positionWithinLevel;

    if (level == 1) {
      positionWithinLevel = ((serialNumber - 1) % 10) + 1;
    } else if (level == 2) {
      positionWithinLevel = ((serialNumber - 11) % 90) + 11;
    } else if (level == 3) {
      positionWithinLevel = ((serialNumber - 101) % 900) + 101;
    } else if (level == 4) {
      positionWithinLevel = ((serialNumber - 1001) % 9000) + 1001;
    } else if (level == 5) {
      positionWithinLevel = ((serialNumber - 10001) % 90000) + 10001;
    } else if (level == 6) {
      positionWithinLevel = ((serialNumber - 100001) % 900000) + 100001;
    }

    if (
      positionWithinLevel > 100 &&
      level != 3 &&
      level != 4 &&
      level != 5 &&
      level != 6
    ) {
      level++;
      positionWithinLevel = 1;
    }

    if (level > 1 && level != 3 && level != 4 && level != 5 && level != 6) {
      positionWithinLevel += (level - 2) * 100;
    }

    if (level > 6) {
      positionWithinLevel += (level - 6) * 900000 + 100001;
    }

    const position = level + ":" + positionWithinLevel;
    return position;
  }
  //   getPosition();

  if (isLoading) {
    return (
      <p className="text-red-500 text-center mt-[25%] text-2xl">Loading...</p>
    );
  }
  return (
    <div>
      <DashBoardMenu></DashBoardMenu>
      <div className="p-8">
        <div className="overflow-x-auto">
          <h2 className="text-xl font-bold mt-2">User Level With Position</h2>
          <table className="table w-full mt-2">
            {/* head */}
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Username</th>
                <th>Email</th>
                <th>Level</th>
                <th>Position</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, i) => (
                <tr key={user._id}>
                  <th>{i + 1}</th>
                  <td>
                    {user?.firstName +
                      " " +
                      (user?.lastName ? user?.lastName : "")}
                  </td>
                  <td>{user.email}</td>
                  <td>{getUserLevel(i + 1)}</td>
                  <td>{getPosition(i + 1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PositionWithLevel;
