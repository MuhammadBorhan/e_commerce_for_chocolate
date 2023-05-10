import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetAllRegionQuery } from "../features/api/regionApi";
import { useGetAllBrandQuery } from "../features/api/brandsApi";

const Regions = () => {
  // fetching regions data
  const {
    data: regionData,
    isLoading: regionLoading,
    error: regionError,
  } = useGetAllRegionQuery();
  const regions = regionData?.data;

  // fetching brands data
  const {
    data: brandData,
    isLoading: brandLoading,
    error: brandError,
  } = useGetAllBrandQuery();
  const brands = brandData?.data;

  // fetching brands product data
  const [brandProducts, setBrandProducts] = useState([]);
  // console.log(brandProducts);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/brandproduct")
      .then((res) => res.json())
      .then((data) => setBrandProducts(data?.data));
  }, []);

  const [active, setActive] = useState(0);
  const [disActive, setDisActive] = useState(0);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const removeDuplicates = (arr) => {
    return arr.filter((obj, index, self) => {
      return (
        index ===
        self.findIndex(
          (el) => el.brandName === obj.brandName && el.district === obj.district
        )
      );
    });
  };
  const uniqueBrandProducts = removeDuplicates(selectedBrands);

  // onClick handler of distrcit button for showing brands item
  const handleBrand = (d, index) => {
    const rest = brandProducts?.filter((brand) => brand?.district === d);
    setSelectedBrands(rest);
    setDisActive(index);
  };

  const [selectedRegion, setSelectedRegion] = useState(null);

  // onClick handler of region button for showing district list
  const handleRegionClick = (region, index) => {
    setSelectedRegion(region);
    setActive(index);
  };

  if (regionLoading || brandLoading) {
    return (
      <div className="absolute left-[45%] text-red-500 font-bold text-2xl">
        Loading...
      </div>
    );
  }

  if (regionError || brandError) {
    return <div>Error: {regionError?.message || brandError?.message}</div>;
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
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-6 pb-8">
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
            <div className=" grid grid-cols-3 lg:grid-cols-4 justify-center text-center gap-2 lg:gap-4">
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
            <div className=" grid grid-cols-4 justify-center text-center gap-4">
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
        {uniqueBrandProducts && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 text-center p-6 ">
            {uniqueBrandProducts?.map((brand, index) => (
              <Link to={`/brands/${brand.name}`} state={brand} key={index}>
                <div className="card card-compact shadow-xl">
                  <figure>
                    <img
                      className="h-[100px] lg:h-[200px]"
                      src={brand.brandUrl}
                      alt={brand.brandName}
                    />
                  </figure>
                  <div className="card-body text-center items-center">
                    <h2 className="card-title">{brand.brandName}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* <div className="py-6">
        {selecetOne && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 text-center p-6 ">
            <Link to={`/brands/${selecetOne?.brandName}`} state={selecetOne}>
              <div className="card card-compact shadow-xl">
                <figure>
                  <img
                    className="h-[100px] lg:h-[200px]"
                    src={selecetOne?.brandUrl}
                    alt={selecetOne?.brandName}
                  />
                </figure>
                <div className="card-body text-center items-center">
                  <h2 className="card-title">{selecetOne?.brandName}</h2>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Regions;
