import React, { useEffect, useState } from "react";
import HeroSlider from "../Components/HeroSlider";
import HeaderMenu from "../Components/HeaderMenu";
import MobileSearch from "../Components/MobileSearch";
import CategorySwiper from "./CategorySwiper/CategorySwiper";
import SameDayDelivery from "../Components/SameDayDelivery";
import Regions from "../Components/Regions";
import { useGetAllUserQuery } from "../features/api/loginApi";

const Home = () => {
  const { data } = useGetAllUserQuery();
  const allUsers = data?.data;
  return (
    <>
      <MobileSearch />
      <HeaderMenu />
      <HeroSlider />
      <CategorySwiper />
      <Regions />
      <SameDayDelivery />
    </>
  );
};

export default Home;
