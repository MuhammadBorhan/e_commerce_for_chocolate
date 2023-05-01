import React from "react";
import { Link } from "react-router-dom";

const SameDayDelivery = () => {
  return (
    <div className="pb-5">
      <div className="px-5">
        <h3>Trending Gifts</h3>
        <p>Handpicked for your gifting needs</p>
      </div>
      <div className="px-5">
        <div
          className="d-flex justify-content-between mb-2"
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
        <div className="row inline-block d-lg-none">
          <div className="col-4 col-lg-2">
            <img
              src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/flowers_d_igp_frames_20230131.jpg"
              style={{ width: "90px", borderRadius: "0 0 10px 10px" }}
            ></img>
          </div>
          <div className="col-4 col-lg-2">
            <img
              src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/cakes_d_igp_frames_20230131.jpg"
              style={{ width: "90px", borderRadius: "0 0 10px 10px" }}
            ></img>
          </div>
          <div className="col-4 col-lg-2">
            <img
              src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/personalized_d_igp_frames_20230131.jpg"
              style={{ width: "90px", borderRadius: "0 0 10px 10px" }}
            ></img>
          </div>
          <div className="col-4 col-lg-2">
            <img
              src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/hampers_d_igp_frames_20230131.jpg"
              style={{ width: "90px", borderRadius: "0 0 10px 10px" }}
            ></img>
          </div>
          <div className="col-4 col-lg-2">
            <img
              src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/flowers_d_igp_frames_20230131.jpg"
              style={{ width: "90px", borderRadius: "0 0 10px 10px" }}
            ></img>
          </div>
          <div className="col-4 col-lg-2">
            <img
              src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/cakes_d_igp_frames_20230131.jpg"
              style={{ width: "90px", borderRadius: "0 0 10px 10px" }}
            ></img>
          </div>
        </div>

        <div className="d-none d-lg-block">
          <div className="row ">
            <div className="col-4 col-lg-2">
              <img
                src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/flowers_d_igp_frames_20230131.jpg"
                style={{ width: "200px", borderRadius: "0 0 10px 10px" }}
              ></img>
            </div>
            <div className="col-4 col-lg-2">
              <img
                src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/cakes_d_igp_frames_20230131.jpg"
                style={{ width: "200px", borderRadius: "0 0 10px 10px" }}
              ></img>
            </div>
            <div className="col-4 col-lg-2">
              <img
                src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/personalized_d_igp_frames_20230131.jpg"
                style={{ width: "200px", borderRadius: "0 0 10px 10px" }}
              ></img>
            </div>
            <div className="col-4 col-lg-2">
              <img
                src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/hampers_d_igp_frames_20230131.jpg"
                style={{ width: "200px", borderRadius: "0 0 10px 10px" }}
              ></img>
            </div>
            <div className="col-4 col-lg-2">
              <img
                src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/flowers_d_igp_frames_20230131.jpg"
                style={{ width: "200px", borderRadius: "0 0 10px 10px" }}
              ></img>
            </div>
            <div className="col-4 col-lg-2">
              <img
                src="https://cdn.igp.com/f_auto,q_auto,t_pnopt4prodlp/banners/cakes_d_igp_frames_20230131.jpg"
                style={{ width: "200px", borderRadius: "0 0 10px 10px" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SameDayDelivery;
