import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { useGetAllBlankBoxQuery } from "../../features/api/blankBoxApi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const AddToCart = () => {
  const location = useLocation();
  const selectedGiftBox = location?.state?.selectedGiftBox;
  const data = location?.state?.data;
  const data1 = location?.state?.selectedBlankBox;

  const [quantity, setQuantity] = useState(1);
  const [tax, setTax] = useState(0);
  const [discount, setDiscount] = useState(0);

  const total = (data?.price || selectedGiftBox?.price) * quantity;
  const includeTax = (total * tax) / 100;
  const grandTotal = total + includeTax - discount;

  // get All Blank Box
  const { data: getAllBlankBox } = useGetAllBlankBoxQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const allBlankBox = getAllBlankBox?.data;

  // handle festival
  const [matchFestival, setMatchFestival] = useState([]);
  const handleFestival = (festival) => {
    const matchedFestival = allBlankBox?.filter(
      (f) => f?.festival === festival
    );
    setMatchFestival(matchedFestival);
    // setSelectedBlankBox(null);
  };

  const [selectedBox, setSelectedBox] = useState([]);
  const chooseGiftBox = (box) => {
    const isBoxExists = selectedBox?.some((item) => item.name === box.name);

    if (!isBoxExists) {
      setSelectedBox([...selectedBox, box]);
    }
  };

  const handleRemove = (box) => {
    const rest = selectedBox?.filter((item) => item?.name !== box?.name);
    setSelectedBox(rest);
  };

  return (
    <div className="p-12">
      <h2 className="text-2xl font-bold text-center">My Cart</h2>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* <div className="divider"></div> */}
        <div className="flex flex-col lg:flex-row lg:gap-12 p-4 lg:p-12 col-span-2">
          <div className="flex justify-center">
            <img
              className="hidden lg:block"
              src={`http://localhost:5000/${
                data?.image || selectedGiftBox?.image
              }`}
              style={{ width: "200px" }}
            />
            <img
              className="block lg:hidden"
              src={`http://localhost:5000/${
                data?.image || selectedGiftBox?.image
              }`}
              style={{ width: "100px" }}
            />
          </div>
          <div className="">
            <div className="flex justify-between gap-8">
              <div>
                <p className="text-xl">{data?.name || selectedGiftBox?.name}</p>
                <p className="mb-4 hidden lg:block">
                  {data?.desc || selectedGiftBox?.desc}
                </p>
              </div>

              <div>
                <h4 className="text-xl fony-bold">Price</h4>
                <p className="text-yellow-500 font-bold">
                  {" "}
                  ¥{data?.price || selectedGiftBox?.price}
                </p>
              </div>
              <div>
                <label className="mr-2">Quantity</label>
                <input
                  type="number"
                  defaultValue={quantity}
                  onChange={(e) => setQuantity(+e.target.value)}
                  placeholder="Quantity"
                  className="input input-bordered mb-2 w-16 h-8 rounded-none focus:border-none "
                />
              </div>
              <div className="">
                <h4 className="text-xl fony-bold">Total</h4>
                <p className="text-yellow-500 font-bold"> ¥{total}</p>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-1">
              {selectedBox?.map((box) => (
                <div>
                  <img
                    src={`http://localhost:5000/${box?.image}`}
                    className="w-12 h-12"
                    onClick={() => handleRemove(box)}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-100 py-6 pl-6 w-[300px]">
          <p className="font-bold">Total: ¥{total}</p>
          <div className=" my-2">
            <label className="font-bold mr-12"> Tax</label>
            <input
              type="number"
              defaultValue={tax}
              onChange={(e) => setTax(+e.target.value)}
              placeholder="tax"
              className="input input-bordered mb-2 w-[100px] h-8 rounded-none focus:border-none "
            />
            <span className="font-bold ml-1">%</span>
          </div>
          <div className="">
            <label className="font-bold mr-1">Discount:</label>
            <input
              type="number"
              defaultValue={discount}
              onChange={(e) => setDiscount(+e.target.value)}
              placeholder="Discount"
              className="input input-bordered mb-2 w-[100px] h-8 rounded-none focus:border-none "
            />
          </div>
          <p className="my-2 font-bold">
            {" "}
            Grand Total: ¥{grandTotal.toFixed(2)}
          </p>
          <button className="btn bg-yellow-900 hover:bg-yellow-900 border-none px-6 block m-auto mt-6">
            CheckOut
          </button>
        </div>
      </div>

      {data1 && (
        <div>
          <h3 className="font-bold">Your Chosen Box</h3>
          <div>
            <img
              className="hidden lg:block"
              src={`http://localhost:5000/${data1?.image}`}
              style={{ width: "150px" }}
            />
            <img
              className="block lg:hidden"
              src={`http://localhost:5000/${data1?.image}`}
              style={{ width: "100px" }}
            />
          </div>
        </div>
      )}

      <div className="dropdown dropdown-hover">
        <label
          tabIndex={0}
          className="flex items-center bg-yellow-800 py-1 px-2 text-white font-bold"
        >
          Choose Your Festival
          <p className="mt-1 ml-2">
            <IoMdArrowDropdown />
          </p>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu p-2 shadow bg-slate-50 rounded-box w-52 z-1"
        >
          <li>
            <button onClick={() => handleFestival("Birthday")}>
              BirthDay Gift
            </button>
          </li>
          <li>
            <button onClick={() => handleFestival("Marriage")}>
              Marrige Anniversary
            </button>
          </li>
          <li>
            <button onClick={() => handleFestival("Christmas")}>
              Cristmas Gift
            </button>
          </li>
          <li>
            <button onClick={() => handleFestival("Valentine")}>
              Valentine Gift
            </button>
          </li>
        </ul>
      </div>
      <div className="row py-5 px-4 lg:px-12 ">
        {matchFestival.length > 0 && (
          <h4 className="text-center pb-3 text-xl font-bold">
            {matchFestival[0]?.festival} Festival
          </h4>
        )}

        <div className="">
          <Swiper
            loop={true}
            navigation={true}
            keyboard={true}
            slidesPerView={4}
            spaceBetween={2}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination, Navigation, Keyboard]}
            className="gboxswiperr "
          >
            {matchFestival?.map((data, index) => (
              <SwiperSlide
                onClick={() => chooseGiftBox(data)}
                className="gboxswiper-slider py-6"
                key={index}
              >
                <img
                  src={`http://localhost:5000/${data?.image}`}
                  className="w-16 h-16 lg:w-32 lg:h-32 object-cover"
                />
                <p className="text-xs lg:text-sm">{data?.name}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
