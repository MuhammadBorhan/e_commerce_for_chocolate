import React from "react";
import {
  useGetAllRegionQuery,
  useRemoveRegionMutation,
} from "../../../features/api/regionApi";
import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import DashBoardMenu from "../../../Components/DashBoardMenu/DashBoardMenu";

const RegionList = () => {
  const { data } = useGetAllRegionQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const regions = data?.data;

  const [deleteRegion] = useRemoveRegionMutation();
  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure?");
    if (confirm) {
      deleteRegion(id);
      toast.success("Delete Successfull!!!");
    }
  };
  return (
    <div>
      <DashBoardMenu></DashBoardMenu>
      <div className="p-8">
        <h1 className="mb-4 text-blue-500 font-bold">Region List</h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>District</th>
                <th>Region</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {regions?.map((region, index) => {
                return (
                  <tr>
                    <th>{index + 1}</th>
                    <td>
                      <select className="  rounded-none focus:border-none ">
                        {region?.district?.map((district, index) => (
                          <option key={index}>{district}</option>
                        ))}
                      </select>
                    </td>
                    <td>{region?.region}</td>
                    <td>
                      <Link to={`/dashboard/updateregionlist/${region?._id}`}>
                        <button
                          className="text-blue-500"
                          style={{ width: "40px", fontSize: "25px" }}
                        >
                          <FaEdit />
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(region?._id)}
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

export default RegionList;
