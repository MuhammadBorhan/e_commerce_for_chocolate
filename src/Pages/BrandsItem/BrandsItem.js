import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";
import { useGetAllProductsQuery } from "../../features/api/productsApi";

const BrandsItem = () => {
  const location = useLocation();
  const brands = location?.state;

  // fetching products data with district and brand
  const { data } = useGetAllProductsQuery();
  const products = data?.data;

  const selectedProducts = products?.filter((brandItem) => {
    return (
      brandItem?.brandName === brands?.brandName &&
      brandItem?.district === brands?.district
    );
  });
  const mapingProducts = selectedProducts?.map(
    (products) => products?.products
  );
  const allProducts = mapingProducts?.[0].map((products) => products);

  const dispatch = useDispatch();
  return (
    <div className="p-4 lg:p-12">
      <div className="flex justify-center pb-8">
        <div className="card card-compact rounded-none bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-[250px] h-[200px]"
              src={brands?.brandImage}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center items-center">
            <h2 className="card-title">Brand: {brands?.brandName}</h2>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-center text-xl font-bold mb-6">
          {brands?.brandName} Chocolate items {allProducts?.length}
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6">
          {allProducts?.map((product) => {
            return (
              <div className="card card-compact rounded-none bg-base-100 shadow-xl">
                <figure>
                  <img className="h-[200px]" src={product?.image} alt="" />
                </figure>
                <div className="card-body text-center items-center">
                  <h2 className="card-title">{product?.name}</h2>
                  <h2 className="card-title">{product?.price}$</h2>
                  <h2 className="card-title">Quantity: {product?.quantity}</h2>
                </div>
                <button
                  onClick={() => dispatch(addToCart(product))}
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
