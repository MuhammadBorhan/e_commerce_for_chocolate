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
    } else if (users <= 110) {
      return 2;
    } else if (users <= 1110) {
      return 3;
    } else if (users <= 11110) {
      return 4;
    } else if (users <= 111110) {
      return 5;
    } else if (users <= 1111110) {
      return 6;
    } else {
      return 0;
    }
  };

  const getPosition = (userCount) => {
    const level = getUserLevel(userCount);
    if (level === 1) {
      return `1:${userCount}`;
    } else if (level === 2) {
      return `2:${userCount - 10}`;
    } else if (level === 3) {
      return `3:${userCount - 110}`;
    } else if (level === 4) {
      return `4:${userCount - 1110}`;
    } else if (level === 5) {
      return `5:${userCount - 11110}`;
    } else if (level === 6) {
      return `6:${userCount - 111110}`;
    } else {
      return "0";
    }
  };

  // Function to determine the position based on the serial number
  // function getPosition(serialNumber) {
  //   const level = getUserLevel(serialNumber);
  //   let positionWithinLevel;

  //   if (level == 1) {
  //     positionWithinLevel = ((serialNumber - 1) % 10) + 1;
  //   } else if (level == 2) {
  //     positionWithinLevel = ((serialNumber - 11) % 90) + 11;
  //   } else if (level == 3) {
  //     positionWithinLevel = ((serialNumber - 101) % 900) + 101;
  //   } else if (level == 4) {
  //     positionWithinLevel = ((serialNumber - 1001) % 9000) + 1001;
  //   } else if (level == 5) {
  //     positionWithinLevel = ((serialNumber - 10001) % 90000) + 10001;
  //   } else if (level == 6) {
  //     positionWithinLevel = ((serialNumber - 100001) % 900000) + 100001;
  //   }

  //   if (
  //     positionWithinLevel > 100 &&
  //     level != 3 &&
  //     level != 4 &&
  //     level != 5 &&
  //     level != 6
  //   ) {
  //     level++;
  //     positionWithinLevel = 1;
  //   }

  //   if (level > 1 && level != 3 && level != 4 && level != 5 && level != 6) {
  //     positionWithinLevel += (level - 2) * 100;
  //   }

  //   if (level > 6) {
  //     positionWithinLevel += (level - 6) * 900000 + 100001;
  //   }

  //   const position = level + ":" + positionWithinLevel;
  //   return position;
  // }
  //   getPosition();

  const getCoinsForPosition = (position) => {
    const [level, index] = position.split(":");

    if (level === "1" && index >= 1 && index <= 10) {
      return 100;
    } else if (level === "2" && index >= 1 && index <= 100) {
      return 50;
    } else if (level === "3" && index >= 1 && index <= 1000) {
      return 30;
    } else if (level === "4" && index >= 1 && index <= 10000) {
      return 12;
    } else if (level === "5" && index >= 1 && index <= 100000) {
      return 6;
    } else if (level === "6" && index >= 1 && index <= 1000000) {
      return 2;
    } else {
      return 0;
    }
  };
  const position = "6:100";
  const coins = getCoinsForPosition(position);

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
          <h2 className="text-xl font-bold mt-2">
            User Level With Position {coins}
          </h2>
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

// My React website for Multilevel Marketing (MLM) has coin system where user will get 200 coins for each order confirmation. If user's position is between 1:1 to 1:10 means level 1 then that user will get only 100 coins out of 200 coins, or if user's position is between 2:1 to 2:100 means level 2 then that user will get only 50 coins out of 200 coins will get, Or if user's position is between 3:1 to 3:1000 means level 3 then that user will get only 30 coins out of 200 coins. Or if the user's position is between 4:1 and 4:10000 means level 4 then that user will get only 12 coins out of 200 coins. Or if user's position is between 5:1 to 5:100000 means level 5 then that user will get only 6 coins out of 200 coins. Or if the user's position is between 6:1 and 6:1000000 means level 6 then that user will get only 2 coins out of 200 coins.

// In my React project the user will get 200 coins after confirming his order. But there is some level system conditions because there are many users on my website so I have made total 6 levels where level 1 will be the first 10 sign-up users, level 2 will be the next 100 sign-up users, level 3 will be The next 1000 sign-up users, level 4 will be The next 10000 sign-up users, level 5 will be The next 100000 sign-up users, and level 6 will be The next 1000000 sign-up users. Level 1 user positions will be from 1:1 to 1:10, level 2 user positions from 2:1 to 2:100. Thus the position of users up to level 6 will be 6:1000000. Now the user who will confirm the order if he is level 1 then he will get only 100 coins out of 200 coins, if he is level 2 then he will get only 50 coins out of 200 coins, if he is level 3 then he will get only 30 coins out of 200 coins will get, if level 4 then he will get only 12 coins out of 200 coins, if level 5 then he will get only 6 coins out of 200 coins, if level 6 then he will get only 2 coins out of 200 coins. Thus, every time the user orders, his level will be added to the previous coins.
