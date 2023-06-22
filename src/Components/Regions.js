import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllRegionQuery } from "../features/api/regionApi";
import { useGetAllTrendGiftQuery } from "../features/api/trendingGift";
import { useGetAllBrandsQuery } from "../features/api/brandApi";
import { GiModernCity } from "react-icons/gi";
import { IoIosArrowDown } from "react-icons/io";

// react swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/free-mode";
// import "./styles.css";
import "./Regions.css";

import {
  EffectCoverflow,
  FreeMode,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";

const Regions = () => {
  const [show, setShow] = useState(false);

  // fetching regions data for region and district
  const {
    data: regionData,
    isLoading: regionLoading,
    error: regionError,
  } = useGetAllRegionQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const regions = regionData?.data;

  // fetching trending gift data
  const { data: trend, isLoading } = useGetAllTrendGiftQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const trendGift = trend?.data;

  // fetching brand data
  const { data: getBrand } = useGetAllBrandsQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const allBrands = getBrand?.data;

  const [active, setActive] = useState(0);
  const [disActive, setDisActive] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);

  // brand filtering
  const trendingBrands = allBrands?.filter((item) => {
    return selectedProducts?.some((trending) => trending?.brand === item?.name);
  });

  // onClick handler of distrcit button for showing brands item
  const handleBrand = (d, index) => {
    const rest = trendGift?.filter((trend) => trend?.district === d);
    setSelectedProducts(rest);
    setDisActive(index);
  };
  const [selectedRegion, setSelectedRegion] = useState(null);

  // onClick handler of region button for showing district list
  const handleRegionClick = (region, index) => {
    setSelectedRegion(region);
    setActive(index);
  };

  if (regionLoading || isLoading) {
    return (
      <div className="flex flex-col items-center mt-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        {/* <p className="mt-4 text-gray-900">Loading...</p> */}
      </div>
    );
  }

  if (regionError) {
    return (
      <div className="text-center text-red-500 font-bold">Data not found</div>
    );
  }

  return (
    <div className="p-12">
      <div className="pb-6 text-center">
        <h3 className="text-xl lg:text-2xl font-bold">Trending Gifts</h3>
        <p>Handpicked for your gifting needs</p>
      </div>

      {/* Region list */}

      <div>
        <h4 className="text-2xl font-bold mb-4">Choose Region</h4>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 lg:gap-6  ">
          {selectedRegion ? (
            <div
              className=" bg-cover rounded-r-full cursor-pointer border hover:border-gray-400 shadow-xl"
              onClick={() => setSelectedRegion(null)}
            >
              <div className="">
                <div className="py-2 flex items-center justify-between">
                  <div className=" text-xl">
                    <span className=" ">
                      <GiModernCity></GiModernCity>
                    </span>
                  </div>

                  <div className="  text-xl font-bold ">
                    {selectedRegion?.region}
                  </div>
                  <div className="text-xl text-slate-300">
                    <IoIosArrowDown style={{ fontSize: "30px" }} />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            regions?.map((r, index) => (
              <div
                onClick={() => handleRegionClick(r, index)}
                className=" border-2 hover:border-gray-400 shadow-xl rounded-xl cursor-pointer"
                key={index}
              >
                <div className=" text center px-0 py-2 flex items-center justify-evenly ">
                  <div className="">
                    <div className="  lg:text-xl">
                      <span className=" ">
                        <GiModernCity></GiModernCity>
                      </span>
                    </div>
                  </div>
                  <div className=" text-center text-xl font-bold ">
                    {r.region}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* District List  old show more version- - ***ayta thakuk kew delete korish nah****/}

      {/* <div className="">
        {selectedRegion && (
          <h4 className="text-2xl font-bold mt-2 mb-4">Choose District</h4>
        )}
        <div className="grid grid-cols-4 lg:grid-cols-8 gap-2 mx-auto mb-8">
          {show
            ? selectedRegion?.district?.map((d, index) => (
                <div
                  onClick={() => handleBrand(d, index)}
                  className="flex flex-col justify-center items-center text-center p-2 cursor-pointer"
                >
                  <div className="lg:text-xl text-wrap text-gray-800">{d}</div>
                </div>
              ))
            : selectedRegion?.district?.slice(0, 18).map((d, index) => (
                <div
                  onClick={() => handleBrand(d, index)}
                  className="flex flex-col justify-center items-center text-center p-2 cursor-pointer"
                >
                  <div className="lg:text-xl text-wrap text-gray-800">{d}</div>
                </div>
              ))}
        </div>
        {selectedRegion?.district?.length > 18 && (
          <button onClick={() => setShow(!show)} className="block m-auto">
            <span className="font-bold text-center">
              {show ? "Show less" : "Show more"}
            </span>
          </button>
        )}
      </div> */}

      {/*New District for destop  */}
      <div className=" hidden lg:block">
        {selectedRegion && (
          <h4 className="text-2xl font-bold mt-2 mb-4">Choose District</h4>
        )}
        <Swiper
          loop={true}
          navigation={true}
          keyboard={true}
          slidesPerView={7}
          spaceBetween={0}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Navigation, Keyboard]}
          className=" swiper"
        >
          {selectedRegion?.district?.map((d, index) => (
            <SwiperSlide
              onClick={() => handleBrand(d, index)}
              className="swiper-slider cursor-pointer"
            >
              <div className="lg:text-xl text-wrap text-gray-800">
                <span className="font-mono italic  border-r shadow-xl border-yellow-700 pr-4">
                  {d}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* District for Mobile */}
      </div>
      <div className="lg:hidden">
        {selectedRegion && (
          <h4 className="text-xl font-bold mt-2 mb-4">Choose District</h4>
        )}
        <Swiper
          loop={true}
          navigation={true}
          keyboard={true}
          slidesPerView={3}
          spaceBetween={0}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Navigation, Keyboard]}
          className=" swipermobile "
        >
          {selectedRegion?.district?.map((d, index) => (
            <SwiperSlide
              onClick={() => handleBrand(d, index)}
              className="swiper-slider cursor-pointer"
            >
              <div>
                <span className="mr-2 font-mono italic  border-r border-spacing-2  shadow-xl border-yellow-700 text-wrap text-xs ">
                  {d}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Show available brand  */}
      <div className="mt-4">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          // loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper bswiper"
        >
          {trendingBrands?.map((product, index) => (
            // consoe.log(product)
            <SwiperSlide className="bswiper-slide" key={index}>
              <Link to={`/brands/${product?.name}`} state={product} key={index}>
                <img
                  src={`http://localhost:5003/uploads/${product?.image}`}
                  alt={product?.name}
                  className="h-48 w-48 object-cover"
                />
                <p className="font-bold text-[#9A583B]">{product?.name}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Regions;
