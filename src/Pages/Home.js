import React, { useEffect, useState } from "react";
import HeroSlider from "../Components/HeroSlider";
import HeaderMenu from "../Components/HeaderMenu";
import MobileSearch from "../Components/MobileSearch";
import CategorySwiper from "./CategorySwiper/CategorySwiper";
import SameDayDelivery from "../Components/SameDayDelivery";
import Regions from "../Components/Regions";
import Footer from "../Layout/Footer";

const Home = () => {
  const regions = [
    { region: "Dhaka", district: ["mohammadpur", "rampura", "badda"] },
    { region: "Comilla", district: ["laksham", "lalmai", "barura", "sadar"] },
    { region: "Chattagram", district: ["agrabad", "hamjarbag", "muradpur"] },
  ];
  const [selectedRegion, setSelectedRegion] = useState(null);

  return (
    <>
      <MobileSearch />
      <HeaderMenu />
      <HeroSlider />
      {/* <CategorySwiper /> */}
      <Regions />
      <SameDayDelivery />
      <Footer />

      <div className="p-20">
        {selectedRegion ? (
          <button
            onClick={() => setSelectedRegion(null)}
            className="border-2 rounded-full px-2"
          >
            {selectedRegion?.region} &#8595;
          </button>
        ) : (
          <div>
            <span>Choose Region</span>
            <div className="flex gap-x-12">
              {regions.map((region) => (
                <button onClick={() => setSelectedRegion(region)}>
                  {region?.region}
                </button>
              ))}
            </div>
          </div>
        )}

        <div>
          {selectedRegion && (
            <div>
              <h4 className=" font-bold my-2">Choose District</h4>
              <div className="flex gap-4 mx-auto ">
                {selectedRegion?.district?.map((dis) => (
                  <button className="border py-1 px-2">{dis}</button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
