import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useGetAllBrandItemQuery } from "../../features/api/brandsItemApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const BrandsItem = () => {
  const location = useLocation();
  const brands = location?.state;

  // fetch all brandsItem chocolate
  const { data } = useGetAllBrandItemQuery();
  const brandsItem = data?.data;

  const selectedProduct = brandsItem?.filter((brandItem) => {
    return (
      brandItem?.brand === brands?.name &&
      brandItem?.district === brands?.district
    );
  });

  const dispatch = useDispatch();
  return (
    <div className="p-4 lg:p-12">
      <div className="flex justify-center pb-8">
        <div className="card card-compact rounded-none bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-[250px] h-[200px]"
              src={brands.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center items-center">
            <h2 className="card-title">Brand: {brands.name}</h2>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-center text-xl font-bold mb-6">
          {brands?.name} Chocolate items {selectedProduct?.length}
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6">
          {selectedProduct?.map((brandItem) => {
            return (
              <div className="card card-compact rounded-none bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="h-[200px]"
                    src={brandItem.image}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body text-center items-center">
                  <h2 className="card-title">{brandItem.name}</h2>
                  <h2 className="card-title">{brandItem.price}$</h2>
                </div>
                <button
                  onClick={() => dispatch(addToCart(brandItem))}
                  className="px-2 py-1 bg-[#9A583B] text-white"
                >
                  Add To Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BrandsItem;
