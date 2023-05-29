import React from "react";
import HeroSlider from "../Components/HeroSlider";
import HeaderMenu from "../Components/HeaderMenu";
import MobileSearch from "../Components/MobileSearch";
import CategorySwiper from "./CategorySwiper/CategorySwiper";
import SameDayDelivery from "../Components/SameDayDelivery";
import Regions from "../Components/Regions";
import Footer from "../Layout/Footer";

const Home = () => {
  return (
    <>
      <MobileSearch />
      <HeaderMenu />
      <HeroSlider />
      {/* <CategorySwiper /> */}
      <Regions />
      <SameDayDelivery />
      <Footer />
    </>
  );
};

export default Home;
