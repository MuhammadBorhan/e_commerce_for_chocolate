import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SlickSlider.css";
import Slider from "react-slick";
import SliderData from "./SliderData";

const SlickSlider = () => {
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
      <h1 className="uppercase font-bold text-xl lg:text-2xl mb-10">
        GiftBox Product
      </h1>
      <Slider {...settings}>
        {SliderData?.map((item) => (
          <div className="card h-[200px] lg:h-[300px] bg-neutral">
            <div className="card-top">
              <img
                className="w-32 h-32 lg:w-48 lg:h-48"
                src={item.image}
                alt={item.title}
              />
              <h1 className="lg:text-xl text-center bg-[#9A583B]  text-white font-bold   uppercase">
                {item.title}
              </h1>
            </div>
            <div className="bg-neutral">
              {" "}
              <div className="card-bottom bg-neutral">
                {/* <h3 className="text-3xl font-bold">{item.price}</h3> */}
                <p className="font-light">{item.category}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
