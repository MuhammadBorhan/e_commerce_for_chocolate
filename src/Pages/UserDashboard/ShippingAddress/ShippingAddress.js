import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useGetUserQuery } from "../../../features/api/loginApi";
import axios from "axios";

const ShippingAddress = () => {
  const { data } = useGetUserQuery();
  const user = data?.data;

  const [addresses, setAddresses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5003/api/v1/orders")
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
                <th>Name</th>
                <th>Local Address</th>
                <th>Region & District</th>
                <th>State & Zip</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {addresses?.map((address, i) => (
                <tr key={address._id}>
                  <th>{i + 1}</th>
                  <td>
                    {address?.firstName} {address?.lastName}
                  </td>
                  <td>{address?.address}</td>
                  <td>
                    {address?.region ? address?.region : "Not Found"}
                    {address?.district
                      ? ", " + address?.district
                      : ", Not Found"}
                  </td>
                  <td>
                    {address?.state ? address?.state : "Not Found"}
                    {address?.zip ? ", " + address?.zip : ", Not Found"}
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
                      className="px-2 bg-red-600 text-white hidden"
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
