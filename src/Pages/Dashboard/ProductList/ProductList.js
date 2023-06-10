import React, { useEffect, useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import {
  useGetAllProductsQuery,
  useRemoveProductMutation,
} from "../../../features/api/productsApi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import DashBoardMenu from "../../../Components/DashBoardMenu/DashBoardMenu";

const ProductList = () => {
  const { data } = useGetAllProductsQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const products = data?.data;

  const [removeProduct] = useRemoveProductMutation();

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you want do delete?");
    if (confirm) {
      removeProduct(id);
      toast.success("Successfully Delete");
    }
  };

  return (
    <div>
      <DashBoardMenu></DashBoardMenu>
      <div className="p-8">
        <div className="overflow-x-auto">
          <h2 className="text-xl font-bold mt-2">All Products</h2>
          <table className="table w-full mt-2">
            {/* head */}
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Color</th>
                <th>Price</th>
                <th>Brand</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products?.map((product, i) => (
                <tr key={product._id}>
                  <th>{i + 1}</th>
                  <th>
                    {" "}
                    <img
                      src={`http://localhost:5001/${product?.image}`}
                      className="w-16"
                    />{" "}
                  </th>
                  <td>{product?.name}</td>
                  <td>{product?.color}</td>
                  <td>¥{product?.price}</td>
                  <td>{product?.brand}</td>
                  <td className="">
                    <Link to={`/dashboard/updateproductlist/${product?._id}`}>
                      <button className="px-2 bg-blue-600 text-white mr-2">
                        Edit
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(product?._id)}
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

export default ProductList;
