import React from "react";
import "./CategorySwiper.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";

const CategorySwiper = () => {
  return (
    <div className="py-5">
      <div className="d-flex align-items-center justify-content-center gap-2">
        <img
          src="https://cdn.igp.com/raw/upload/assets/svg-icons/gift-sets-20220610.svg"
          className="d-none d-lg-block"
        />
        <img
          src="https://cdn.igp.com/raw/upload/assets/svg-icons/gift-sets-20220610.svg"
          style={{ width: "100px" }}
          className="d-block d-lg-none"
        />
        <div>
          <h3>Unique Gifts Online</h3>
          <p className="fw-light pe-1">
            Curated to make every special moment a celebration
          </p>
        </div>
      </div>

      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        // pagination={{ el: ".swiper-pagination", clickable: true }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="cswiperr"
      >
        <SwiperSlide className="cswiper-sliderr">
          <img
            src="https://cdn.igp.com/f_auto,q_auto,t_pnopt1prodlp/banners/birthday_gifts_igp_lenses_20220627.png"
            alt="slide_image"
            className="ssimg"
          />
          <p>Birthday Gifts</p>
        </SwiperSlide>
        <SwiperSlide className="cswiper-sliderr">
          <img
            src="https://cdn.igp.com/f_auto,q_auto,t_pnopt1prodlp/banners/disney_igp_lenses_20221028.jpg"
            alt="slide_image"
            className="ssimg"
          />
          <p>Disney Collection</p>
        </SwiperSlide>
        <SwiperSlide className="cswiper-sliderr">
          <img
            src="https://cdn.igp.com/f_auto,q_auto,t_pnopt1prodlp/banners/marvel_igp_lenses_20221028.jpg"
            alt="slide_image"
            className="ssimg"
          />
          <p>Morvel Collection</p>
        </SwiperSlide>
        <SwiperSlide className="cswiper-sliderr">
          <img
            src="https://cdn.igp.com/f_auto,q_auto,t_pnopt1prodlp/banners/gourmet_igp_lenses_20221004.jpeg"
            alt="slide_image"
            className="ssimg"
          />
          <p>Gourmet</p>
        </SwiperSlide>
        <SwiperSlide className="cswiper-sliderr">
          <img
            src="https://cdn.igp.com/f_auto,q_auto,t_pnopt1prodlp/banners/new_arrivals_igp_lenses_20221004.jpeg"
            alt="slide_image"
            className="ssimg"
          />
          <p>New Arrivals</p>
        </SwiperSlide>
        <SwiperSlide className="cswiper-sliderr">
          <img
            src="https://cdn.igp.com/f_auto,q_auto,t_pnopt1prodlp/banners/anniversary_gifts_igp_lenses_20220627.png"
            alt="slide_image"
            className="ssimg"
          />
          <p>Anniversary Gifts</p>
        </SwiperSlide>
        <SwiperSlide className="cswiper-sliderr">
          <img
            src="https://cdn.igp.com/f_auto,q_auto,t_pnopt1prodlp/banners/plants_igp_lenses_20220705.png"
            alt="slide_image"
            className="ssimg"
          />
          <p>Plants</p>
        </SwiperSlide>
        <SwiperSlide className="cswiper-sliderr">
          <img
            src="https://cdn.igp.com/f_auto,q_auto,t_pnopt1prodlp/banners/home_living_igp_lenses_20220627.png"
            alt="slide_image"
            className="ssimg"
          />
          <p>Home & Living</p>
        </SwiperSlide>
        <SwiperSlide className="cswiper-sliderr">
          <img
            src="https://cdn.igp.com/f_auto,q_auto,t_pnopt1prodlp/banners/jewellery_igp_lenses_20220627.png"
            alt="slide_image"
            className="ssimg"
          />
          <p>Jwellery</p>
        </SwiperSlide>
        <SwiperSlide className="cswiper-sliderr">
          <img
            src="https://cdn.igp.com/f_auto,q_auto,t_pnopt1prodlp/banners/fashion_lifestyle_gifts_igp_lenses_20220627.png"
            alt="slide_image"
            className="ssimg"
          />
          <p>Fashion & Lifestyle</p>
        </SwiperSlide>
        <SwiperSlide className="cswiper-sliderr">
          <img
            src="https://cdn.igp.com/f_auto,q_auto,t_pnopt1prodlp/banners/wedding_gifts_igp_lenses_20220709.jpg"
            alt="slide_image"
            className="ssimg"
          />
          <p>Weeding Gifts</p>
        </SwiperSlide>
        <SwiperSlide className="cswiper-sliderr">
          <img
            src="https://cdn.igp.com/f_auto,q_auto,t_pnopt1prodlp/banners/international_igp_lenses_20230118.jpg"
            alt="slide_image"
            className="ssimg"
          />
          <p>International</p>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategorySwiper;
