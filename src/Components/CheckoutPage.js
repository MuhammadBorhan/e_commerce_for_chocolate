import { useState } from "react";

const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const [shippingAddress, setShippingAddress] = useState("");
  const [paymentDetails, setPaymentDetails] = useState("");

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const handlePlaceOrder = () => {
    setStep(step + 1);
    console.log(shippingAddress, paymentDetails);
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h2>Step 1: Shipping Address</h2>
            <form>
              {/* Your shipping address form inputs */}
              <input
                type="text"
                value={shippingAddress}
                onChange={(e) => setShippingAddress(e.target.value)}
                placeholder="Shipping Address"
              />
            </form>
          </div>
        );
      case 2:
        return (
          <div>
            <h2>Step 2: Payment Details</h2>
            <form>
              {/* Your payment details form inputs */}
              <input
                type="text"
                value={paymentDetails}
                onChange={(e) => setPaymentDetails(e.target.value)}
                placeholder="Payment Details"
              />
            </form>
          </div>
        );
      case 3:
        return (
          <div>
            <h2>Step 3: Review Your Order</h2>
            <div>
              <h3>Shipping Information:</h3>
              <p>
                {shippingAddress} {paymentDetails}
              </p>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <h2>Order Success</h2>
            <div>
              <h3>Thank You For Your Order</h3>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderStepContent()}
      <div>
        {step > 1 && (
          <button
            onClick={handlePrevStep}
            className={`mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              step > 3 && "hidden"
            }`}
          >
            Back
          </button>
        )}
        {step < 3 ? (
          <button
            onClick={handleNextStep}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        ) : (
          <button
            onClick={handlePlaceOrder}
            className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${
              step > 3 && "hidden"
            }`}
          >
            Place Order
          </button>
        )}
      </div>
    </div>
  );
};

export default CheckoutPage;
