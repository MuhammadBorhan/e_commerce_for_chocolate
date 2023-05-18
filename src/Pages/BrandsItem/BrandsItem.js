import { useLocation } from "react-router-dom";
import { useGetAllGiftBoxQuery } from "../../features/api/GiftBoxApi";

const BrandsItem = () => {
  const location = useLocation();
  const brands = location?.state;
  // console.log(brands);

  const { data: getGiftBox } = useGetAllGiftBoxQuery();
  const allGiftbox = getGiftBox?.data;
  // console.log(allGiftbox);

  const selectGiftBox = allGiftbox?.filter(
    (giftBox) => giftBox?.brandName === brands?.name
  );
  const findSelectGiftBox = selectGiftBox?.find((giftBox) => giftBox);

  // const selectedProducts = products?.filter((brandItem) => {
  //   return (
  //     brandItem?.brandName === brands?.name &&
  //     brandItem?.district === brands?.district
  //   );
  // });

  return (
    <div className="p-4 lg:p-12">
      {/* brand cover image */}
      <div class="bg-cover bg-center ...">
        <figure>
          <img
            src={brands?.image}
            alt={brands?.name}
            className="lg:h-[250px] w-full object-center"
          />
        </figure>
      </div>
      {/* search bar */}
      <div className="relative hidden lg:block text-gray-600 w-[510px] mx-auto my-16 border shadow rounded shadow-gray-300">
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
      </div>
      <div>
        {allGiftbox?.map((box, index) => (
          <div
            key={box?._id}
            className={`flex items-center justify-between p-8 gap-x-10 my-4 w-full lg:w-[40%] m-auto ${
              index % 2 === 1 ? "flex-row-reverse" : ""
            }`}
            style={{ boxShadow: "1px 1px 1px 2px lightblue" }}
          >
            <div>
              <img src={box?.boxImage} className="w-20 lg:w-40 h-20 lg:h-40" />
            </div>
            <div>{box?.boxName}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsItem;
