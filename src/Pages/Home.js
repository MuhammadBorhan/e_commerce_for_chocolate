import React from "react";
import HeroSlider from "../Components/HeroSlider";
import HeaderMenu from "../Components/HeaderMenu";
import MobileSearch from "../Components/MobileSearch";
import CategorySwiper from "./CategorySwiper/CategorySwiper";
import SameDayDelivery from "../Components/SameDayDelivery";

const Home = () => {
  return (
    <>
      <MobileSearch />
      <HeaderMenu />
      <HeroSlider />
      <CategorySwiper />
      <SameDayDelivery />
    </>
  );
};

export default Home;
