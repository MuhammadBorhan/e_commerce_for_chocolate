import React from "react";
import { sameDayDeliveryData } from "../data";
import { Link } from "react-router-dom";
import DeliveryGiftsDetails from "./DeliveryGiftsDetails";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const DeliveryGifts = () => {
  const dispatch = useDispatch();
  return (
    <div className="p-4 lg:p-12">
      <p className="pb-6 text-xl lg:text-2xl font-bold">
        Same Day Delivery Gifts ({sameDayDeliveryData.length} Products)
      </p>
      <div className="">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6">
          {sameDayDeliveryData.map((datas) => {
            const { image, name, price } = datas;
            return (
              <div className="shadow-lg">
                <div class="p-2">
                  <Link to={`/delivery/${name}`} state={datas} className="">
                    <img src={image} class="w-full" alt="..." />
                  </Link>
                  <div class="h-[100px] py-4">
                    <h6 class="card-title">{name}</h6>
                    <h4 class="text-orange-500 font-bold">{price}$</h4>
                  </div>
                  <button
                    onClick={() => dispatch(addToCart(datas))}
                    className="bg-[#9A583B] text-white font-bold px-4 py-1 mx-auto block mb-2 rounded"
                  >
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

export default DeliveryGifts;
