import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
    useGetAllGiftBoxQuery,
    useGetAllSelectGiftBoxQuery,
  } from "../../features/api/GiftBoxApi";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";



// import required modules
import { FreeMode, Pagination ,Navigation,Keyboard} from "swiper";


const GiftBox = () => {
    const { data: getGiftBox } = useGetAllGiftBoxQuery(null, {
        refetchOnMountOrArgChange: true,
      });
      const allGiftbox = getGiftBox?.data;
    
      const { data: getSelectGiftBox } = useGetAllSelectGiftBoxQuery(null, {
        refetchOnMountOrArgChange: true,
      });
      const allSelectGiftBox = getSelectGiftBox?.data;
    
      const selectGiftBox = allSelectGiftBox?.filter(
        // (giftBox) => giftBox?.brand === brands?.name
      );
      console.Console(selectGiftBox)

    return (
        <div>
           < div className="row py-5">
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
            {selectGiftBox.map((box, index) => (
              <SwiperSlide className="swiper-slider">
                <img
                  src={box.image}
                  className="d-none d-lg-block"
                  style={{ width: "250px" }}
                />
                <img
                  src={box.image}
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

export default GiftBox;