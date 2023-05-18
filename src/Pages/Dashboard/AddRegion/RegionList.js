import React from "react";
import { useGetAllRegionQuery } from "../../../features/api/regionApi";
import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";

const RegionList = () => {
  const { data } = useGetAllRegionQuery();
  const regions = data?.data;
  return (
    <div className="p-8">
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
                    <button
                      className="text-blue-500"
                      style={{ width: "40px", fontSize: "25px" }}
                    >
                      <FaEdit />
                    </button>
                    <button
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

export default RegionList;
