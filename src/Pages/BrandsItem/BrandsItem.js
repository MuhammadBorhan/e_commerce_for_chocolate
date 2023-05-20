import { useLocation } from "react-router-dom";
import {
  useGetAllGiftBoxQuery,
  useGetAllSelectGiftBoxQuery,
} from "../../features/api/GiftBoxApi";
import { useGetAllEventQuery } from "../../features/api/eventApi";
import { useGetAllProductsQuery } from "../../features/api/productsApi";

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
  console.log(selectGiftBoxProducts);

  // const selectedProducts = products?.filter((brandItem) => {
  //   return (
  //     brandItem?.brandName === brands?.name &&
  //     brandItem?.district === brands?.district
  //   );
  // });

  return (
    <div className="p-4 lg:p-12">
      {/* brand cover image */}
      <div className="bg-cover bg-center mt-[-40px]">
        <figure>
          <img
            src={brands?.image}
            alt={brands?.name}
            className="lg:h-[250px] w-full object-center "
          />
        </figure>
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
      {/* 
      <div className="flex justify-center mb-16  mt-6 ">
        <div className="card card-compact rounded-none bg-base-100 shadow-xl">
          <figure>
            <img
              className="w-[200px] lg:w-[300px] "
              src={findSelectGiftBox?.boxImage}
              alt={brands?.name}
            />
          </figure>
        </div>
      </div> */}

      <div className="mb-12 lg:mb-24">
        {allSelectGiftBox?.map((box, index) => {
          // console.log(box);
          return (
            <div
              key={box?._id}
              className={` p-2 mt-10 w-[50%] lg:w-[25%] m-auto `}
              style={{ boxShadow: "1px 1px 1px 2px lightblue" }}
            >
              <div>
                <img src={`http://localhost:5000/${box?.image}`} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="mb-24">
        {selectGiftBoxProducts?.map((product, index) => {
          return (
            <div
              key={product?._id}
              className={`flex items-center justify-between p-8 gap-x-10 my-10 w-full lg:w-[40%] m-auto ${
                index % 2 === 1 ? "flex-row-reverse" : ""
              }`}
              style={{ boxShadow: "1px 1px 1px 2px lightblue" }}
            >
              <div>
                <img
                  src={product?.image}
                  className="w-20 lg:w-40 h-20 lg:h-40"
                />
              </div>
              <div>
                <p>{product?.desc}</p>
                <p className="font-bold">{product?.name}</p>
                <p className="text-xl font-bold">¥{product?.price}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* event */}
      {events?.map((event) => {
        return (
          event?.status === "Start" && (
            <div
              key={event._id}
              className="w-full lg:w-[40%] m-auto p-4 my-8"
              style={{ boxShadow: "1px 1px 1px 2px gray" }}
            >
              <h1>
                {event?.title}: {event?.desc}
              </h1>
              <div className="py-4">
                <span className="bg-gray-300 p-1 mr-2">Event Date: </span>
                <span>{new Date(event?.dateTime).toLocaleString()}</span>
              </div>
              <div className="mb-4">
                <span className="bg-gray-300 p-1 mr-2">Status: </span>
                <a
                  target="_blank"
                  href={event?.gmeet}
                  className="text-white px-2 font-bold btn-success"
                >
                  {event?.status}
                </a>
              </div>
              <div>
                <span className="bg-gray-300 p-1 mr-2">Meet Link: </span>
                <a
                  target="_blank"
                  href={event?.gmeet}
                  className="text-blue-500 underline"
                >
                  {event?.gmeet}
                </a>
              </div>
            </div>
          )
        );
      })}

      <div className="w-full lg:w-[60%] mt-24 mx-auto">
        <h1 className="text-center text-2xl font-bold text-indigo-600">
          Categories
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6">
          {allProducts?.map((product) => {
            return (
              <div
                key={product?._id}
                className="shadow-lg p-2 flex justify-center items-center flex-col"
              >
                <img src={product?.image} className="w-[200px] h-[200px] " />
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
