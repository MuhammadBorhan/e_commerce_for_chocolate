import { useState } from "react";
import NextBackButton from "./NextBackButton";
import { InputText } from "primereact/inputtext";

const CheckoutPage = ({ giftBox, selectedGiftBox, amount, quantity }) => {
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
    // Shipping Address
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address1, setAddress1] = useState("");
    const [address2, setAddress2] = useState("");
    const [region, setRegion] = useState();
    const [district, setDistrict] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    // payment details
    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiryDate] = useState("");
    const [cvv, setCVV] = useState("");
    switch (step) {
      case 1:
        return (
          <div className="border p-4">
            <h1 className="text-center font-bold text-xl">Checkout</h1>
            <h2 className="font-bold text-center my-2">
              Step 1: Shipping Address
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name *"
                className="border-b focus:outline-none"
                required
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name *"
                className="border-b focus:outline-none"
                required
              />
              <input
                type="text"
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
                placeholder="Address 1 *"
                className="border-b focus:outline-none"
                required
              />
              <input
                type="text"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
                placeholder="Address 2"
                className="border-b focus:outline-none"
                required
              />
              <input
                type="text"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                placeholder="Region *"
                className="border-b focus:outline-none"
                required
              />
              <input
                type="text"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                placeholder="District *"
                className="border-b focus:outline-none"
                required
              />
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="State *"
                className="border-b focus:outline-none"
                required
              />
              <input
                type="text"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="Zip / Postal Code *"
                className="border-b focus:outline-none"
                required
              />
            </form>
            <NextBackButton
              handlePrevStep={handlePrevStep}
              handleNextStep={handleNextStep}
              handlePlaceOrder={handlePlaceOrder}
              step={step}
            />
          </div>
        );
      case 2:
        return (
          <div className="border p-4">
            <h1 className="text-center font-bold text-xl">Checkout</h1>
            <h2 className="font-bold text-center my-2">
              Step 2: Payment Details
            </h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <input
                type="text"
                value={cardName}
                onChange={(e) => setCardName(e.target.value)}
                placeholder="Name on card *"
                className="border-b focus:outline-none"
                required
              />
              <input
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                placeholder="Card Number *"
                className="border-b focus:outline-none"
                required
              />
              <input
                type="text"
                value={expiry}
                onChange={(e) => setExpiryDate(e.target.value)}
                placeholder="Expiry Date *"
                className="border-b focus:outline-none"
                required
              />
              <input
                type="text"
                value={cvv}
                onChange={(e) => setCVV(e.target.value)}
                placeholder="CVV *"
                className="border-b focus:outline-none"
                required
              />
            </form>
            <NextBackButton
              handlePrevStep={handlePrevStep}
              handleNextStep={handleNextStep}
              handlePlaceOrder={handlePlaceOrder}
              step={step}
            />
          </div>
        );
      case 3:
        return (
          <div className="border p-4 max-w-sm m-auto">
            <h1 className="text-center font-bold text-xl">Checkout</h1>
            <h2 className="font-bold text-center my-2">
              Step 3: Your Review Order
            </h2>
            <div>
              <h2 className="text-xl font-extralight">Order Summary</h2>
              <div className="py-4">
                <p className="flex justify-between pb-2">
                  <span className="">Product: </span>{" "}
                  <span className="">
                    {giftBox?.name || selectedGiftBox?.name}
                  </span>
                </p>
                <p className="flex justify-between py-2">
                  <span className="">Price:</span>{" "}
                  <span className="text-2xl ">
                    ${giftBox?.price || selectedGiftBox?.price}
                  </span>
                </p>
                <p className="flex justify-between">
                  <span className="">Quantity:</span>{" "}
                  <span className="">{quantity} Pcs</span>
                </p>
                <p className="flex justify-between py-2">
                  <span className="">Shipping:</span>{" "}
                  <span className="">Free</span>
                </p>
                <p className="flex justify-between">
                  <span className="">Total:</span>{" "}
                  <span className="text-xl ">${amount}</span>
                </p>
                <div className="flex justify-between py-4">
                  <div className="flex-1">
                    <h2 className="font-bold">Shipping Info</h2>
                    {`${firstName} ${lastName}`}
                    {`${zip}, ${state}, ${district}, ${region}`}
                  </div>
                  <div className="flex-1">
                    <h2 className="font-bold">Payment Details</h2>
                    {`${cardName}, ${cardNumber},`}
                    {` ${expiry}, ${cvv}`}
                  </div>
                </div>
              </div>
            </div>
            <NextBackButton
              handlePrevStep={handlePrevStep}
              handleNextStep={handleNextStep}
              handlePlaceOrder={handlePlaceOrder}
              step={step}
            />
          </div>
        );
      case 4:
        return (
          <div>
            <h2 className="text-xl font-bold">Order Success</h2>
            <div>
              <h3>
                Thank You {firstName} {lastName} For Your Order
              </h3>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div>{renderStepContent()} </div>;
};

export default CheckoutPage;