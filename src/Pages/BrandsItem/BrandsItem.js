import { useLocation } from "react-router-dom";
import {
  useGetAllGiftBoxQuery,
  useGetAllSelectGiftBoxQuery,
} from "../../features/api/GiftBoxApi";
import { useGetAllEventQuery } from "../../features/api/eventApi";
import { useGetAllProductsQuery } from "../../features/api/productsApi";
import { useState } from "react";

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

  const selectGiftBox = allGiftbox?.filter(
    (giftBox) => giftBox?.brandName === brands?.name
  );
  const findSelectGiftBox = allSelectGiftBox?.find((giftBox) => giftBox);
  // console.log(findSelectGiftBox?.productList);

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

  // const selectedProducts = products?.filter((brandItem) => {
  //   return (
  //     brandItem?.brandName === brands?.name &&
  //     brandItem?.district === brands?.district
  //   );
  // });

  const [visibleProducts, setVisibleProducts] = useState(3);
  const totalProducts = selectGiftBoxProducts?.length;
  const [showAllProducts, setShowAllProducts] = useState(false);

  const handleShowMore = () => {
    setVisibleProducts(totalProducts);
    setShowAllProducts(true);
  };

  const handleShowLess = () => {
    setVisibleProducts(3);
    setShowAllProducts(false);
  };

  return (
    <div className="p-4 lg:p-12">
      {/* brand cover image */}
      <div className="bg-cover bg-center relative ">
        <figure>
          <img
            src={`http://localhost:5000/uploads/${brands?.image}`}
            alt={brands?.name}
            className="lg:h-[200px] w-[80%] mx-auto object-center"
          />
        </figure>
      </div>

      <div className="avatar absolute">
        <div className="w-20 h-20 lg:w-28 mt-[-70px] lg:mt-[-100px] ml-[60px] lg:ml-[160px] lg:h-28 object-center rounded-full ring ring-slate-100 ring-offset-base-100 ring-offset-2">
          <img
            src={`http://localhost:5000/uploads/${brands?.logo}`}
            alt="Logo"
            className=""
          />
        </div>
      </div>

      {/* search bar */}
      <div className="relative hidden lg:block text-gray-600 w-[510px] mx-auto my-6 border shadow rounded shadow-gray-300">
        <input
          className="bg-white h-8 px-5 pr-10 rounded-full text-sm focus:outline-none w-[500px]"
          type="search"
          name="search"
          placeholder="Search"
        />
        <button type="submit" className="absolute right-0 top-0 mt-2 mr-4 ">
          <svg
            className="h-4 w-4 fill-current"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11.656 10.562c-1.031.813-2.344 1.313-3.75 1.313-3.313 0-6-2.688-6-6s2.687-6 6-6 6 2.688 6 6c0 1.406-.5 2.719-1.313 3.75l3.563 3.563-1.406 1.407-3.563-3.563zM6 8c0 1.656 1.344 3 3 3s3-1.344 3-3-1.344-3-3-3-3 1.344-3 3z" />
          </svg>
        </button>
      </div>

      <div className="mb-12 lg:mb-24 ">
        {allSelectGiftBox?.map((box, index) => {
          // console.log(box);
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
            </div>
          );
        })}
      </div>

      {/* All Products  */}
      <div className="flex lg:justify-end sticky top-20  z-50">
        <select className="select select-error ">
          <option disabled selected>
            Pick Your Favourite One
          </option>
          <option>White Chocolate</option>
          <option>Black Chocolate</option>
          <option>Other Chocolate</option>
        </select>
      </div>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 mt-4">
          {selectGiftBoxProducts
            ?.slice(0, visibleProducts)
            ?.map((product, index) => {
              return (
                <div key={product?._id} className="card  shadow-xl ">
                  <figure>
                    <img
                      src={`http://localhost:5000/${product?.image}`}
                      alt="Product"
                    />
                  </figure>

                  <div className="card-body sm:w-full">
                    <h2 className="card-title">
                      {product?.name}
                      <div className="badge badge-[#9A583B]">NEW</div>
                    </h2>
                    <p>{product.desc}</p>
                    <p>{product?.desc}</p>
                    <p className="text-xl font-bold">¥{product?.price}</p>
                  </div>
                </div>
              );
            })}
        </div>

        {showAllProducts ? (
          <button
            onClick={handleShowLess}
            className="bg-red-500 text-white px-2 py-1 mt-12 mx-auto block"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={handleShowMore}
            className="bg-[#9A583B] text-white px-2 py-1 mt-12 mx-auto block"
          >
            Show More
          </button>
        )}
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
                      src={`http://localhost:5000/uploads/${brands?.logo}`}
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
        <div className=" text-2xl font-bold text-indigo-600">Categories</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
          {allProducts?.map((product) => {
            return (
              <div
                key={product?._id}
                className="shadow-lg p-2 flex justify-center items-center flex-col"
              >
                <img
                  src={`http://localhost:5000/${product?.image}`}
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
