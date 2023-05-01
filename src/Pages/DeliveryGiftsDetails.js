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
    <div className="p-3 p-lg-0" style={{ marginTop: "75px" }}>
      <div className="row py-3">
        <div className="col-12 col-lg-6 d-flex justify-content-center">
          <img
            className="d-none d-lg-block"
            src={data.image}
            style={{ width: "400px" }}
          />
          <img
            className="d-block d-lg-none"
            src={data.image}
            style={{ width: "300px" }}
          />
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center pe-4 flex-column pt-3 pt-lg-0">
          <p className="fw-bold text-primary">Same Day Delivery</p>
          <p className="fs-4">{data.name}</p>
          <h4 className="fw-bold fs-3 text-danger">{data.price}$</h4>
          <h6>Description</h6>
          <p className="fw-light">{data.desc}</p>

          <div>
            <h6
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
