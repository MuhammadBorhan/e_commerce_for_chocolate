import React, { useEffect, useState } from "react";
import HeroSlider from "../Components/HeroSlider";
import HeaderMenu from "../Components/HeaderMenu";
import MobileSearch from "../Components/MobileSearch";
import CategorySwiper from "./CategorySwiper/CategorySwiper";
import SameDayDelivery from "../Components/SameDayDelivery";
import Regions from "../Components/Regions";
import Footer from "../Layout/Footer";

import "glightbox/dist/css/glightbox.min.css";
import Glightbox from "glightbox";

const Home = () => {
  const images = [
    {
      img: "https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/products/p-royal-purple-chocolate-bouquet-178336-m.jpg",
    },
    {
      img: "https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/products/p-chocolaty-goodness-191630-m.jpg",
    },
    {
      img: "https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/products/p-rochers-galore-gift-178334-m.jpg",
    },
    {
      img: "https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/products/p-premium-couverture-chocolate-hamper-191990-m.jpg",
    },
  ];
  useEffect(() => {
    const lightbox = Glightbox({
      selector: ".glightbox",
    });
  }, []);
  return (
    <>
      <MobileSearch />
      <HeaderMenu />
      <HeroSlider />
      {/* <CategorySwiper /> */}
      <Regions />
      <SameDayDelivery />
      <Footer />

      <div className="p-20">
        <div className="gallery flex justify-between">
          {images.map((img) => (
            <a className="glightbox" href={img.img}>
              <img src={img.img} alt="Image" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
