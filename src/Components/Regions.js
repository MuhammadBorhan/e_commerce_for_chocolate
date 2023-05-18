import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllRegionQuery } from "../features/api/regionApi";
import { useGetAllProductsQuery } from "../features/api/productsApi";
import { useGetAllTrendGiftQuery } from "../features/api/trendingGift";
import { useGetAllBrandsQuery } from "../features/api/brandApi";

const Regions = () => {
  // fetching regions data for region and district
  const {
    data: regionData,
    isLoading: regionLoading,
    error: regionError,
  } = useGetAllRegionQuery();
  const regions = regionData?.data;

  // fetching trending gift data
  const { data: trend, isLoading } = useGetAllTrendGiftQuery();
  const trendGift = trend?.data;

  // fetching brand data
  const { data: getBrand } = useGetAllBrandsQuery();
  const allBrands = getBrand?.data;

  const [active, setActive] = useState(0);
  const [disActive, setDisActive] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);

  // brand filtering
  const trendingBrands = allBrands?.filter((item) => {
    return selectedProducts.some((trending) => trending.brand === item.name);
  });

  // onClick handler of distrcit button for showing brands item
  const handleBrand = (d, index) => {
    const rest = trendGift?.filter((trend) => trend?.district === d);
    setSelectedProducts(rest);
    setDisActive(index);
  };

  const [selectedRegion, setSelectedRegion] = useState(null);

  // onClick handler of region button for showing district list
  const handleRegionClick = (region, index) => {
    setSelectedRegion(region);
    setActive(index);
  };

  if (regionLoading || isLoading) {
    return (
      <div className="absolute left-[45%] text-red-500 font-bold text-2xl">
        Loading...
      </div>
    );
  }

  if (regionError) {
    return (
      <div className="text-center text-red-500 font-bold">Data not found</div>
    );
  }

  return (
    <div className="p-12">
      <div className="pb-6 text-center">
        <h3 className="text-xl lg:text-2xl font-bold">Trending Gifts</h3>
        <p>Handpicked for your gifting needs</p>
      </div>

      {/* Region list */}
      <div className="">
        <h3 className="float-left mr-4">Region:</h3>
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-2 lg:gap-6 pb-8">
          {regions?.map((r, index) => {
            return (
              <button
                key={index}
                onClick={() => handleRegionClick(r, index)}
                className={`${
                  active === index ? "bg-orange-700 text-white font-bold" : ""
                } cursor-pointer capitalize m-1 lg:m-0 `}
                style={{ boxShadow: "1px 1px 2px 1px gray" }}
              >
                {r.region}
              </button>
            );
          })}
        </div>
      </div>

      {/* District List */}
      <div>
        <div className="">
          <h2 className="float-left mr-4">District:</h2>
          <div className="grid grid-cols-2 lg:grid-cols-6 justify-center text-center gap-2 lg:gap-4">
            {selectedRegion?.district?.map((d, index) => (
              <button
                onClick={() => handleBrand(d, index)}
                className={`${
                  disActive === index
                    ? "bg-orange-700 text-white font-bold"
                    : "bg-blue-900 text-white"
                }  `}
                key={index}
                style={{ boxShadow: "1px 1px 2px 1px gray" }}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Brands List */}
      <div className="py-6">
        {trendingBrands && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 text-center p-6 ">
            {trendingBrands?.map((product, index) => (
              <Link to={`/brands/${product?.name}`} state={product} key={index}>
                <div className="card card-compact shadow-xl">
                  <figure>
                    <img
                      className="w-[50px] lg:w-[150px] h-[50px] lg:h-[100px]"
                      src={product?.logo}
                      alt={product?.name}
                    />
                  </figure>
                  <div className="card-body text-center items-center">
                    <h2 className="card-title">{product?.name}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Regions;
