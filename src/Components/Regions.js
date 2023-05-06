import React, { useEffect, useState } from "react";

const Regions = () => {
  const [regions, setRegions] = useState([]);
  // const [active, setActive] = useState(0);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/regions")
      .then((res) => res.json())
      .then((data) => setRegions(data?.data));
  }, []);
  const [selectedRegion, setSelectedRegion] = useState(null);
  console.log(selectedRegion);

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
    // setActive(index);
  };

  return (
    <div>
      <div className="grid grid-cols-6">
        {regions.map((r, index) => {
          // console.log(r);
          return (
            <button key={r.region} onClick={() => handleRegionClick(r)}>
              {r.region}
            </button>
          );
        })}
      </div>
      <ul>
        {selectedRegion &&
          selectedRegion?.district?.map((d) => <li key={d}>{d}</li>)}
      </ul>
    </div>
  );
};

export default Regions;
