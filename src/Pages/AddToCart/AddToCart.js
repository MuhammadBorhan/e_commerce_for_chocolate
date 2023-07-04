import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { useGetAllBlankBoxQuery } from "../../features/api/blankBoxApi";
import { RxCrossCircled } from "react-icons/rx";
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
  // const [newDiscount, setNewDiscount] = useState(0);

  const coupons = [
    {
      _id: 1,
      couponCode: "PBGTY8",
      amount: 10,
    },
    {
      _id: 2,
      couponCode: "SAIFUR02",
      amount: 15,
    },
    {
      _id: 3,
      couponCode: "BORHAN",
      amount: 30,
    },
    {
      _id: 4,
      couponCode: "FAHAD",
      amount: 5,
    },
    {
      _id: 5,
      couponCode: "MESSI",
      amount: 40,
    },
    {
      _id: 6,
      couponCode: "ODD6H",
      amount: 50,
    },
    {
      _id: 7,
      couponCode: "HYDFF",
      amount: 75,
    },
    {
      _id: 8,
      couponCode: "ANDY",
      amount: 100,
    },
  ];
 const handleDiscountCoupon = (coupon)=>{
 const searchCoupon = coupons.find((c)=>c?.couponCode ===coupon )
 setDiscount(searchCoupon)
    
  
}
console.log(discount)

let newDiscount = (discount?.amount)
console.log(newDiscount)
  const total = (data?.price || selectedGiftBox?.price) * quantity;
  const includeTax = (total * tax) / 100;
  const incudeDiscount = (total + includeTax ) * newDiscount / 100;
  const grandTotal = (+total + +includeTax ) - +incudeDiscount

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

  const sendStateToCheckout = {
    selectedBox,
    grandTotal,
    data,
    selectedGiftBox,
    quantity,
  };
  localStorage.setItem("checkout", JSON.stringify(sendStateToCheckout));

  return (
    <div className="p-12">
      <h2 className="text-2xl font-bold text-center">My Cart</h2>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* <div className="divider"></div> */}
        <div className="flex flex-col lg:flex-row lg:gap-12 p-4 lg:p-12 col-span-2">
          <div className="flex justify-center">
            <img
              className="hidden lg:block"
              src={`https://andy-chocolate-productions.up.railway.app/${
                data?.image || selectedGiftBox?.image
              }`}
              style={{ width: "200px" }}
            />
            <img
              className="block lg:hidden"
              src={`https://andy-chocolate-productions.up.railway.app/${
                data?.image || selectedGiftBox?.image
              }`}
              style={{ width: "100px" }}
            />
          </div>
          <div className="mt-4 lg:mt-0">
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

            {/*  selected blank box */}
            <div className="grid grid-cols-6 gap-1">
              {selectedBox?.map((box) => (
                <div className="relative">
                  <img
                    src={`https://andy-chocolate-productions.up.railway.app/${box?.image}`}
                    className="w-12 h-12"
                    onClick={() => handleRemove(box)}
                  />
                  <span
                    onClick={() => handleRemove(box)}
                    className="absolute top-0 right-0 lg:right-7 bg-white bg-opacity-80 rounded-full cursor-pointer text-red-700"
                  >
                    <RxCrossCircled />
                  </span>
                </div>
              ))}
            </div>

            {/* choose your festival for mobile device start*/}
            <div className="dropdown dropdown-hover inline-block lg:hidden mt-6 ml-16">
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

            <div className="row py-5 px-4 lg:px-12 block md:hidden">
              {matchFestival?.length > 0 && (
                <h4 className="text-center pb-3 text-xl font-bold">
                  Select Your {matchFestival[0]?.festival} Festival Box
                </h4>
              )}

              <div className="flex gap-x-2 overflow-auto">
                {matchFestival?.map((data, index) => (
                  <div
                    onClick={() => chooseGiftBox(data)}
                    className="gboxswiper-slider py-6"
                    key={index}
                  >
                    <img
                      src={`https://andy-chocolate-productions.up.railway.app/${data?.image}`}
                      className="w-16 h-16 lg:w-32 lg:h-32 object-cover cursor-pointer"
                    />
                    <p className="text-xs lg:text-sm">{data?.name}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* choose your festival for mobile device end */}
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
              type="text"
              // defaultValue={discount}
              onChange={(e) => handleDiscountCoupon(e.target.value)}
              placeholder="CCode"
              className="input input-bordered mb-2 w-[100px] h-8 rounded-none focus:border-none "
            />
            <span className="font-bold ml-1">%</span>
          </div>
          <p className="my-2 font-bold">
            {" "}
            Grand Total: ¥{grandTotal ?grandTotal.toFixed(2) : +grandTotal}
          </p>
          <Link
            to={"/checkout"}
            state={sendStateToCheckout}
            className="btn bg-yellow-900 hover:bg-yellow-900 border-none w-full text-xl font-bold mt-6"
          >
            <button>Checkout</button>
          </Link>
        </div>
      </div>

      {/* Choose your festival for desktop device */}
      <div className="dropdown dropdown-hover hidden lg:inline-block">
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

      <div className="row py-5 px-4 lg:px-12 hidden md:block">
        {matchFestival?.length > 0 && (
          <h4 className="text-center pb-3 text-xl font-bold">
            Select Your {matchFestival[0]?.festival} Festival Box
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
                  src={`https://andy-chocolate-productions.up.railway.app/${data?.image}`}
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
