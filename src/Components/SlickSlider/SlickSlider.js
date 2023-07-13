import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider.css";
import Slider from "react-slick";
import Description from "../Description";
import DescriptionMobile from "../DescriptionMobile";

const SlickSlider = ({ data, giftboxproduct }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <div className="slider px-4 lg:px-12">
      <Description>{data.name} Product</Description>
      <DescriptionMobile>{data.name} Product</DescriptionMobile>
      <Slider {...settings}>
        {giftboxproduct?.map((data, index) => (
          <div className="card cards h-[200px] lg:h-[290px] bg- " key={index}>
            <div className="card-top">
              <img
                src={`https://andy-chocolate-productions.up.railway.app/${data?.image}`}
                alt={data?.name}
                className=" w-32 h-32 lg:w-48 lg:h-48 m-auto object-cover "
              />
              <h5 className=" text-xs md:text-lg text-center bg-[#9A583B]  text-white lg:font-bold py-1 uppercase">
                {data?.name}
              </h5>
            </div>
            <div className="bg-neutral">
              {" "}
              <div className="card-bottom bg-neutral ">
                {/* <h3 className="text-3xl font-bold">{item.price}</h3> */}
                <p className="font-serif text-sm text-center text-white hidden lg:block">
                  {data?.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
