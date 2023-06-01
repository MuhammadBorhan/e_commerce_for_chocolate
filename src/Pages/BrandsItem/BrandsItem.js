import { useLocation } from "react-router-dom";
import {
  useGetAllGiftBoxQuery,
  useGetAllSelectGiftBoxQuery,
} from "../../features/api/GiftBoxApi";
import { useGetAllEventQuery } from "../../features/api/eventApi";
import { useGetAllProductsQuery } from "../../features/api/productsApi";
import { useState } from "react";
import { useEffect } from "react";

import "./BrandsItem.css";

const BrandsItem = () => {
  const location = useLocation();
  const brands = location?.state;

  // fetch all gift box data
  const { data: getGiftBox } = useGetAllGiftBoxQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const allGiftbox = getGiftBox?.data;
  console.log(allGiftbox);

  const { data: getSelectGiftBox } = useGetAllSelectGiftBoxQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const allSelectGiftBox = getSelectGiftBox?.data;

  const selectGiftBox = allSelectGiftBox?.filter(
    (giftBox) => giftBox?.brand === brands?.name
  );
  // console.log(selectGiftBox);

  const similarGiftBox = allGiftbox?.filter((box) => {
    return selectGiftBox?.some((sbox) => sbox?._id !== box?._id);
  });

  const findSelectGiftBox = selectGiftBox?.find((giftBox) => giftBox);

  // fetch all events data
  const { data: getEvent } = useGetAllEventQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const events = getEvent?.data;
  const filterEvent = events?.filter((even) => even?.brand === brands?.name);

  // fetch all products
  const { data: getProducts } = useGetAllProductsQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const allProducts = getProducts?.data;

  const selectGiftBoxProducts = allProducts?.filter((product) => {
    return findSelectGiftBox?.productList?.some(
      (pdct) => pdct === product.name
    );
  });

  const [projects, setProjects] = useState();
  useEffect(() => {
    setProjects(selectGiftBoxProducts);
  }, []);

  const [activeFilter, setActiveFilter] = useState("All");
  const colors = ["All", "Black", "White", "Milk"];

  const handleFilter = (filter) => {
    setActiveFilter(filter);

    if (filter === "All") {
      setProjects(selectGiftBoxProducts);
    } else {
      const filteredProjects = selectGiftBoxProducts.filter(
        (project) => project.color === filter
      );
      setProjects(filteredProjects);
    }
  };

  return (
    <div className="p-4 lg:p-12">
      {/* brand cover image */}
      <div>
        <div
          className="h-48 bg-cover bg-center bg-no-repeat w-full relative -mt-10"
          style={{
            backgroundImage: `url(${`https://andy-chocolate-productions.up.railway.app/uploads/${brands?.image}`})`,
          }}
        >
          <div
            className="absolute bottom-10 left-10 flex flex-col items-center "
            style={{ zIndex: "2" }}
          >
            <img
              src={`https://andy-chocolate-productions.up.railway.app/uploads/${brands?.logo}`}
              alt="Logo"
              className="w-full h-full object-center "
            />
            <p className="text-white font-bold">{brands?.name}</p>
          </div>
          <div className="overlay"></div>
        </div>
      </div>

      <div>
        {/* Gift Box for large device  */}
        {selectGiftBox?.map((box) => {
          console.log("box", box);
          return (
            <div className="hero mx-auto my-16 ">
              <div
                key={box?._id}
                className="hero-content flex-col lg:flex-row gap-y-10 lg:gap-y-0"
              >
                <div className="flex-1 flex justify-center">
                  <img
                    src={`https://andy-chocolate-productions.up.railway.app/${box?.image}`}
                    alt=""
                    className="w-[250px] lg:w-[400px] h-[250px] lg:h-[400px]  rounded-lg shadow-2xl"
                  />
                </div>
                <div className="w-full flex-1">
                  <h1 className="text-2xl italic text-justify text-yellow-900 font-bold">
                    {box?.name}
                  </h1>
                  <div className="divider"></div>
                  <h3 className="font-bold text-xl">Price: ¥{box?.price}</h3>
                  <h3 className="font-bold mt-2">Quantity: 15</h3>
                  <p className="py-4 text-justify">{box?.desc}</p>
                  <button className="p-2 rounded text-white bg-[#9A583B]">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}

        {/* Gift box for mobile  */}
        {selectGiftBox?.map((box) => {
          return (
            <div className="mt-4 card   shadow-xl lg:hidden">
              <figure>
                <img
                  src={`https://andy-chocolate-productions.up.railway.app/${box?.image}`}
                  alt="Shoes"
                />
              </figure>
              <div className="divider"></div>
              <div className="card-body">
                <h2 className="card-title justify-center justify-items-center">
                  <h1 className="text-xl italic  text-yellow-900 font-bold">
                    {box?.name}
                  </h1>
                  <h3 className="font-bold "> ¥{box?.price}</h3>
                  <h3 className="font-bold mt-2">Quantity: 15</h3>
                </h2>
              </div>
            </div>
          );
        })}
        <div>
          {/* sidebar menu and color wise scroll selected product for mobile device */}
          <div className="flex flex-col absolute right-0 mt- bg-[#9A583B] text-white gap-y-10 z-50 m-auto w-[20px] lg:hidden">
            <button
              onClick={() => handleFilter("All")}
              title="All Products"
              className={
                activeFilter === "All" ? "text-green-500 font-bold" : ""
              }
            >
              A
            </button>
            <button
              onClick={() => handleFilter("Black")}
              title="Black"
              className={
                activeFilter === "Black" ? "text-green-500 font-bold" : ""
              }
            >
              B
            </button>
            <button
              onClick={() => handleFilter("White")}
              title="White"
              className={
                activeFilter === "White" ? "text-green-500 font-bold" : ""
              }
            >
              W
            </button>
            <button
              onClick={() => handleFilter("Milk")}
              title="Milk"
              className={
                activeFilter === "Milk" ? "text-green-500 font-bold" : ""
              }
            >
              M
            </button>
            <button title="Description" className="">
              D
            </button>
          </div>
          {/* product  */}
          <div className="h-[600px] overflow-auto mx-auto mt-8 lg:hidden relative">
            {projects
              ? projects?.map((product) => {
                  return (
                    <div
                      key={product?._id}
                      className="flex items-center p-2 gap-x-5 border"
                    >
                      <figure>
                        <img
                          src={`https://andy-chocolate-productions.up.railway.app/${product?.image}`}
                          alt="Product"
                          className="w-[70px]"
                        />
                      </figure>

                      <div className="">
                        <h2 className="font-bold ">{product?.name}</h2>
                        {/* <h2 className="font-bold">{product?.color}</h2> */}
                        <p>{product?.desc?.slice(0, 50)}</p>
                        {/* <p className=" font-bold">¥{product?.price}</p> */}
                      </div>
                    </div>
                  );
                })
              : selectGiftBoxProducts?.map((product) => {
                  return (
                    <div
                      key={product?._id}
                      className="flex items-center p-2 gap-x-5 border"
                    >
                      <figure>
                        <img
                          src={`https://andy-chocolate-productions.up.railway.app/${product?.image}`}
                          alt="Product"
                          className="w-[70px]"
                        />
                      </figure>

                      <div className="">
                        <h2 className="font-bold ">{product?.name}</h2>
                        {/* <h2 className="font-bold">{product?.color}</h2> */}
                        <p>{product?.desc?.slice(0, 50)}</p>
                        {/* <p className=" font-bold">¥{product?.price}</p> */}
                      </div>
                    </div>
                  );
                })}
          </div>

          {/* tab and color wise selected product for desktop version */}
          <div>
            <h2 className=" text-2xl  font-bold text-[#9A583B]">Products</h2>
            <div className="hidden lg:block">
              <div className="tabs hidden lg:block">
                {colors?.map((color, index) => (
                  <button
                    onClick={() => handleFilter(color)}
                    className={`${
                      activeFilter === color
                        ? " tab tab-bordered tab-active"
                        : ""
                    } tab tab-bordered`}
                    key={index}
                  >
                    {color}
                  </button>
                ))}
                <a className="tab tab-bordered">Description</a>
              </div>
              <div className="grid lg:grid-cols-5 gap-4 mt-12">
                {projects
                  ? projects?.map((product) => {
                      return (
                        <div key={product?._id} className="card shadow-xl ">
                          <figure>
                            <img
                              src={`https://andy-chocolate-productions.up.railway.app/${product?.image}`}
                              alt="Product"
                              className="lg:w-36"
                            />
                          </figure>

                          <div className="card-body sm:w-full text-center">
                            <h2 className=" font-bold">{product?.name}</h2>
                            {/* <h2 className="font-bold">{product?.color}</h2> */}
                            <p>
                              <span className="">{product?.desc}</span>
                            </p>
                            {/* <p className="text-xl font-bold">¥{product?.price}</p> */}
                          </div>
                        </div>
                      );
                    })
                  : selectGiftBoxProducts?.map((product) => {
                      return (
                        <div key={product?._id} className="card shadow-xl ">
                          <figure>
                            <img
                              src={`https://andy-chocolate-productions.up.railway.app/${product?.image}`}
                              alt="Product"
                            />
                          </figure>

                          <div className="card-body sm:w-full text-center">
                            <h2 className="text-xl">{product?.name}</h2>
                            {/* <h2 className="font-bold">{product?.color}</h2> */}
                            <p>{product?.desc}</p>
                            {/* <p className="text-xl font-bold">¥{product?.price}</p> */}
                          </div>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* event */}
      <div className="mt-12 lg:mt-16 ">
        <h2 className="text-center mb-4 font-mono text-xl">
          Event will be start this time. If you are interested please join
        </h2>
        <div className="grid lg:grid-cols-3 gap-12 mt-12">
          {filterEvent?.map((event) => {
            return (
              event?.status === "Start" && (
                <div
                  key={event._id}
                  className="card card-compact mx-auto lg:w-[320px] bg-base-100 shadow-xl rounded-none"
                  style={{ borderRadius: "35px 35px 25px 25px" }}
                >
                  <figure className=" ">
                    <img
                      src={`https://andy-chocolate-productions.up.railway.app/uploads/${brands?.image}`}
                      alt={brands?.name}
                      className="h-[250px] mt-1"
                      style={{ borderRadius: "25px 25px 0 0" }}
                    />
                  </figure>
                  <h3
                    className=" italic font-bold text-white mt-8 mr-8 bg-[#db874b] p-2 text-justify"
                    style={{ borderRadius: "0 30px 30px 0" }}
                  >
                    {event?.title}
                  </h3>
                  <div className="card-body">
                    <p className="text-center text-xl italic">
                      {new Date(event?.dateTime).toLocaleString()}
                    </p>
                    <h4 className="text-center">Google Meet</h4>
                    <p className="text-center">
                      <span className="text-xs">{event?.desc}</span>
                    </p>
                    <div className="card-actions justify-center mx-auto m-2">
                      <div className="mt-2">
                        <a
                          target="_blank"
                          href={event?.gmeet}
                          className=" w-24 bg-transparent  hover:bg-emerald-400 text-emerald-400 font-semibold hover:text-white py-2 px-4 border border-emerald-400 hover:border-transparent rounded"
                        >
                          {event?.status}
                        </a>
                      </div>
                      <div className="hidden mt-2">
                        <span className="bg-[#9A583B] p-2 mr-2 text-white rounded ">
                          Meet Link:{" "}
                        </span>
                        <a
                          target="_blank"
                          href={event?.gmeet}
                          className="text-blue-500 underline"
                        >
                          {event?.gmeet}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
      {/* Similar Gift Box */}

      <div>
        <h2 className="mt-8 text-2xl font-bold text-[#9A583B]">
          Similar Gift Box
        </h2>
        <div className="grid lg:grid-cols-4 gap-10 mt-8">
          {similarGiftBox?.map((box) => {
            return (
              <div key={box?._id} className="card shadow-xl ">
                <figure>
                  <img
                    src={`https://andy-chocolate-productions.up.railway.app/${box?.image}`}
                    alt="box"
                  />
                </figure>
                <h2 className="font-bold  sm:w-full text-center">
                  {box?.name}
                </h2>

                <div className="mb-4  text-center">
                  <button className="w-2/4 block mx-auto p-2 sm:w-sm rounded font-bold text-white bg-[#9A583B]">
                    Add To Cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
window.scrollTo(0, 100);

export default BrandsItem;
