import React from "react";
import { Link } from "react-router-dom";

const SameDayDelivery = () => {
  return (
    <div className="pb-12 pr-4 lg:pr-12 pl-4 lg:pl-12 lg:pt-6">
      <div className="py-6 text-center">
        <h3 className="text-xl lg:text-2xl font-bold">Trending Gifts</h3>
        <p>Handpicked for your gifting needs</p>
      </div>
      <div className="">
        <div
          className="flex justify-between pb-2 mb-2"
          style={{ borderBottom: "1px solid gray" }}
        >
          <h6>Same Day Delivery</h6>
          <Link
            to="/same-day-delivery-gifts"
            style={{ textDecoration: "none", color: "gray" }}
          >
            View All
          </Link>
        </div>

        {/* images for desktop device */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-6 ">
            <img
              src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/flowers_d_igp_frames_20230131.jpg"
              style={{ width: "200px", borderRadius: "0 0 10px 10px" }}
            />
            <img
              src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/cakes_d_igp_frames_20230131.jpg"
              style={{ width: "200px", borderRadius: "0 0 10px 10px" }}
            />
            <img
              src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/personalized_d_igp_frames_20230131.jpg"
              style={{ width: "200px", borderRadius: "0 0 10px 10px" }}
            />
            <img
              src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/hampers_d_igp_frames_20230131.jpg"
              style={{ width: "200px", borderRadius: "0 0 10px 10px" }}
            />
            <img
              src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/flowers_d_igp_frames_20230131.jpg"
              style={{ width: "200px", borderRadius: "0 0 10px 10px" }}
            />
            <img
              src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/cakes_d_igp_frames_20230131.jpg"
              style={{ width: "200px", borderRadius: "0 0 10px 10px" }}
            />
          </div>
        </div>

        {/* images for mobile device */}
        <div className="grid grid-cols-3 gap-2 lg:hidden">
          <img
            src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/flowers_d_igp_frames_20230131.jpg"
            style={{ width: "150px", borderRadius: "0 0 10px 10px" }}
          />
          <img
            src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/cakes_d_igp_frames_20230131.jpg"
            style={{ width: "150px", borderRadius: "0 0 10px 10px" }}
          />
          <img
            src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/personalized_d_igp_frames_20230131.jpg"
            style={{ width: "150px", borderRadius: "0 0 10px 10px" }}
          />
          <img
            src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/hampers_d_igp_frames_20230131.jpg"
            style={{ width: "150px", borderRadius: "0 0 10px 10px" }}
          />
          <img
            src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/flowers_d_igp_frames_20230131.jpg"
            style={{ width: "150px", borderRadius: "0 0 10px 10px" }}
          />
          <img
            src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/cakes_d_igp_frames_20230131.jpg"
            style={{ width: "150px", borderRadius: "0 0 10px 10px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default SameDayDelivery;
