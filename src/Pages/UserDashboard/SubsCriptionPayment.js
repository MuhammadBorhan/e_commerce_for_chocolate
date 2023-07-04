import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useGetUserQuery } from "../../features/api/loginApi";

const SubsCriptionPayment = ({ pcg }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const { data } = useGetUserQuery();
  const user = data?.data;

  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCVV] = useState("");
  const name = pcg?.name;
  const handleConfirm = async () => {
    try {
      const data = {
        cardName,
        cardNumber,
        expiryDate,
        cvv,
        name,
        userName: user?.firstName + " " + user?.lastName,
        email: user?.email,
      };
      const response = await axios.post(
        `https://andy-chocolate-productions.up.railway.app/api/v1/subscribe`,
        data
      );
      if (response) {
        setIsOpen(false);
        document.body.style.overflow = "auto";
        reset();
      }
    } catch (error) {
      toast.error(error?.response);
    }
  };
  return (
    <div>
      <button
        onClick={openModal}
        className="px-6 py-2 text-white font-bold rounded bg-[#9A583B]"
      >
        Subscribe
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-md lg:w-[600px] lg:mt-12">
            <div className="card bg-base-100 overflow-auto shadow-xl mb-12">
              <div className="card-body">
                <div className="text-center">
                  <h2 className="text-xl font-bold">
                    Pay for your {pcg?.name} Subscription
                  </h2>
                </div>
                <form className="grid grid-cols-1 md:grid-cols-2 gap-12 my-6">
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
                    value={expiryDate}
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
                <button
                  onClick={() => handleConfirm()}
                  className="bg-green-600 text-white font-bold px-4 py-1 rounded block mx-auto"
                >
                  Confirm
                </button>
              </div>
            </div>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubsCriptionPayment;
