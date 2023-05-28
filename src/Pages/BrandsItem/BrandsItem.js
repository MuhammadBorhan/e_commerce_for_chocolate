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
  console.log(allSelectGiftBox);

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

      <div className="mb-12 lg:mb-24 mt-16">
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
                <img src={`http://localhost:4000/${box?.image}`} />
              </div>
              <p className="text-center font-bold">{box?.name}</p>
            </div>
          );
        })}
      </div>

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20 mt-4">
          {selectGiftBoxProducts?.map((product) => {
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
      </div>

      {/* event */}
      <div className="mt-4">
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
                      src={`http://localhost:4000/uploads/${brands?.logo}`}
                      alt={brands?.name}
                      className="lg:h-[150px] w-[70%]  mx-auto object-center"
                    />
                  </div>
                  <div className=" font-bold  grid grid-cols-3 ">
                    <div className="bg-[#9A583B] p-2 text-white text-center rounded w-24">
                      Event Title{" "}
                    </div>
                    {event?.title}
                  </div>
                  <div className=" font-bold grid grid-cols-3 ">
                    <div className="bg-[#9A583B] p-2 text-white text-center rounded w-24">
                      Event Date{" "}
                    </div>{" "}
                    <div>{new Date(event?.dateTime).toLocaleString()}</div>
                  </div>
                  <div className=" font-bold  grid grid-cols-3 ">
                    <div className="bg-[#9A583B] p-2  text-white text-center rounded w-24">
                      Media{" "}
                    </div>
                    <div>Google Meet</div>
                  </div>

                  <div className=" font-bold  grid grid-cols-3 ">
                    <div className="bg-[#9A583B] p-2  text-white text-center rounded w-24">
                      Description{" "}
                    </div>
                    <div> {event?.desc}</div>
                  </div>
                  <div className="card-actions justify-center mx-auto mt-2">
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
