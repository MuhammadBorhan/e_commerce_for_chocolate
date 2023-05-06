import React, { useEffect, useState } from "react";

const Regions = () => {
  // const brands = [
  //   { name: "borhan", title: "uddin", district: "Laksham" },
  //   { name: "ashraf", title: "khan", district: "Lalmai" },
  // ];
  const [regions, setRegions] = useState([]);
  const [active, setActive] = useState(0);
  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  // console.log(brands);
  console.log(selectedBrands);

  const handleBrand = (d) => {
    const rest = brands.filter((brand) => brand.district === d);
    setSelectedBrands(rest);
  };

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data?.data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/regions")
      .then((res) => res.json())
      .then((data) => setRegions(data?.data));
  }, []);
  const [selectedRegion, setSelectedRegion] = useState(null);

  const handleRegionClick = (region, index) => {
    setSelectedRegion(region);
    setActive(index);
  };

  return (
    <div className="p-12">
      <div className="pb-6 text-center">
        <h3 className="text-xl lg:text-2xl font-bold">Trending Gifts</h3>
        <p>Handpicked for your gifting needs</p>
      </div>
      <div className="">
        <h3 className="float-left mt-4">Region:</h3>
        <div className="grid grid-cols-6 gap-4 pb-8">
          {regions.map((r, index) => {
            // console.log(r);
            return (
              <button
                key={index}
                onClick={() => handleRegionClick(r, index)}
                className={`${
                  active === index ? "bg-orange-700 text-white font-bold" : ""
                } cursor-pointer capitalize m-4 `}
                style={{ boxShadow: "1px 1px 2px 1px gray" }}
              >
                {r.region}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        {selectedRegion ? (
          <div className="">
            <h2 className="float-left mr-4">District:</h2>
            <div className=" grid grid-cols-4 justify-center text-center gap-4">
              {selectedRegion?.district?.map((d) => (
                <button
                  onClick={() => handleBrand(d)}
                  className=" bg-blue-900 text-white"
                  key={d}
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
              {regions[0]?.district?.map((d) => (
                <button
                  onClick={() => handleBrand(d)}
                  className=" bg-indigo-200"
                  key={d}
                  style={{ boxShadow: "1px 1px 2px 1px gray" }}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="py-6">
        {selectedBrands && (
          <div className="grid grid-cols-3 gap-4 text-center p-6 bg-gray-200">
            {selectedBrands.map((brand) => (
              <div className="shadow-lg bg-white flex flex-col justify-center items-center">
                <div>
                  <img className="w-[200px]" src={brand.image} />
                </div>
                <h2>{brand.name}</h2>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Regions;
