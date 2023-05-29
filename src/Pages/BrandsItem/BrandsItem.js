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
  console.log(selectGiftBoxProducts);

  // const selectedProducts = products?.filter((brandItem) => {
  //   return (
  //     brandItem?.brandName === brands?.name &&
  //     brandItem?.district === brands?.district
  //   );
  // });

  const menuNavbar = [
    {
      name: "all",
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

  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(selectGiftBoxProducts);
    } else {
      const newProjects = selectGiftBoxProducts.filter((project) => {
        return project.color.toLowerCase() === item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  const handleColor = (e, index) => {
    setItem({ name: e.target.textContent.toLowerCase() });
    setActive(index);
  };

  return (
    <div className="p-4 lg:p-12">
      {/* brand cover image */}
      <div className="bg-cover bg-center relative ">
        <figure>
          <img
            src={`http://localhost:4000/uploads/${brands?.image}`}
            alt={brands?.name}
            className="lg:h-[200px] w-[80%] mx-auto object-center"
          />
        </figure>
      </div>
      <div className="avatar absolute">
        <div className="w-28 h-28 object-center rounded-full ring ring-slate-100 ring-offset-base-100 ring-offset-2">
          <img
            src={`http://localhost:4000/uploads/${brands?.logo}`}
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
                  <img src={`http://localhost:5000/${box?.image}`} />
                </div>
                <p className="text-center font-bold">{box?.name}</p>
              </div>
            );
          })}
        </div>

        <div>
          <div className="tabs hidden lg:block">
            {menuNavbar?.map((menu, index) => (
              <a
                className={`${
                  active === index ? "tab tab-bordered tab-active" : ""
                } cursor-pointer capitalize m-4`}
                key={index}
                onClick={(e) => {
                  handleColor(e, index);
                }}
              >
                {menu.name}
              </a>
            ))}

            <a className="tab tab-bordered">Description</a>
          </div>

          <div className="flex flex-col absolute left-[-10px] gap-y-10 z-50 m-auto w-[20px] lg:hidden">
            {menuNavbar?.map((menu, index) => (
              <a
                className={`${
                  active === index ? "text-red-500" : ""
                } cursor-pointer capitalize m-4`}
                key={index}
                onClick={(e) => {
                  handleColor(e, index);
                }}
              >
                {menu.name}
                {/* {menu.name=='all'?'A':menu.name=='Black'?'B':menu.name=='White'?'W':'M'} */}
              </a>
            ))}
            <a className="">D</a>
          </div>

          <div className="h-[600px] overflow-auto w-[400px] mx-auto p-2 mt-8 lg:hidden relative">
            {projects?.map((product) => {
              return (
                <div
                  key={product?._id}
                  className="flex items-center p-2 gap-x-5 border"
                >
                  <figure>
                    <img
                      src={`http://localhost:5000/${product?.image}`}
                      alt="Product"
                      className="w-[70px]"
                    />
                  </figure>

                  <div className="">
                    <h2 className="font-bold ">{product?.name}</h2>
                    <h2 className="font-bold">{product?.color}</h2>
                    <p>{product?.desc.slice(0, 50)}</p>
                    <p className=" font-bold">¥{product?.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="hidden lg:block">
            <div className="grid lg:grid-cols-4 gap-10 mt-12">
              {projects?.map((product) => {
                return (
                  <div key={product?._id} className="card shadow-xl ">
                    <figure>
                      <img
                        src={`http://localhost:5000/${product?.image}`}
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
      <div className="mt-6">
        {events?.map((event) => {
          return (
            event?.status === "Join Now" && (
              <div
                key={event._id}
                className="card card-compact mx-auto w-96 bg-base-100 shadow-xl"
              >
                <figure>
                  <img
                    src={`http://localhost:4000/uploads/${brands?.logo}`}
                    alt={brands?.name}
                    className="h-[250px] rounded-md mt-1"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="text-2xl italic font-bold text-center">
                    {event?.title}
                  </h3>
                  <p className="text-center text-xl italic">
                    {new Date(event?.dateTime).toLocaleString()}
                  </p>
                  <h4 className="text-center">Google Meet</h4>
                  <p>
                    <span className="text-xl">{event?.desc}</span>
                  </p>
                  <div className="card-actions justify-center mx-auto m-2">
                    <div className="mt-2">
                      <a
                        target="_blank"
                        href={event?.gmeet}
                        className=" w-24 bg-transparent hover:bg-emerald-400 text-emerald-400 font-semibold hover:text-white py-2 px-4 border border-emerald-400 hover:border-transparent rounded"
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
                  src={`http://localhost:4000/${product?.image}`}
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
