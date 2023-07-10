import React from "react";
import "./HeaderMenu.css";
import Container from "./Container";

const HeaderMenu = () => {
  return (
   <Container>
     <div className="mb-8">
      <div className="grid grid-cols-4 lg:grid-cols-8 gap-4">
        <div className="flex flex-col justify-center items-center text-center p-2 menu_icon">
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
        <div className="flex flex-col justify-center items-center text-center p-2 menu_icon">
          <span>
            <img
              src="https://cdn.igp.com/assets/svg-icons/w-tiles-personalize-v1.svg"
              className="py-2"
            />
          </span>
          <p style={{ fontSize: "14px" }}>Personalize</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center p-2 menu_icon">
          <span>
            <img
              src="https://cdn.igp.com/assets/svg-icons/w-tiles-cakes-v1.svg"
              className="py-2"
            />
          </span>
          <p style={{ fontSize: "14px" }}>Cakes</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center p-2 menu_icon">
          <span>
            <img
              src="https://cdn.igp.com/assets/svg-icons/w-tiles-flower-v1.svg"
              className="py-2"
            />
          </span>
          <p style={{ fontSize: "14px" }}>Flowers</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center p-2 menu_icon">
          <span>
            <img
              src="https://cdn.igp.com/assets/svg-icons/w-tiles-new-arrivals-v1.svg"
              className="py-2"
            />
          </span>
          <p style={{ fontSize: "14px" }}>New Arrivals</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center p-2 menu_icon">
          <span>
            <img
              src="https://cdn.igp.com/assets/svg-icons/w-tiles-sweets-v2.svg"
              className="py-2"
            />
          </span>
          <p style={{ fontSize: "14px" }}>Gourmet</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center p-2 menu_icon">
          <span>
            <img
              src="https://cdn.igp.com/assets/svg-icons/w-tiles-plants-v1.svg"
              className="py-2"
            />
          </span>
          <p style={{ fontSize: "14px" }}>Plants</p>
        </div>
        <div className="flex flex-col justify-center items-center text-center p-2 menu_icon">
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
   </Container>
  );
};

export default HeaderMenu;
