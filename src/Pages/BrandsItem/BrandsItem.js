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

  // fetching brands product data
  const [brandProducts, setBrandProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/brandproduct")
      .then((res) => res.json())
      .then((data) => setBrandProducts(data?.data));
  }, []);

  const selectedProduct = brandProducts?.filter((brandItem) => {
    return (
      brandItem?.brandName === brands?.brandName &&
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
              src={brands.brandUrl}
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center items-center">
            <h2 className="card-title">Brand: {brands.brandName}</h2>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-center text-xl font-bold mb-6">
          {brands?.brandName} Chocolate items {selectedProduct?.length}
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6">
          {selectedProduct?.map((brandItem) => {
            return (
              <div className="card card-compact rounded-none bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="h-[200px]"
                    src={brandItem.productUrl}
                    alt={brandItem.productName}
                  />
                </figure>
                <div className="card-body text-center items-center">
                  <h2 className="card-title">{brandItem.productName}</h2>
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
