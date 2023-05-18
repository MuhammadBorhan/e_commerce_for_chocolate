import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { useGetAllEventQuery } from "../../../features/api/eventApi";

const EventList = () => {
  const { data } = useGetAllEventQuery();
  const events = data?.data;
  return (
    <div className="p-8">
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>SL. No</th>
              <th>Title</th>
              <th>Date</th>
              <th>Region</th>
              <th>District</th>
              <th>G_meet Link</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {events?.map((even, index) => (
              <tr>
                <th>{index + 1}</th>
                <th>{even?.title}</th>
                <th>{new Date(even.dateTime).toLocaleString()}</th>
                <th>{even?.region}</th>
                <th>{even?.district}</th>
                <th className="text-blue-500 underline font-bold text-sm">
                  {even?.gmeet}
                </th>

                <td>{even?.status}</td>
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventList;
