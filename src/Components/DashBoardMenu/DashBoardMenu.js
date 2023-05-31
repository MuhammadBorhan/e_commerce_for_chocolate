import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
const DashBoardMenu = () => {
  return (
    <div className="flex justify-end">
      <label
        htmlFor="dashboard-drawer"
        tabIndex={2}
        className="btn text-yellow-900 btn-ghost lg:hidden"
      >
        <AiOutlineMenu
          className=""
          style={{ width: "30px", fontSize: "23px" }}
        />
      </label>
    </div>
  );
};

export default DashBoardMenu;
