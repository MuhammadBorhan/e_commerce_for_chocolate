import React from "react";
import { useLocation } from "react-router-dom";

const BrandsItem = () => {
  const location = useLocation();
  const brand = location?.state;
  //   console.log(brands);
  return (
    <div className="flex justify-center h-[85vh] items-center">
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-[300px]" src={brand.image} alt="Shoes" />
        </figure>
        <div className="card-body text-center items-center">
          <h2 className="card-title">{brand.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default BrandsItem;
