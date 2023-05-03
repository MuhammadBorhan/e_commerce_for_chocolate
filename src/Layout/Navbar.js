import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineDollarCircle,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [modelMenu, setModelMenu] = useState(false);
  return (
    <div className="sticky top-0 z-50">
      {/* menu icon for mobile device */}
      <div
        onClick={() => setModelMenu(!modelMenu)}
        className="float-left text-white px-3 flex items-center lg:hidden "
        style={{ height: "60px", backgroundColor: "#9A583B" }}
      >
        <AiOutlineMenu
          className=""
          style={{ width: "30px", fontSize: "23px" }}
        />
      </div>

      {/* menu icon for desktop device */}
      <div
        onClick={() => setModelMenu(!modelMenu)}
        className="float-left text-white px-3 lg:flex items-center hidden  "
        style={{
          height: "60px",
          backgroundColor: "#900C3F",
          cursor: "pointer",
        }}
      >
        <AiOutlineMenu style={{ width: "30px", fontSize: "23px" }} />
      </div>

      {/* model view Menu start*/}
      {modelMenu && (
        <div
          style={{
            backgroundColor: "#ebedf0",
            position: "absolute",
            width: "100%",
            height: "100vh",
            zIndex: "999",
          }}
        >
          <div className="">
            <div
              onClick={() => setModelMenu(!modelMenu)}
              className="float-start text-white p-3  d-none d-sm-block "
              style={{
                height: "60px",
                backgroundColor: "#900C3F",
                cursor: "pointer",
              }}
            >
              <ImCross
                onClick={() => setModelMenu(false)}
                style={{
                  cursor: "pointer",
                  color: "white",
                  fontSize: "20px",
                }}
              />
            </div>
            <div
              className="d-flex justify-content-between align-items-center px-4 "
              style={{ height: "60px", backgroundColor: "#7B3F00" }}
            >
              {/* logo */}
              <div className="">
                <p className="text-white mt-3">Title</p>
              </div>
            </div>
          </div>

          <div>
            <h1 className="d-flex justify-content-center text-primary">
              Borhan Uddin
            </h1>
          </div>
        </div>
      )}
      {/* model view Menu end*/}

      {/* navbar */}
      <div
        className="flex justify-between items-center px-4 "
        style={{ height: "60px", backgroundColor: "#9A583B" }}
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
        <div class="relative hidden lg:block text-gray-600">
          <input
            class="bg-white h-8 px-5 pr-10 rounded-full text-sm focus:outline-none w-[500px]"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" class="absolute right-0 top-0 mt-2 mr-4 ">
            <svg
              class="h-4 w-4 fill-current"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.656 10.562c-1.031.813-2.344 1.313-3.75 1.313-3.313 0-6-2.688-6-6s2.687-6 6-6 6 2.688 6 6c0 1.406-.5 2.719-1.313 3.75l3.563 3.563-1.406 1.407-3.563-3.563zM6 8c0 1.656 1.344 3 3 3s3-1.344 3-3-1.344-3-3-3-3 1.344-3 3z" />
            </svg>
          </button>
        </div>

        {/* icon */}
        <div className="flex gap-4 lg:gap-5 text-white text-xl lg:text-3xl">
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
