import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";

import "react-toastify/dist/ReactToastify.css";
import { useGetAllBrandsQuery } from "../../../features/api/brandApi";
import { useRemoveBrandMutation } from "../../../features/api/brandApi";
import { MdUpdate } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

const BrandList = () => {
  const { data } = useGetAllBrandsQuery();
  const brands = data?.data;

  const [removeBrand] = useRemoveBrandMutation();

  const handleDelete = (id) => {
    const confirm = window.confirm("Are You Sure?");
    if (confirm) {
      removeBrand(id);
    }
  };

  return (
    <div className="p-8">
      <div className="overflow-x-auto">
        <h2 className="text-xl font-bold mt-2">All Brand</h2>
        <table className="table w-full mt-2">
          {/* head */}
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Name</th>
              <th>Logo</th>
              <th>Cover Image</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {brands?.map((brand, index) => {
              return (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{brand?.name}</td>
                  <td>
                    <img src={brand?.logo} className="w-16" />
                  </td>
                  <td>
                    <img src={brand?.image} className="w-48" />
                  </td>

                  <td>
                    {" "}
                    <button
                      className="text-blue-500"
                      style={{ width: "40px", fontSize: "25px" }}
                    >
                      <FaEdit />
                    </button>
                    <button
                      onClick={() => handleDelete(brand?._id)}
                      className="text-red-500"
                      style={{ width: "40px", fontSize: "25px" }}
                    >
                      <AiTwotoneDelete />
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

export default BrandList;
