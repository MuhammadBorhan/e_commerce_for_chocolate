import React from "react";
import "./HeaderMenu.css";

const HeaderMenu = () => {
  return (
    <div className="px-lg-4">
      <div className="row mx-4 p-1 pb-4 mt-4 mt-lg-0 d-flex gap-2 justify-content-between">
        <div className="col-3 col-lg-1 d-flex flex-column justify-content-center align-items-center text-center menu_icon">
          <span>
            <img
              src="https://cdn.igp.com/assets/svg-icons/w-tiles-SSD-v1.svg"
              className="py-2"
            />
          </span>
          <p className="" style={{ fontSize: "14px" }}>
            Same Day Delivery
          </p>
        </div>
        <div className="col-3 col-lg-1 d-flex flex-column justify-content-center align-items-center  text-center menu_icon">
          <span>
            <img
              src="https://cdn.igp.com/assets/svg-icons/w-tiles-personalize-v1.svg"
              className="py-2"
            />
          </span>
          <p style={{ fontSize: "14px" }}>Personalize</p>
        </div>
        <div className="col-3 col-lg-1 d-flex flex-column justify-content-center align-items-center  text-center menu_icon">
          <span>
            <img
              src="https://cdn.igp.com/assets/svg-icons/w-tiles-cakes-v1.svg"
              className="py-2"
            />
          </span>
          <p style={{ fontSize: "14px" }}>Cakes</p>
        </div>
        <div className="col-3 col-lg-1 d-flex flex-column justify-content-center align-items-center  text-center menu_icon">
          <span>
            <img
              src="https://cdn.igp.com/assets/svg-icons/w-tiles-flower-v1.svg"
              className="py-2"
            />
          </span>
          <p style={{ fontSize: "14px" }}>Flowers</p>
        </div>
        <div className="col-3 col-lg-1 d-flex flex-column justify-content-center align-items-center  text-center menu_icon">
          <span>
            <img
              src="https://cdn.igp.com/assets/svg-icons/w-tiles-new-arrivals-v1.svg"
              className="py-2"
            />
          </span>
          <p style={{ fontSize: "14px" }}>New Arrivals</p>
        </div>
        <div className="col-3 col-lg-1 d-flex flex-column justify-content-center align-items-center  text-center menu_icon">
          <span>
            <img
              src="https://cdn.igp.com/assets/svg-icons/w-tiles-sweets-v2.svg"
              className="py-2"
            />
          </span>
          <p style={{ fontSize: "14px" }}>Gourmet</p>
        </div>
        <div className="col-3 col-lg-1 d-flex flex-column justify-content-center align-items-center  text-center menu_icon">
          <span>
            <img
              src="https://cdn.igp.com/assets/svg-icons/w-tiles-plants-v1.svg"
              className="py-2"
            />
          </span>
          <p style={{ fontSize: "14px" }}>Plants</p>
        </div>
        <div className="col-3 col-lg-1 d-flex flex-column justify-content-center align-items-center  text-center menu_icon">
          <span>
            <img
              src="https://cdn.igp.com/assets/svg-icons/w-tiles-bulk-order-v1.svg"
              className="py-2"
            />
          </span>
          <p style={{ fontSize: "14px" }}>Bulk</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
