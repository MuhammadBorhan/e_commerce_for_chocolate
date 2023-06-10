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

const GiftBox = () => {
  const { data: getGiftBox } = useGetAllGiftBoxQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const allGiftbox = getGiftBox?.data;

  return (
    <div>
      <div className="row py-5">
        <h4 className="text-center pb-3 text-xl font-bold">Regular Gift Box</h4>
        <div className="">
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
      </div>
    </div>
  );
};

export default GiftBox;
