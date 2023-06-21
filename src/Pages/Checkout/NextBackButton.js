import React from "react";

const NextBackButton = ({
  handlePrevStep,
  handleNextStep,
  handlePlaceOrder,
  step,
  firstName,
}) => {
  return (
    <div className="">
      {step > 1 && (
        <button
          onClick={handlePrevStep}
          className={` bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded absolute ${
            step > 3 && "hidden"
          }`}
        >
          Back
        </button>
      )}
      {step < 3 ? (
        <button
          onClick={handleNextStep}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block ml-auto"
        >
          Next
        </button>
      ) : (
        <button
          onClick={handlePlaceOrder}
          className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded block ml-auto ${
            step > 3 && "hidden"
          }`}
        >
          Place Order
        </button>
      )}
    </div>
  );
};

export default NextBackButton;
