import React, { useState } from "react";
import HeroSlider from "../Components/HeroSlider";
import HeaderMenu from "../Components/HeaderMenu";
import MobileSearch from "../Components/MobileSearch";
import CategorySwiper from "./CategorySwiper/CategorySwiper";
import SameDayDelivery from "../Components/SameDayDelivery";
import Regions from "../Components/Regions";
import Footer from "../Layout/Footer";

const Home = () => {
  const selectGiftBoxProducts = [
    { name: "choco", price: "5", color: "black" },
    { name: "choco bin", price: "8", color: "white" },
    { name: "mr mango", price: "15", color: "black" },
    { name: "lichita", price: "10", color: "red" },
    { name: "pran mango", price: "11", color: "white" },
    { name: "orange", price: "18", color: "white" },
  ];
  console.log("select", selectGiftBoxProducts);

  const [projects, setProjects] = useState(selectGiftBoxProducts);
  console.log("project", projects);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleFilter = (filter) => {
    setActiveFilter(filter);

    if (filter === "all") {
      setProjects(selectGiftBoxProducts);
    } else {
      const filteredProjects = selectGiftBoxProducts.filter(
        (project) => project.color === filter
      );
      setProjects(filteredProjects);
    }
  };
  return (
    <>
      <MobileSearch />
      <HeaderMenu />
      <HeroSlider />
      {/* <CategorySwiper /> */}
      <Regions />
      <SameDayDelivery />
      <Footer />

      <div className="p-8">
        <div className="flex gap-x-10">
          <button
            onClick={() => handleFilter("all")}
            className={activeFilter === "all" ? "active" : ""}
          >
            All
          </button>
          <button
            onClick={() => handleFilter("black")}
            className={activeFilter === "black" ? "active" : ""}
          >
            Black
          </button>
          <button
            onClick={() => handleFilter("white")}
            className={activeFilter === "white" ? "active" : ""}
          >
            White
          </button>
          <button
            onClick={() => handleFilter("red")}
            className={activeFilter === "red" ? "active" : ""}
          >
            Red
          </button>
        </div>
        <div className="grid grid-cols-3 p-8">
          {projects.map((project, index) => (
            <div key={index}>
              <p>Name: {project.name}</p>
              <p>Price: {project.price}</p>
              <p>Color: {project.color}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
