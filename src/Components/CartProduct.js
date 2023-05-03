import React from "react";

const CartProduct = ({ data }) => {
  const { id, name, image, price, quantity, desc, attiribute } = data;
  return (
    <div>
      <div className="shadow-lg">
        <div class="p-2">
          <img src={image} class="w-full" alt="..." />
          <div class="h-[100px] py-4">
            <h6 class="card-title">{name}</h6>
            <h4 class="text-orange-500 font-bold">{price}$</h4>
            <h4 class=" font-bold">Quantity: {quantity}</h4>
          </div>
          <button className="bg-[red] text-white font-bold px-4 py-1 mt-6 mx-auto block mb-2 rounded">
            Remove From Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
