import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
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
import { useGetAllProductsQuery } from "../features/api/productsApi";
import { useGetAllGiftBoxQuery } from "../features/api/GiftBoxApi";
import { useState } from "react";
import SlickSlider from "../Components/SlickSlider/SlickSlider";

const DeliveryGiftsDetails = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const location = useLocation();
  const data = location?.state;

  //All product
  const { data: getProducts } = useGetAllProductsQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const allProducts = getProducts?.data;

  const giftboxproduct = allProducts?.filter((product) => {
    return data?.productList?.some((p) => p === product.name);
  });

  // fetch all gift box data
  const { data: getGiftBox } = useGetAllGiftBoxQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const allGiftbox = getGiftBox?.data;

  // handle festival
  const [matchFestival, setMatchFestival] = useState([]);
  const handleFestival = (festival) => {
    const matchedFestival = allGiftbox?.filter((f) => f?.festival === festival);
    setMatchFestival(matchedFestival);
  };

  // Similar Gift Box
  const similarGiftBox = allGiftbox?.filter((giftbox) => {
    return data?._id !== giftbox?._id;
  });
  return (
    <div className="">
      <div className="flex flex-col lg:flex-row lg:gap-12 p-4 lg:p-12">
        <div className="flex justify-center">
          <img
            className="hidden lg:block"
            src={`https://andy-chocolate-productions.up.railway.app/${data?.image}`}
            style={{ width: "400px" }}
          />
          <img
            className="block lg:hidden"
            src={`https://andy-chocolate-productions.up.railway.app/${data?.image}`}
            style={{ width: "200px" }}
          />
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center pe-4 flex-column pt-3 pt-lg-0">
          <p className="text-xl font-bold">{data?.name}</p>
          {/* <h4 className="text-orange-500 font-bold text-3xl py-2">
            {data.price}$
          </h4> */}
          <h6 className="text-xl">Description</h6>
          <p className="mb-4">{data?.desc}</p>

          <div className="dropdown dropdown-bottom">
            <label tabIndex={0} className="btn m-1">
              Choose Your Festival
              <p className="mt-1 ml-2">
                <IoMdArrowDropdown />
              </p>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow rounded-box w-52"
            >
              <li>
                <button onClick={() => handleFestival("Birthday")}>
                  BirthDay Gift
                </button>
              </li>
              <li>
                <button onClick={() => handleFestival("Marrige")}>
                  Marrige Anniversary
                </button>
              </li>
              <li>
                <button onClick={() => handleFestival("Christmas")}>
                  Cristmas Gift
                </button>
              </li>
              <li>
                <button onClick={() => handleFestival("Valentine")}>
                  Valentine Gift
                </button>
              </li>
            </ul>
          </div>

          {/* <div>
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
          </div> */}
        </div>
      </div>
      {/* // Relatred Festival  */}

      <div className="row py-5 px-4 lg:px-12">
        {matchFestival.length > 0 && (
          <h4 className="text-center pb-3 text-xl font-bold">
            {matchFestival[0]?.festival} Festival
          </h4>
        )}

        <div className="">
          <Swiper
            loop={true}
            navigation={true}
            keyboard={true}
            slidesPerView={4}
            spaceBetween={2}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Navigation, Keyboard]}
            className="gboxswiperr "
          >
            {matchFestival?.map((data, index) => (
              <SwiperSlide className="gboxswiper-slider py-6" key={index}>
                <img
                  src={`https://andy-chocolate-productions.up.railway.app/${data?.image}`}
                  className="w-32 object-cover"
                />
                <p>{data?.name}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* // Giftbox match product  */}
      <div className="row py-5 px-4 lg:px-12">
        <h4 className="text-center pb-3 text-xl font-bold">
          {data?.name} Product
        </h4>
        <div className="">
          <Swiper
            loop={true}
            navigation={true}
            keyboard={true}
            slidesPerView={4}
            spaceBetween={2}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Navigation, Keyboard]}
            className="gboxproswiperr"
          >
            {giftboxproduct?.map((data, index) => (
              <SwiperSlide
                className="gboxproswiper-slider pt-4 pb-8"
                key={index}
              >
                <img
                  src={`https://andy-chocolate-productions.up.railway.app/${data?.image}`}
                  className="h-48 w-48 object-cover"
                />
                <p>{data?.name}</p>
                <p><small>{data.desc}</small></p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* selected gift box product list start */}
      <SlickSlider data={data} giftboxproduct={giftboxproduct} />
      {/* selected gift box product list end */}

      {/* //Simiar gift box  */}
      <div className="row py-5 px-4 lg:px-12">
        <h4 className="text-center pb-3 text-xl font-bold">
          Similar Gift Box{" "}
        </h4>
        <div className="">
          <Swiper
            loop={true}
            navigation={true}
            keyboard={true}
            slidesPerView={4}
            spaceBetween={2}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Navigation, Keyboard]}
            className=" sgboxswiperr"
          >
            {similarGiftBox?.map((data, index) => (
              <SwiperSlide className="sgboxswiper-slider py-6 pb-8">
                <img
                  src={`https://andy-chocolate-productions.up.railway.app/${data?.image}`}
                  className="h-36 w-36 lg:h-48 lg:w-48 object-cover"
                />
                <p>{data?.name}</p>
              </SwiperSlide>
            ))}
          </Swiper>
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
