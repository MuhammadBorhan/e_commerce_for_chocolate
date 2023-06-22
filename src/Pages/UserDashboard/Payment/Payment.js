import React, { useEffect, useState } from "react";

const Payment = () => {
  const [payments, setPayments] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5003/api/v1/orders")
      .then((res) => res.json())
      .then((data) => setPayments(data?.data));
  }, []);
  console.log(payments);
  return (
    <div className="p-8">
      <h2 className="text-center">Payment Completed by: Cash On delivery</h2>
    </div>
  );
};

export default Payment;
