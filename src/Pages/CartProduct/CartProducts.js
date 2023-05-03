import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../../Components/CartProduct";

const CartProducts = () => {
  const cart = useSelector((state) => state?.cart?.cart);
  console.log(cart);
  return (
    <div className="p-4 lg:p-12">
      <h1 className="text-xl font-bold mb-4">
        Total Cart Products {cart?.length}
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-6">
        {cart?.map((data, index) => (
          <CartProduct key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default CartProducts;
