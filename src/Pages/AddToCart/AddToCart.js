import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
const AddToCart = () => {
  const location = useLocation();
  const data = location?.state?.data;
  const data1 = location?.state?.selectedBlankBox;
  console.log('festival :',data1)
  console.log('giftbox selected :',data)

  const [quantity, setQuantity] = useState(1);
  const [tax, setTax] = useState(0);
  const [discount, setDiscount] = useState(0);

  const total = data?.price * quantity;
  const includeTax = (total * tax) / 100;
  const grandTotal = total + includeTax - discount;

  return (
    <div className="p-12">
      <h2 className="text-2xl font-bold text-center">My Cart</h2>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* <div className="divider"></div> */}
        <div className="flex flex-col lg:flex-row lg:gap-12 p-4 lg:p-12 col-span-2">
          <div className="flex justify-center">
            <img
              className="hidden lg:block"
              src={`http://localhost:5001/${data?.image}`}
              style={{ width: "200px" }}
            />
            <img
              className="block lg:hidden"
              src={`http://localhost:5001/${data?.image}`}
              style={{ width: "100px" }}
            />
          </div>
          <div className="col-12 col-lg-6 d-flex justify-content-center pe-4 flex-row pt-3 pt-lg-0">
            <div className="flex justify-between gap-8">
              <div>
                <p className="text-xl">{data?.name}</p>
                <p className="mb-4 hidden lg:block">{data?.desc}</p>
              </div>

              <div>
                <h4 className="text-xl fony-bold">Price</h4>
                <p className="text-yellow-500 font-bold"> ¥{data?.price}</p>
              </div>
              <div>
                <label className="mr-2">Quantity</label>
                <input
                  type="number"
                  defaultValue={quantity}
                  onChange={(e) => setQuantity(+e.target.value)}
                  placeholder="Quantity"
                  className="input input-bordered mb-2 w-16 h-8 rounded-none focus:border-none "
                />
              </div>
              <div className="">
                <h4 className="text-xl fony-bold">Total</h4>
                <p className="text-yellow-500 font-bold"> ¥{total}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 py-6 pl-6 w-[300px]">
          <p className="font-bold">Total: ¥{total}</p>
          <div className=" my-2">
            <label className="font-bold mr-12"> Tax</label>
            <input
              type="number"
              defaultValue={tax}
              onChange={(e) => setTax(+e.target.value)}
              placeholder="tax"
              className="input input-bordered mb-2 w-[100px] h-8 rounded-none focus:border-none "
            />
            <span className="font-bold ml-1">%</span>
          </div>
          <div className="">
            <label className="font-bold mr-1">Discount:</label>
            <input
              type="number"
              defaultValue={discount}
              onChange={(e) => setDiscount(+e.target.value)}
              placeholder="Discount"
              className="input input-bordered mb-2 w-[100px] h-8 rounded-none focus:border-none "
            />
          </div>
          <p className="my-2 font-bold">
            {" "}
            Grand Total: ¥{grandTotal.toFixed(2)}
          </p>
          <button className="btn bg-yellow-900 hover:bg-yellow-900 border-none px-6 block m-auto mt-6">
            CheckOut
          </button>
        </div>
      </div>
     <div>
      <h3 className="font-bold">Your Chosen Box</h3>
          <div >
          <img
            className="hidden lg:block"
            src={`http://localhost:5001/${data1?.image}`}
            style={{ width: "150px" }}
          />
          <img
            className="block lg:hidden"
            src={`http://localhost:5001/${data1?.image}`}
            style={{ width: "100px" }}
          />
        </div>
      
     </div>
    </div>
  );
};

export default AddToCart;
