import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../swiper.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

// import data
import { heroSlider } from "../data";

const HeroSlider = () => {
  return (
    <>
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={true}
        loop={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        // navigation={true}
        // className="heroSlider"
      >
        {heroSlider.map((slide, index) => {
          // destructure slide
          const { image } = slide;
          return (
            <SwiperSlide className="" key={index}>
              <div className="">
                <div className="pb-4 px-lg-5">
                  <img
                    className="rounded-lg"
                    style={{ width: "100%" }}
                    src={image}
                    alt=""
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default HeroSlider;
