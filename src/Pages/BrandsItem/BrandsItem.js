import { useLocation } from "react-router-dom";
import {
  useGetAllGiftBoxQuery,
  useGetAllSelectGiftBoxQuery,
} from "../../features/api/GiftBoxApi";
import { useGetAllEventQuery } from "../../features/api/eventApi";
import { useGetAllProductsQuery } from "../../features/api/productsApi";
import { useState } from "react";
import { useEffect } from "react";

const BrandsItem = () => {
  const location = useLocation();
  const brands = location?.state;

  // fetch all gift box data
  const { data: getGiftBox } = useGetAllGiftBoxQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const allGiftbox = getGiftBox?.data;

  const { data: getSelectGiftBox } = useGetAllSelectGiftBoxQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const allSelectGiftBox = getSelectGiftBox?.data;

  const selectGiftBox = allSelectGiftBox?.filter(
    (giftBox) => giftBox?.brand === brands?.name
  );

  const findSelectGiftBox = selectGiftBox?.find((giftBox) => giftBox);

  // fetch all events data
  const { data: getEvent } = useGetAllEventQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const events = getEvent?.data;

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
  console.log("select", selectGiftBoxProducts);

  // const selectedProducts = products?.filter((brandItem) => {
  //   return (
  //     brandItem?.brandName === brands?.name &&
  //     brandItem?.district === brands?.district
  //   );
  // });

  const menuNavbar = [
    {
      name: "All",
    },
    {
      name: "Black",
    },
    {
      name: "White",
    },
    {
      name: "Milk",
    },
  ];

  const [projects, setProjects] = useState();
  useEffect(() => {
    setProjects(selectGiftBoxProducts);
  }, []);
  console.log("projects", projects);
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
      <div className="bg-cover bg-center relative ">
        <figure>
          <img
            src={`https://andy-chocolate-productions.up.railway.app/uploads/${brands?.image}`}
            alt={brands?.name}
            className="lg:h-[200px] w-[80%] mx-auto object-center"
          />
        </figure>
      </div>

      <div className="avatar absolute">
        <div className="w-20 h-20 lg:w-28 mt-[-70px] lg:mt-[-100px] ml-[60px] lg:ml-[160px] lg:h-28 object-center rounded-full ring ring-slate-100 ring-offset-base-100 ring-offset-2">
          <img
            src={`https://andy-chocolate-productions.up.railway.app/uploads/${brands?.logo}`}
            alt="Logo"
            className=""
          />
        </div>
      </div>

      <div>
        <div className="mb-12 lg:mb-12 mt-16">
          {selectGiftBox?.map((box) => {
            return (
              <div
                key={box?._id}
                className={` p-2 mt-10 w-[50%] lg:w-[25%] m-auto `}
                style={{
                  boxShadow:
                    "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
                }}
              >
                <div>
                  <img
                    src={`https://andy-chocolate-productions.up.railway.app/${box?.image}`}
                  />
                </div>
                <p className="text-center font-bold">{box?.name}</p>
              </div>
            );
          })}
        </div>

        {/* sidebar menu and color wise scroll selected product for mobile device */}
        <div>
          <div className="flex flex-col absolute right-0 mt-2 bg-black text-white gap-y-10 z-50 m-auto w-[20px] lg:hidden">
            <button
              onClick={() => handleFilter("All")}
              className={
                activeFilter === "All" ? "text-green-500 font-bold" : ""
              }
            >
              A
            </button>
            <button
              onClick={() => handleFilter("Black")}
              className={activeFilter === "Black" ? "active" : ""}
            >
              B
            </button>
            <button
              onClick={() => handleFilter("White")}
              className={activeFilter === "White" ? "active" : ""}
            >
              W
            </button>
            <button
              onClick={() => handleFilter("Milk")}
              className={activeFilter === "Milk" ? "active" : ""}
            >
              M
            </button>
            <button className="">D</button>
          </div>
          <div className="h-[600px] overflow-auto w-[400px] mx-auto mt-8 lg:hidden relative">
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
                        <h2 className="font-bold">{product?.color}</h2>
                        <p>{product?.desc?.slice(0, 50)}</p>
                        <p className=" font-bold">¥{product?.price}</p>
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
                        <h2 className="font-bold">{product?.color}</h2>
                        <p>{product?.desc?.slice(0, 50)}</p>
                        <p className=" font-bold">¥{product?.price}</p>
                      </div>
                    </div>
                  );
                })}
          </div>

          {/* tab and color wise selected product for desktop version */}
          <div className="hidden lg:block">
            <div className="tabs hidden lg:block">
              {colors?.map((color, index) => (
                <button
                  onClick={() => handleFilter(color)}
                  className={`${
                    activeFilter === color ? " tab tab-bordered tab-active" : ""
                  } tab tab-bordered`}
                  key={index}
                >
                  {color}
                </button>
              ))}
              <a className="tab tab-bordered">Description</a>
            </div>
            <div className="grid lg:grid-cols-4 gap-10 mt-12">
              {projects
                ? projects?.map((product) => {
                    return (
                      <div key={product?._id} className="card shadow-xl ">
                        <figure>
                          <img
                            src={`https://andy-chocolate-productions.up.railway.app/${product?.image}`}
                            alt="Product"
                          />
                        </figure>

                        <div className="card-body sm:w-full text-center">
                          <h2 className="font-bold text-xl">{product?.name}</h2>
                          <h2 className="font-bold">{product?.color}</h2>
                          <p>{product?.desc}</p>
                          <p className="text-xl font-bold">¥{product?.price}</p>
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
                          <h2 className="font-bold text-xl">{product?.name}</h2>
                          <h2 className="font-bold">{product?.color}</h2>
                          <p>{product?.desc}</p>
                          <p className="text-xl font-bold">¥{product?.price}</p>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>

      {/* event */}
      <div className="mt-20">
        {events?.map((event) => {
          return (
            event?.status === "Join Now" && (
              <div
                key={event._id}
                className="card grid grid-cols-1 lg:grid-cols-1 lg:w-1/3 sm:w-1/2 bg-base-100 shadow-xl mx-auto border-2  "
              >
                <div className="card-body">
                  <div div className="mb-4">
                    <img
                      src={`https://andy-chocolate-productions.up.railway.app/uploads/${brands?.logo}`}
                      alt={brands?.name}
                      className="h-[250px]  mx-auto object-center"
                    />
                  </div>
                  <div className=" font-bold flex items-center">
                    <div className="bg-[#9A583B] p-2 text-white text-center rounded w-28 mr-6">
                      Event Title{" "}
                    </div>
                    {event?.title}
                  </div>
                  <div className=" font-bold flex items-center">
                    <div className="bg-[#9A583B] p-2 text-white text-center rounded w-28 mr-6">
                      Event Date{" "}
                    </div>{" "}
                    <div>{new Date(event?.dateTime).toLocaleString()}</div>
                  </div>
                  <div className=" font-bold flex items-center">
                    <div className="bg-[#9A583B] p-2  text-white text-center rounded w-28 mr-6">
                      Media{" "}
                    </div>
                    <div>Google Meet</div>
                  </div>

                  <div className=" font-bold flex items-center">
                    <div className="bg-[#9A583B] p-2  text-white text-center rounded w-40 inline-block mr-2">
                      Description{" "}
                    </div>
                    <div> {event?.desc}</div>
                  </div>

                  <div className="card-actions justify-center mx-auto mt-2">
                    <div className="mt-2">
                      <a
                        target="_blank"
                        href={event?.gmeet}
                        className=" w-24 bg-green-500 text-white hover:bg-emerald-400 font-semibold hover:text-white py-2 px-4 border border-emerald-400 hover:border-transparent rounded"
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

      <div className="w-full lg:w-[60%] mt-24 mx-auto">
        <div className=" text-2xl font-bold text-indigo-600">
          Similar Product
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
          {allProducts?.map((product) => {
            return (
              <div
                key={product?._id}
                className="shadow-lg p-2 flex justify-center items-center flex-col"
              >
                <img
                  src={`https://andy-chocolate-productions.up.railway.app/${product?.image}`}
                  className="w-[200px] h-[200px] "
                />
                <div className="text-center">
                  <p>{product?.name}</p>
                  <p>{product?.desc}</p>
                  <p>${product?.price}</p>
                </div>
                <button className="px-2 py-1 bg-[#9A583B] mt-4 text-white font-bold">
                  Add To Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BrandsItem;
