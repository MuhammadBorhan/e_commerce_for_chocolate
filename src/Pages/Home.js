import React from "react";
import HeroSlider from "../Components/HeroSlider";
import HeaderMenu from "../Components/HeaderMenu";
import MobileSearch from "../Components/MobileSearch";
import CategorySwiper from "./CategorySwiper/CategorySwiper";
import SameDayDelivery from "../Components/SameDayDelivery";
import { Link, Outlet, useLocation } from "react-router-dom";
import Regions from "../Components/Regions";

const Home = () => {
  const { pathname } = useLocation();
  return (
    <>
      <MobileSearch />
      <HeaderMenu />
      <HeroSlider />
      <CategorySwiper />
      <Regions />
      <SameDayDelivery />
      <div>
        <div className="flex gap-12 justify-center">
          <button
            className={
              pathname === "/dhaka" ? "text-red-500 text-3xl" : "text-black"
            }
          >
            <Link to="/dhaka">Dhaka</Link>
          </button>
          <button
            className={
              pathname === "/chittagong" ? "text-red-500" : "text-black"
            }
          >
            <Link to="/chittagong">Chittagong</Link>
          </button>
          <button>
            <Link to="/comilla">Comilla</Link>
          </button>
          <button>
            <Link to="/rajshahi">Rajshahi</Link>
          </button>
        </div>
        <div className="py-12 text-center">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Home;
