import React, { useEffect, useState } from "react";
import HeroSlider from "../Components/HeroSlider";
import HeaderMenu from "../Components/HeaderMenu";
import MobileSearch from "../Components/MobileSearch";
import CategorySwiper from "./CategorySwiper/CategorySwiper";
import SameDayDelivery from "../Components/SameDayDelivery";
import Regions from "../Components/Regions";
import Footer from "../Layout/Footer";
import GiftBox from "../Components/GiftBox";

const Home = () => {
  return (
    <>
      <MobileSearch />
      <HeaderMenu />
      <HeroSlider />
      {/* <CategorySwiper /> */}
      <Regions />
      <GiftBox></GiftBox>
      <SameDayDelivery />
      <Footer />
    </>
  );
};

export default Home;
