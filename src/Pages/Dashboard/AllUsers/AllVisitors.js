import React, { useEffect, useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import DashBoardMenu from "../../../Components/DashBoardMenu/DashBoardMenu";

const AllVisitors = () => {
  const [visitors, setVisitors] = useState([]);
  const unique = [...new Map(visitors.map((v) => [v.isp, v])).values()];

  useEffect(() => {
    fetch("http://localhost:5001/api/v1/visitors")
      .then((res) => res.json())
      .then((data) => setVisitors(data?.data));
  }, []);

  return (
    <div>
      <DashBoardMenu></DashBoardMenu>
      <div className="p-8">
        <div className="overflow-x-auto">
          <h2 className="text-xl font-bold mt-2">All User</h2>
          <table className="table w-full mt-2">
            {/* head */}
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Country</th>
                <th>City</th>
                <th>Isp</th>
                <th>IP</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {unique?.map((visitor, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{visitor?.country}</td>
                  <td>{visitor?.city}</td>
                  <td>{visitor?.isp}</td>
                  <td>{visitor?.ip}</td>
                  <td>
                    {" "}
                    <button
                      className="text-red-500 flex justify-center"
                      style={{ width: "40px", fontSize: "25px" }}
                    >
                      <AiTwotoneDelete></AiTwotoneDelete>
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

export default AllVisitors;
