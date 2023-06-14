import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const AddToCart = () => {
  const location = useLocation();
  const data = location?.state;

  const [quantity, setQuantity] = useState("1");
  const [tax, setTax] = useState("0");
  const [discount, setDiscount] = useState("0");

  const total = data?.price * quantity;
  const includeTax = (total * tax) / 100;
  const grandTotal = total + includeTax - discount;

  return (
    <div className="max-w-[1200px] mx-auto">
      <h2 className="text-2xl font-bold text-center">My Cart</h2>
      <div className="grid grid-cols-3 gap-10 flex items-center">
        {/* <div className="divider"></div> */}
        <div className="flex flex-col lg:flex-row lg:gap-12 p-4 lg:p-12 col-span-2">
          <div className="flex justify-center">
            <img
              className="hidden lg:block"
              src={`http://localhost:5000/${data?.image}`}
              style={{ width: "300px" }}
            />
            <img
              className="block lg:hidden"
              src={`http://localhost:5000/${data?.image}`}
              style={{ width: "100px" }}
            />
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center pe-4 flex-row pt-3 pt-lg-0">
            <div className="flex justify-between gap-8">
              <div>
                <p className="text-xl">{data?.name}</p>
                <p className="mb-4">{data?.desc}</p>
              </div>

              <div>
                <h4 className="text-xl fony-bold">Each</h4>
                <p className="text-yellow-500 font-bold"> ¥{data?.price}</p>
              </div>
              <div>
                <label>Quantity</label>
                <input
                  type="number"
                  defaultValue={quantity}
                  onChange={(e) => setQuantity(+e.target.value)}
                  placeholder="Quantity"
                  className="input input-bordered mb-2 w-3/4 h-8 rounded-none focus:border-none "
                />
              </div>
              <div className="col-12 col-lg-6 d-flex justify-content-center pe-4 flex-row pt-3 pt-lg-0">
                <h4 className="text-xl fony-bold">Total</h4>
                <p className="text-yellow-500 font-bold"> ¥{total}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-100">
          <p>Total: ¥{total}</p>
          <label className=" text-xl"> Tax</label>
          <br></br>
          <input
            type="number"
            defaultValue={tax}
            onChange={(e) => setTax(+e.target.value)}
            placeholder="tax"
            className="input input-bordered mb-2 w-[100px] h-8 rounded-none focus:border-none "
          />
          <span className="font-bold">%</span>
          <br></br>
          <label>Discount</label>
          <br></br>
          <input
            type="number"
            defaultValue={discount}
            onChange={(e) => setDiscount(+e.target.value)}
            placeholder="Discount"
            className="input input-bordered mb-2 w-[100px] h-8 rounded-none focus:border-none "
          />
          <p className="text-2xl font-bold"> Grand Total = ¥{grandTotal}</p>
          <Link to={`/addtocart/${data?.name}`}>
            <button className="btn bg-yellow-900">CheckOut</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddToCart;
