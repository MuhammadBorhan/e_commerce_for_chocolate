import React from "react";
import { useLocation } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./DeliveryGiftsDetails.css";

// import required modules
import { FreeMode, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

// import data
import { sameDayDeliveryData } from "../data";

const DeliveryGiftsDetails = () => {
  const location = useLocation();
  const data = location?.state;
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row lg:gap-12 p-4 lg:p-12">
        <div className="flex justify-center">
          <img
            className="hidden lg:block"
            src={data?.image}
            style={{ width: "600px" }}
          />
          <img
            className="block lg:hidden"
            src={data?.image}
            style={{ width: "300px" }}
          />
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center pe-4 flex-column pt-3 pt-lg-0">
          <p className="text-blue-300 font-bold">Same Day Delivery</p>
          <p className="text-xl font-bold">{data?.name}</p>
          <h4 className="text-orange-500 font-bold text-3xl py-2">
            {data.price}$
          </h4>
          <h6 className="text-xl">Description</h6>
          <p className="mb-4">{data?.desc}</p>

          <div>
            <h6
              className="text-xl"
              style={{
                borderBottom: "1px solid lightblue",
                paddingBottom: "8px",
              }}
            >
              Key Attributes :
            </h6>
            <ol>
              {data?.attiribute.map((attb, index) => (
                <li key={index}>{attb}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="row py-5">
        <h4 className="text-center pb-3">Recommended for You</h4>
        <div className="">
          <Swiper
            loop={true}
            navigation={true}
            keyboard={true}
            slidesPerView={5}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Navigation, Keyboard]}
            className=" swiperr"
          >
            {sameDayDeliveryData.map((data, index) => (
              <SwiperSlide className="swiper-slider">
                <img
                  src={data.image}
                  className="d-none d-lg-block"
                  style={{ width: "250px" }}
                />
                <img
                  src={data.image}
                  className="d-block d-lg-none"
                  style={{ height: "70px" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default DeliveryGiftsDetails;
