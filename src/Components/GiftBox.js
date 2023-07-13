import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination, Navigation, Keyboard } from "swiper";
import { useGetAllGiftBoxQuery } from "../features/api/GiftBoxApi";
import { Link } from "react-router-dom";
import Container from "./Container";
import Description from "./Description";
import DescriptionMobile from "./DescriptionMobile";

const GiftBox = () => {
  const { data: getGiftBox } = useGetAllGiftBoxQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const allGiftbox = getGiftBox?.data;

  return (
    
   <Container>
    <div className="row py-8">
      {/* DeskTop device  */}

        <Description>Gift Box</Description>
        <DescriptionMobile>Gift Box</DescriptionMobile>
        <div className="hidden md:block">
          <Swiper
            // loop={true}
            navigation={true}
            keyboard={true}
            slidesPerView={5}
            spaceBetween={10}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Navigation, Keyboard]}
            className="rgboxswiperr"
          >
            {allGiftbox?.map((box, index) => (
              <SwiperSlide className="rgboxswiper-slider pt-6 pb-8">
                <Link to={`/delivery/${box?.name}`} state={box}>
                  <img
                    src={`https://andy-chocolate-productions.up.railway.app/${box.image}`}
                    className="h-48 w-48 object-cover"
                  />
                  <p>{box.name}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile Device  */}
        <div className="lg:hidden">
          <Swiper
            // loop={true}
            navigation={true}
            keyboard={true}
            slidesPerView={3}
            spaceBetween={5}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Navigation, Keyboard]}
            className="rgboxswiperr"
          >
            {allGiftbox?.map((box, index) => (
              <SwiperSlide className="rgboxswiper-slider pt-6 pb-8">
                <Link to={`/delivery/${box?.name}`} state={box}>
                  <img
                    src={`https://andy-chocolate-productions.up.railway.app/${box.image}`}
                    className="h-32 w-32 object-cover"
                  />
                  <p>{box.name}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
   </Container>
  
  
  );
};

export default GiftBox;
