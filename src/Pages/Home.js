import React, { useState } from "react";
import HeroSlider from "../Components/HeroSlider";
import HeaderMenu from "../Components/HeaderMenu";
import MobileSearch from "../Components/MobileSearch";
import CategorySwiper from "./CategorySwiper/CategorySwiper";
import SameDayDelivery from "../Components/SameDayDelivery";
import Regions from "../Components/Regions";

const Home = () => {
  const [selectedData, setSelectedData] = useState([]);

  const data = [
    "dhaka",
    "mohammadpur",
    "badda",
    "khila",
    "dhanmondi",
    "gulshan",
  ];

  const handleDataSelection = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedData([...selectedData, value]);
    } else {
      setSelectedData(selectedData.filter((item) => item !== value));
    }
  };

  const handleSelectAll = () => {
    setSelectedData(data);
  };

  const handleUnselectAll = () => {
    setSelectedData([]);
  };
  return (
    <>
      <MobileSearch />
      <HeaderMenu />
      <HeroSlider />
      <CategorySwiper />
      <Regions />
      <SameDayDelivery />
      <div>
        <div>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              className="form-checkbox"
              onChange={handleSelectAll}
            />
            Select All
          </label>
          <button className="ml-2" onClick={handleUnselectAll}>
            Unselect All
          </button>
        </div>

        <div>
          {data.map((item) => (
            <label key={item} className="block mt-2">
              <input
                type="checkbox"
                className="form-checkbox"
                value={item}
                checked={selectedData.includes(item)}
                onChange={handleDataSelection}
              />
              {item}
            </label>
          ))}
        </div>

        <div>
          <h3>Selected Data:</h3>
          {selectedData.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
