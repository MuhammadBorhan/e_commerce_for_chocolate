import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";

import "react-toastify/dist/ReactToastify.css";
import { useGetAllBrandsQuery } from "../../../features/api/brandApi";
import { useRemoveBrandMutation } from "../../../features/api/brandApi";
import { MdUpdate } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import DashBoardMenu from "../../../Components/DashBoardMenu/DashBoardMenu";
import {
  useGetAllBlankBoxQuery,
  useRemoveBlankBoxMutation,
} from "../../../features/api/blankBoxApi";

const BlankBoxList = () => {
  // Blank Box
  const { data } = useGetAllBlankBoxQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const blankBox = data?.data;

  const [removeBlankBox] = useRemoveBlankBoxMutation();

  const handleDelete = (id) => {
    const confirm = window.confirm("Are You Sure?");
    if (confirm) {
      removeBlankBox(id);
    }
  };

  return (
    <div>
      <DashBoardMenu></DashBoardMenu>
      <div className="p-8">
        <div className="overflow-x-auto">
          <h2 className="text-xl font-bold mt-2">All Blank Box</h2>
          <table className="table w-full mt-2">
            {/* head */}
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Name</th>
                <th>Festival</th>
                <th>Image</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {blankBox?.map((brand, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{brand?.name}</td>
                    <td>{brand?.festival}</td>

                    <td>
                      <img
                        src={`https://andy-chocolate-productions.up.railway.app/${brand?.image}`}
                        className="w-32"
                      />
                    </td>

                    <td>
                      {" "}
                      <button
                        className="text-blue-500"
                        style={{ width: "40px", fontSize: "25px" }}
                      >
                        <Link to={`/dashboard/updateBlankBox/${brand?._id}`}>
                          <FaEdit />
                        </Link>
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
    </div>
  );
};

export default BlankBoxList;
