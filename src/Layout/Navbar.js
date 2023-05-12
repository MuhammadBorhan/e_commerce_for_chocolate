import React, { useEffect, useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineDollarCircle,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineUser,
  FiLogOut,
} from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import logo from "../assets/images/logo/logo.png";
import { useSelector } from "react-redux";
import { useGetUserQuery } from "../features/api/loginApi";

const Navbar = () => {
  const { data } = useGetUserQuery();
  const user = data?.data;

  // const [user, setUser] = useState({});
  // useEffect(() => {
  //   fetch("https://server-murex-one.vercel.app/api/v1/me", {
  //     method: "GET",
  //     headers: {
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setUser(data?.data));
  // }, []);

  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("accessToken");
    navigate("/login");
    window.location.reload();
  };

  const [modelMenu, setModelMenu] = useState(false);
  const cart = useSelector((state) => state?.cart?.cart);
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
              className="float-left text-white p-4 "
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
              <div className="flex items-center h-full">
                <p className="text-white ml-4">Title</p>
              </div>
            </div>
          </div>

          <div>
            <h1 className="flex justify-center ">Borhan Uddin</h1>
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
            <img src={logo} style={{ width: "100px" }} />
          </Link>
        </div>

        {/* search bar */}
        <div className="relative hidden lg:block text-gray-600">
          <input
            className="bg-white h-8 px-5 pr-10 rounded-full text-sm focus:outline-none w-[500px]"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute right-0 top-0 mt-2 mr-4 ">
            <svg
              className="h-4 w-4 fill-current"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.656 10.562c-1.031.813-2.344 1.313-3.75 1.313-3.313 0-6-2.688-6-6s2.687-6 6-6 6 2.688 6 6c0 1.406-.5 2.719-1.313 3.75l3.563 3.563-1.406 1.407-3.563-3.563zM6 8c0 1.656 1.344 3 3 3s3-1.344 3-3-1.344-3-3-3-3 1.344-3 3z" />
            </svg>
          </button>
        </div>

        {/* icon */}
        <div className="flex lg:gap-5 text-white items-center text-xl lg:text-3xl">
          <p className="relative mr-6 lg:mr-0">
            <Link to="/carts">
              <AiOutlineShoppingCart />
              <span className="absolute top-[-15px] text-sm bg-blue-600 p-1 w-6 h-6 flex justify-center items-center rounded-full left-[12px] lg:left-[20px]">
                {cart?.length}
              </span>
            </Link>
          </p>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              {user ? (
                <span className="text-sm">{user?.firstName}</span>
              ) : (
                <div className="w-10 rounded-full">
                  <img src="https://borhanportfolio.netlify.app/static/media/borhan.d87b28879c1a50ffbd3f.png" />
                </div>
              )}
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-black rounded-box w-52"
            >
              {user && (
                <li>
                  <Link to="/dashboard">Dashborad</Link>
                </li>
              )}
              <li>
                {user ? (
                  <button onClick={logOut} className="">
                    Logout ({user?.role})
                  </button>
                ) : (
                  <button className="">
                    <Link to={"/login"}>Login</Link>
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
        <label
          htmlFor="dashboard-drawer"
          tabIndex={2}
          className="btn text-white btn-ghost lg:hidden"
        >
          <AiOutlineMenu
            className=""
            style={{ width: "30px", fontSize: "23px" }}
          />
        </label>
      </div>
    </div>
  );
};

export default Navbar;
