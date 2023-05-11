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
  // console.log(user);
  if (isLoading) {
    return <p className="text-red-500 text-center ">Loading...</p>;
  }
  const deleteUser = (id) => {
    alert("Are you want to delete?");
    console.log(id);
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <h2 className="text-xl font-bold mt-2">All User</h2>
        <table className="table w-full mt-2">
          {/* head */}
          <thead>
            <tr>
              <th>Index</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <button
                  onClick={() => deleteUser(user._id)}
                  className="text-red-500 flex justify-center"
                  style={{ width: "40px", fontSize: "25px" }}
                >
                  {" "}
                  <AiTwotoneDelete></AiTwotoneDelete>
                  <AiTwotoneEdit></AiTwotoneEdit>
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
