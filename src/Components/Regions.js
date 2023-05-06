import React, { useEffect, useState } from "react";
import Region from "./Region";

const Regions = () => {
  const [regions, setRegions] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/v1/regions")
      .then((res) => res.json())
      .then((data) => setRegions(data?.data));
  }, []);
  return (
    <div className="pb-12 pr-4 lg:pr-12 pl-4 lg:pl-12 lg:pt-6">
      <div className="py-6 text-center">
        <h3 className="text-xl lg:text-2xl font-bold">Trending Gifts</h3>
        <p>Handpicked for your gifting needs</p>
      </div>
      <div className="grid  lg:grid-cols-5 gap-6">
        {regions.slice(0, 5).map((region) => (
          <Region key={region._id} area={region}></Region>
        ))}
      </div>
    </div>
  );
};

export default Regions;
