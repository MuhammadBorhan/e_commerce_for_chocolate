import React from "react";
import { useGetAllRegionQuery } from "../../features/api/regionApi";

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
                    {region?.district?.map((district) => (
                      <a>{district}, </a>
                    ))}
                  </td>
                  <td>{region?.region}</td>
                  <td>Blue</td>
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
