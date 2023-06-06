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
import { ImCross } from "react-icons/im";

import "glightbox/dist/css/glightbox.min.css";
import Glightbox from "glightbox";
import Modal from "../../Components/Modal";
import { useGetAllEventUserQuery } from "../../features/api/eventUserApi";

const BrandsItem = () => {
  const location = useLocation();
  const brands = location?.state;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

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

  const [show, setShow] = useState(false);
  const [pShow, setPShow] = useState(false);

  // For product lightBox
  useEffect(() => {
    const lightbox = Glightbox({
      selector: ".glightbox",
    });
  }, []);

  const { data: getEventUser } = useGetAllEventUserQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const allEventUser = getEventUser?.data;
  console.log(allEventUser);
  const total = 100;

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
        {/* Gift Box for desktop  postponded for client choice..  */}
        {/* {selectGiftBox?.map((box) => {
          return (
            <div className="hero mx-auto my-16 hidden md:block">
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
                  <div className="flex gap-x-2 items-center">
                    <h3 className="font-bold mt-2">Quantity: </h3>
                    <input
                      type="number"
                      defaultValue={12}
                      className="border text-center w-16"
                    />
                  </div>
                  <p className="py-4 text-justify">{box?.desc}</p>
                  <button className="py-2 px-4 rounded text-white font-bold bg-[#9A583B]">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })} */}

        {selectGiftBox?.map((box) => {
          return (
            <div className="card hidden lg:block">
              <figure className="px-10 pt-10">
                <img
                  src={`https://andy-chocolate-productions.up.railway.app/${box?.image}`}
                  alt=""
                  className="w-[250px] lg:w-[400px] h-[250px] lg:h-[400px]  rounded-lg shadow-2xl"
                />
              </figure>
              <div className="card-body items-center text-center">
                <h1 className="text-2xl italic text-justify text-yellow-900 font-bold">
                  {box?.name}
                </h1>
              </div>
            </div>
          );
        })}

        {/* Gift box for mobile  */}
        {selectGiftBox?.map((box) => {
          return (
            <div className="mt-4 card shadow-xl lg:hidden ">
              <figure>
                <img
                  src={`https://andy-chocolate-productions.up.railway.app/${box?.image}`}
                  alt={box?.name}
                  classNmae="w-[200px]"
                />
              </figure>
              <div className="divider"></div>
              <div className="card-body">
                <h1 className="italic text-center text-yellow-900 font-bold lg:text-2xl lg:text-justify  ">
                  {box?.name}
                </h1>
                {/* <p className="italic text-justify mb-2 text-yellow-900 font-light">
                  {show ? box?.desc : box?.desc.slice(0, 100) + "..."}
                  <button onClick={() => setShow(!show)}>
                    <span className="">
                      {show ? "...see less" : "...see more"}
                    </span>
                  </button>
                </p>
                <div className="flex gap-x-2 items-center justify-between my-2">
                  <h3 className="font-bold ">¥{box?.price}</h3>
                  <input
                    type="number"
                    defaultValue={12}
                    className="border text-center w-16"
                  />
                  <button className="py-1 px-2 text-sm w-28 rounded text-white font-bold bg-[#9A583B]">
                    Add To Cart
                  </button>
                </div> */}
              </div>
            </div>
          );
        })}

        <div>
          {/* sidebar menu and color wise scroll selected product for mobile device */}
          <div>
            <h2 className="text-[#9A583B] mt-4 font-bold lg:hidden ">
              Products
            </h2>
            <div className="flex flex-col absolute right-0 mt-20 bg-[#9A583B] text-white gap-y-10 z-50 m-auto w-[20px] lg:hidden">
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
          </div>
          <div className="h-[400px] overflow-auto mx-auto mt-8 lg:hidden relative">
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
            <h2 className="hidden lg:block text-[#9A583B] text-xl font-bold mt-4 ">
              Products
            </h2>
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
              <div className="gallery grid grid-cols-1 lg:grid-cols-5 gap-4 mt-12">
                {projects
                  ? projects?.map((product, index) => (
                      <a
                        key={index}
                        className="glightbox card shadow-xl"
                        href={`https://andy-chocolate-productions.up.railway.app/${product?.image}`}
                      >
                        <img
                          src={`https://andy-chocolate-productions.up.railway.app/${product?.image}`}
                          alt="Image"
                          className="w-[150px] m-auto"
                        />
                        <div className="card-body sm:w-full text-center">
                          <h2 className="font-bold">{product?.name}</h2>
                          {/* <h2 className="font-bold">{product?.color}</h2> */}
                          <p className="text-sm font-light">{product?.desc}</p>
                          {/* <p className="text-xl font-bold">¥{product?.price}</p> */}
                        </div>
                      </a>
                    ))
                  : selectGiftBoxProducts?.map((product, index) => (
                      <a
                        key={index}
                        className="glightbox card shadow-xl"
                        href={`https://andy-chocolate-productions.up.railway.app/${product?.image}`}
                      >
                        <img
                          src={`https://andy-chocolate-productions.up.railway.app/${product?.image}`}
                          alt="Image"
                          className="w-[150px] m-auto"
                        />
                        <div className="card-body sm:w-full text-center">
                          <h2 className="font-bold">{product?.name}</h2>
                          {/* <h2 className="font-bold">{product?.color}</h2> */}
                          {/* <p className="text-sm font-light">
                            {" "}
                            {pShow
                              ? product?.desc
                              : product?.desc.slice(0, 20) + "..."}
                            <button onClick={() => setPShow(!pShow)}>
                              <span className="">
                                {pShow ? "...see less" : "..see more"}
                              </span>
                            </button>
                          </p> */}
                          <p className="text-sm font-light">{product?.desc}</p>
                          {/* <p className="text-xl font-bold">¥{product?.price}</p> */}
                        </div>
                      </a>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* event */}
      <div className="mt-8 lg:mt-16 ">
        <h2 className="text-center mb-4 font-mono text-xl">
          Event will be start this time. If you are interested please join
        </h2>
        <div className="grid lg:grid-cols-3 gap-20 mt-12">
          {filterEvent?.map((event) => {
            return (
              event?.status === "Start" && (
                <div
                  key={event._id}
                  className="card card-compact bg-base-100 shadow-xl rounded-none"
                  style={{ borderRadius: "35px 35px 25px 25px" }}
                >
                  <figure className=" ">
                    <img
                      src={`https://andy-chocolate-productions.up.railway.app/${event?.image}`}
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
                    <div className="flex items-center gap-x-10">
                      <p className="text-xs text-center">{event?.desc}</p>
                      <div className="shadow-lg rounded">
                        <h2 className="bg-[#DB874B] p-2 text-white font-bold">
                          Recruiting
                        </h2>
                        <p className="text-center p-2 font-bold">
                          Capacity {total} people
                        </p>
                        <p className="text-center font-bold text-blue-500 p-2">
                          {total - allEventUser?.length} People remaining
                        </p>
                      </div>
                    </div>
                    <div className="card-actions justify-center mx-auto m-2">
                      <div className="mt-2">
                        <Modal />
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
        <h2 className="mt-8 text-2xl text-center lg:text-left font-bold text-[#9A583B]">
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
                    className="w-[200px] lg:w-[300px]"
                  />
                </figure>
                <h2 className="font-bold  sm:w-full text-center">
                  {box?.name}
                </h2>

                <div className="my-2.5  text-center">
                  <button className=" block mx-auto py-2 px-4 sm:w-sm rounded font-bold text-white bg-[#9A583B]">
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
// window.scrollTo(0, 100);

export default BrandsItem;
