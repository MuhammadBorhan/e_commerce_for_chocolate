import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShippingAddress = () => {
  const [addresses, setAddresses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/orders")
      .then((res) => res.json())
      .then((data) => setAddresses(data?.data));
  }, []);
  return (
    <div>
      <div className="p-8">
        <div className="overflow-x-auto">
          <h2 className="text-xl font-bold mt-2">Your Shipping Address</h2>
          <table className="table w-full mt-2">
            {/* head */}
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Selected Box</th>
                <th>Name</th>
                <th>Local Address</th>
                <th>Region & District</th>
                <th>State & Zip</th>
                {/* <th>Brand</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {addresses?.map((address, i) => (
                <tr key={address._id}>
                  <th>{i + 1}</th>
                  {/* <th>
                    {" "}
                    <img
                      src={`http://localhost:5000/${product?.image}`}
                      className="w-16"
                    />{" "}
                  </th> */}
                  <td>
                    <select className="  rounded-none focus:border-none ">
                      {address?.boxName?.map((box, index) => (
                        <option key={index}>{box}</option>
                      ))}
                    </select>
                  </td>
                  <td>
                    {address?.firstName} {address?.lastName}
                  </td>
                  <td>
                    {address?.address1},{address?.address2}
                  </td>
                  <td>
                    {address?.region},{address?.district}
                  </td>
                  <td>
                    {address?.state},{address?.zip}
                  </td>
                  <td className="">
                    <Link
                      to={`/user/dashboard/shipping-address/${address?._id}`}
                    >
                      <button className="px-2 bg-blue-600 text-white mr-2">
                        Edit
                      </button>
                    </Link>
                    <button
                      //   onClick={() => handleDelete(product?._id)}
                      className="px-2 bg-red-600 text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ShippingAddress;
