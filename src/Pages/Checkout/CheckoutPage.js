import { useState } from "react";
import NextBackButton from "./NextBackButton";
import axios from "axios";
import { toast } from "react-toastify";
import { useGetUserQuery } from "../../features/api/loginApi";
import { v4 as uuidv4 } from "uuid";

const CheckoutPage = ({
  choosegiftBox,
  selectedGiftBox,
  amount,
  quantity,
  selectBox,
}) => {
  const boxName = selectBox?.map((box) => box?.name);

  // genereate order number by uuid
  function generateOrderNumber() {
    const uuid = uuidv4();
    const truncatedOrderNumber = uuid.substr(0, 6);
    return truncatedOrderNumber;
  }
  const orderNumber = generateOrderNumber();

  // get login user email
  const { data, isLoading } = useGetUserQuery();
  const email = data?.data?.email;

  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  const renderStepContent = () => {
    // Shipping Address
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [region, setRegion] = useState();
    const [district, setDistrict] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");

    // payment details
    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiryDate] = useState("");
    const [cvv, setCVV] = useState("");
    const [cod, setCod] = useState("");

    const [term, setTerm] = useState(false);
    const handleChecked = (e) => {
      setTerm(!term);
      if (cod === "Cash on Delivery") {
        setCod("");
      } else {
        setCod("Cash on Delivery");
      }
    };

    const handlePlaceOrder = async () => {
      setStep(step + 1);

      // save order data
      const data = {
        firstName,
        lastName,
        address,
        phone,
        region,
        district,
        state,
        zip,
        cod,
        quantity,
        amount,
        product: choosegiftBox?.name || selectedGiftBox?.name,
        boxName,
        email,
        orderNumber,
      };
      try {
        const response = await axios.post(
          "https://andy-chocolate-productions.up.railway.app/api/v1/orders",
          data
        );
        console.log(response);
        if (response) {
          toast.success(response?.data?.message);
          localStorage.removeItem("checkout");
        }
      } catch (error) {
        toast.error(error.response?.data?.error);
      }
    };
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
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address *"
                className="border-b focus:outline-none"
                required
              />
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number *"
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
              firstName={firstName}
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
            <div className="flex flex-col border-opacity-50">
              <div className="divider">OR</div>
              <label className="label cursor-pointer w-40 mx-auto">
                <span className="label-text">Cash on Delivery</span>
                <input
                  onClick={handleChecked}
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500"
                  checked={term}
                />
              </label>
            </div>
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
              Step 3: Review Your Order
            </h2>
            <div>
              <h2 className="text-xl font-extralight">Order Summary</h2>
              <div className="py-4">
                <p className="flex justify-between pb-2">
                  <span className="">Product: </span>{" "}
                  <span className="">
                    {choosegiftBox?.name || selectedGiftBox?.name}
                  </span>
                </p>
                <p className="flex justify-between py-2">
                  <span className="">Price:</span>{" "}
                  <span className="text-2xl ">
                    ${choosegiftBox?.price || selectedGiftBox?.price}
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
                <div className="flex justify-between gap-x-2 py-4">
                  <div className="flex-1">
                    <h2 className="font-bold">Shipping Info</h2>
                    {firstName} {lastName} <br />
                    {phone} <br />
                    {region ? region + "," : ""}{" "}
                    {district ? district + "," : ""}
                  </div>
                  <div className="flex-1">
                    <h2 className="font-bold">Payment Details</h2>
                    {/* {`${cardName}, ${cardNumber},`}
                    {` ${expiry}, ${cvv}`} */}
                    {cod}
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
                Thank You {firstName} {lastName} For Your Order.
              </h3>
              <p className="text-justify" style={{ lineHeight: "30px" }}>
                We have emailed your order confirmation. If you have not
                received your order confirmation mail, please contact us on this{" "}
                <b>+8801620101010</b> or by
                <b> chocolate@gmail.com</b> <br /> Thank You
              </p>
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
