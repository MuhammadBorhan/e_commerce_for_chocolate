import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import {
  useGetAllEventQuery,
  useRemoveEventMutation,
} from "../../../features/api/eventApi";
import { toast } from "react-toastify";
import { useGetUserQuery } from "../../../features/api/loginApi";
import { Link } from "react-router-dom";

const EventList = () => {
  const { data } = useGetAllEventQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const events = data?.data;
  const [removeEvent] = useRemoveEventMutation();

  const { data: getMe } = useGetUserQuery();
  const user = getMe?.data;

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you want do delete?");
    if (confirm) {
      removeEvent(id);
      toast.success("Delete Successfull!!");
    }
  };
  return (
    <div className="p-8">
      <h1 className="mb-4 text-blue-500 font-bold">Event List</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>SL. No</th>
              <th>Image</th>
              <th>Title</th>
              <th>Date</th>
              <th>Region</th>
              <th>District</th>
              <th>G_meet Link</th>
              <th>Brand</th>
              <th>Status</th>
              <th>Host</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {events?.map((even, index) => (
              <tr>
                <th>{index + 1}</th>
                <th>
                  <img
                    src={`http://localhost:5000/${even?.image}`}
                    className="w-16"
                  />
                </th>
                <th>{even?.title}</th>
                <th>{new Date(even.dateTime).toLocaleString()}</th>
                <th>{even?.region}</th>
                <th>{even?.district}</th>
                <th className="text-blue-500 underline font-bold text-sm">
                  {even?.gmeet}
                </th>
                <td>{even?.brand}</td>
                <td>{even?.status}</td>
                <td>{user?.firstName}</td>
                <td>
                  <Link
                    to={`/dashboard/updateevent/${even?._id}`}
                    className="text-blue-500"
                  >
                    <button style={{ width: "40px", fontSize: "25px" }}>
                      <FaEdit />
                    </button>
                  </Link>
                  <button
                    onClick={(e) => handleDelete(even?._id)}
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
