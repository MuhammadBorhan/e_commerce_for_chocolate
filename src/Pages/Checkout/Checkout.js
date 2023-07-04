import React, { useState } from "react";
import CheckoutPage from "./CheckoutPage";

const Checkout = () => {
  const getData = JSON.parse(localStorage.getItem("checkout"));
  const choosegiftBox = getData?.data;
  const selectedGiftBox = getData?.selectedGiftBox;
  const quantity = getData?.quantity;
  const amount = getData?.grandTotal;
  const selectBox = getData?.selectedBox;

  const [image, setImage] = useState();
  const handleSelect = (img) => {
    const rest = selectBox?.find((box) => box?.image === img);
    setImage(rest);
  };

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const handleCheckout = () => {
    if (selectedPaymentMethod === "cod") {
      console.log("Order placed with Cash on Delivery");
    } else {
      console.log("Order placed with online payment");
    }
  };

  return (
    <div className="p-12">
      <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 justify-between">
        {/* Left Side */}
        <div className="flex-1">
          <div className="flex gap-x-4 lg:gap-x-12">
            <div className="relative">
              {image ? (
                <img
                  className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]"
                  src={`https://andy-chocolate-productions.up.railway.app/${image?.image}`}
                />
              ) : (
                <img
                  className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px]"
                  src={`https://andy-chocolate-productions.up.railway.app/${
                    choosegiftBox?.image || selectedGiftBox?.image
                  }`}
                />
              )}
              <div
                className={`flex absolute left-0 p-2 bottom-0 gap-2 shadow-md ${
                  selectBox?.length > 0 ? "bg-gray-500" : ""
                } bg-opacity-80 w-full overflow-auto`}
              >
                {selectBox?.map((box) => (
                  <img
                    src={`https://andy-chocolate-productions.up.railway.app/${box?.image}`}
                    className="w-12 h-12 cursor-pointer"
                    onClick={() => handleSelect(box?.image)}
                  />
                ))}
              </div>
            </div>

            <p className="font-bold text-xl lg:text-2xl">Total: ${amount}</p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex-1">
          <CheckoutPage
            choosegiftBox={choosegiftBox}
            selectedGiftBox={selectedGiftBox}
            amount={amount}
            quantity={quantity}
            selectBox={selectBox}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
