import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { useGetUserQuery } from "../../../features/api/loginApi";
import {
  useGetAllProductsQuery,
  useRemoveProductMutation,
} from "../../../features/api/productsApi";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageProducts = () => {
  const { data: me } = useGetUserQuery();
  const getMe = me?.data;

  const { data } = useGetAllProductsQuery();
  const products = data?.data;

  const [removeProduct] = useRemoveProductMutation();

  // const [removeUser] = useRemoveUserMutation();

  const deleteProduct = (id) => {
    const confirm = window.confirm("Are you want do delete?");
    if (confirm) {
      removeProduct(id);
      toast.success("Delete Successfully Done!!");
    }
  };
  const handleDelete = () => {
    console.log("first");
  };
  return (
    <div className="p-8">
      <div className="overflow-x-auto">
        <h2 className="text-xl font-bold mt-2">All Products</h2>
        <table className="table w-full mt-2">
          {/* head */}
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>District</th>
              <th>Brand</th>
              <th>Prodduct</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((product, index) => {
              return (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{product?.district}</td>
                  <td>{product?.brandName}</td>
                  {/* {product?.products?.map((pdct) => (
                    <td>{pdct?.name}</td>
                  ))} */}
                  <td>
                    <select>
                      {product?.products?.map((pdct, index) => (
                        <option key={index}>
                          <button
                            onClick={handleDelete}
                            className="cursor-pointer block"
                          >
                            {" "}
                            {pdct?.name}
                          </button>
                        </option>
                      ))}
                    </select>
                  </td>

                  <td>
                    {" "}
                    <button
                      onClick={() => deleteProduct(product._id)}
                      className="text-red-500 flex justify-center"
                      style={{ width: "40px", fontSize: "25px" }}
                    >
                      <AiTwotoneDelete></AiTwotoneDelete>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
