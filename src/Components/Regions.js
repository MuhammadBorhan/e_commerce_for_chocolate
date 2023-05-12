import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllRegionQuery } from "../features/api/regionApi";
import { useGetAllProductsQuery } from "../features/api/productsApi";

const Regions = () => {
  // fetching regions data
  const {
    data: regionData,
    isLoading: regionLoading,
    error: regionError,
  } = useGetAllRegionQuery();
  const regions = regionData?.data;

  // fetching products data with district and brand
  const { data, isLoading: productsLoading } = useGetAllProductsQuery();
  const products = data?.data;

  const [active, setActive] = useState(0);
  const [disActive, setDisActive] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);

  // onClick handler of distrcit button for showing brands item
  const handleBrand = (d, index) => {
    const rest = products?.filter((brand) => brand?.district === d);
    setSelectedProducts(rest);
    setDisActive(index);
  };

  const [selectedRegion, setSelectedRegion] = useState(null);

  // onClick handler of region button for showing district list
  const handleRegionClick = (region, index) => {
    setSelectedRegion(region);
    setActive(index);
  };

  if (regionLoading || productsLoading) {
    return (
      <div className="absolute left-[45%] text-red-500 font-bold text-2xl">
        Loading...
      </div>
    );
  }

  if (regionError) {
    return <div>Error: {regionError?.message}</div>;
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
        {selectedRegion ? (
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
        ) : (
          <div>
            <h2 className="float-left mr-4">District:</h2>
            <div className="grid grid-cols-2 lg:grid-cols-6 justify-center text-center gap-2 lg:gap-4">
              {regions?.[0].district?.map((d, index) => (
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
        )}
      </div>

      {/* Brands List */}
      <div className="py-6">
        {selectedProducts && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 text-center p-6 ">
            {selectedProducts?.map((brand, index) => (
              <Link
                to={`/brands/${brand?.brandName}`}
                state={brand}
                key={index}
              >
                <div className="card card-compact shadow-xl">
                  <figure>
                    <img
                      className="h-[100px] lg:h-[200px]"
                      src={brand?.brandImage}
                      alt={brand?.brandName}
                    />
                  </figure>
                  <div className="card-body text-center items-center">
                    <h2 className="card-title">{brand?.brandName}</h2>
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
