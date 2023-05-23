import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllRegionQuery } from "../features/api/regionApi";
import { useGetAllTrendGiftQuery } from "../features/api/trendingGift";
import { useGetAllBrandsQuery } from "../features/api/brandApi";
import Marquee from "react-fast-marquee";
import { GiModernCity } from "react-icons/gi";
import { MdLocationCity } from "react-icons/md";

// react swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./Regions.css";
import { EffectCoverflow, Pagination } from "swiper";

const Regions = () => {
  const images = [
    { image: "https://swiperjs.com/demos/images/nature-1.jpg", name: "name" },
    { image: "https://swiperjs.com/demos/images/nature-2.jpg", name: "name" },
    { image: "https://swiperjs.com/demos/images/nature-3.jpg", name: "name" },
    { image: "https://swiperjs.com/demos/images/nature-4.jpg", name: "name" },
    { image: "https://swiperjs.com/demos/images/nature-5.jpg", name: "name" },
    { image: "https://swiperjs.com/demos/images/nature-6.jpg", name: "name" },
    { image: "https://swiperjs.com/demos/images/nature-7.jpg", name: "name" },
    { image: "https://swiperjs.com/demos/images/nature-8.jpg", name: "name" },
    { image: "https://swiperjs.com/demos/images/nature-9.jpg", name: "name" },
  ];

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
      <div className="absolute left-[45%] text-red-500 font-bold text-2xl">
        Loading...
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
        <h4 className="text-2xl font-bold mb-1">Choose Region</h4>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 lg:gap-6 pb-8">
          {regions?.map((r, index) => {
            return (
              <div
                onClick={() => handleRegionClick(r, index)}
                className="card border-2 hover:border-gray-400 shadow-xl cursor-pointer"
                key={index}
              >
                <div className="card-body">
                  <div className="">
                    <div className=" flex justify-center justify-items-center text-2xl rounded">
                      <span className=" text-center">
                        <GiModernCity></GiModernCity>
                      </span>
                    </div>
                  </div>
                  <div className=" text-center text-xl font-bold">
                    {r.region}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* District List */}
      <div className="">
        {selectedRegion && (
          <h4 className="text-2xl font-bold mb-1">Choose District</h4>
        )}
        <div className="grid grid-cols-4 lg:grid-cols-6 gap-8 mx-auto">
          {selectedRegion?.district?.map((d, index) => (
            <div
              onClick={() => handleBrand(d, index)}
              className="flex flex-col justify-center items-center text-center p-2 menu_icon"
            >
              <div className="">
                <div className=" flex justify-center justify-items-center  text-2xl rounded">
                  <span className=" text-center">
                    <MdLocationCity></MdLocationCity>
                  </span>
                </div>
              </div>
              <div>{d}</div>
            </div>
          ))}
        </div>
      </div>

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
          <SwiperSlide className="bswiper-slide" key={index}>
            <Link to={`/brands/${product?.name}`} state={product} key={index}>
              <img src={product?.logo} alt={product?.name} />
              <p>{product?.name}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Regions;
