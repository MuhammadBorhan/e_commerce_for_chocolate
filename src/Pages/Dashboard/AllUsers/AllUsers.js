import React from "react";
import { useGetAllUserQuery } from "../../../features/api/loginApi";
import {
  AiOutlineDelete,
  AiTwotoneEdit,
  AiTwotoneDelete,
} from "react-icons/ai";

const AllUsers = () => {
  const { data, isLoading } = useGetAllUserQuery();
  const users = data?.data;

  const deleteUser = (id) => {
    const confirm = window.confirm("Are you want do delete?");
    if (confirm) {
      fetch(`http://localhost:5000/api/v1/user/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  };
  if (isLoading) {
    return (
      <p className="text-red-500 text-center mt-[25%] text-2xl">Loading...</p>
    );
  }
  return (
    <div className="p-8">
      <div className="overflow-x-auto">
        <h2 className="text-xl font-bold mt-2">All User</h2>
        <table className="table w-full mt-2">
          {/* head */}
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>{user.firstName + " " + user.lastName}</td>
                <td>{user.email}</td>
                <td>
                  <button className="px-2 bg-green-600 text-white rounded-full">
                    {user.role}
                  </button>
                </td>
                <td>
                  {" "}
                  <button
                    onClick={() => deleteUser(user._id)}
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
  );
};

export default AllUsers;
