import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider.css";
import Slider from "react-slick";

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
      <h1 className="uppercase font-bold text-xl lg:text-2xl mb-6">
        {data?.name} Product
      </h1>
      <Slider {...settings}>
        {giftboxproduct?.map((data, index) => (
          <div className="card cards h-[200px] lg:h-[290px] bg- " key={index}>
            <div className="card-top">
              <img
                src={`https://andy-chocolate-productions.up.railway.app/${data?.image}`}
                alt={data?.name}
                className=" w-32 h-32 lg:w-48 lg:h-48 m-auto object-cover "
              />
              <h1 className="lg:text-xl text-center bg-[#9A583B]  text-white font-bold py-1 uppercase">
                {data?.name}
              </h1>
            </div>
            <div className="bg-neutral">
              {" "}
              <div className="card-bottom bg-neutral ">
                {/* <h3 className="text-3xl font-bold">{item.price}</h3> */}
                <p className="font-serif text-center text-white">
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
