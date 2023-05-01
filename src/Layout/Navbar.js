import React from "react";
import {
  AiOutlineMenu,
  AiOutlineDollarCircle,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed-top">
      {/* menu icon for mobile device */}
      <div
        className="float-start text-white p-3 d-block d-sm-none "
        style={{ height: "60px", backgroundColor: "#7B3F00" }}
      >
        <AiOutlineMenu
          className=""
          style={{ width: "30px", fontSize: "23px" }}
        />
      </div>

      {/* menu icon for desktop device */}
      <div
        className="float-start text-white p-3  d-none d-sm-block "
        style={{ height: "60px", backgroundColor: "#900C3F " }}
      >
        <AiOutlineMenu
          className=""
          style={{ width: "30px", fontSize: "23px" }}
        />
      </div>

      {/* navbar */}
      <div
        className="d-flex justify-content-between align-items-center px-4 "
        style={{ height: "60px", backgroundColor: "#7B3F00" }}
      >
        {/* logo */}
        <div>
          <Link to="/">
            <img
              src="https://cdn.igp.com/raw/upload/assets/images/igp_updated_logo.png"
              style={{ width: "100px" }}
            />
          </Link>
        </div>

        {/* search bar */}
        <div className="d-none d-lg-block">
          <div className="position-relative">
            <input
              className="form-control ps-5"
              type="search"
              placeholder="Search For Gifts"
              aria-label="Search"
              style={{ width: "400px" }}
            />
            <FaSearch
              className="position-absolute top-50 start-0 ms-3 translate-middle-y"
              style={{ cursor: "pointer" }}
            />
          </div>
        </div>

        {/* icon */}
        <div className="d-flex align-items-center  gap-4 gap-lg-5 pt-2 text-white fs-3">
          <p>
            <AiOutlineDollarCircle />
          </p>
          <p className="d-none d-lg-block">
            <MdOutlineLocationOn />
          </p>
          <p>
            <AiOutlineHeart />
          </p>
          <p>
            <AiOutlineShoppingCart />
          </p>
          <p>
            <AiOutlineUser />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
