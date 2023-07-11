import React, { useState } from "react";
import {
  useGetAllUserQuery,
  useGetUserQuery,
  useRemoveUserMutation,
} from "../../../features/api/loginApi";
import { AiTwotoneDelete } from "react-icons/ai";
import DashBoardMenu from "../../../Components/DashBoardMenu/DashBoardMenu";
import DataTable from "react-data-table-component";

const AllUsers = () => {
  const { data, isLoading } = useGetAllUserQuery();
  const users = data?.data;

  const { data: me } = useGetUserQuery();
  const getMe = me?.data;

  const [removeUser] = useRemoveUserMutation();
  const [searchText, setSearchText] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  const deleteUser = (id) => {
    const confirm = window.confirm("Are you want do delete?");
    if (confirm) {
      removeUser(id);
    }
  };
  if (isLoading) {
    return (
      <p className="text-red-500 text-center mt-[25%] text-2xl">Loading...</p>
    );
  }

  const handleSort = (column, direction) => {
    setSortColumn(column.selector);
    setSortDirection(direction);
  };

  const filteredUsers = searchText
    ? users.filter((user) =>
        user?.firstName.toLowerCase().includes(searchText.toLowerCase())
      )
    : users;

  const sortedUsers =
    sortColumn && sortDirection
      ? [...filteredUsers].sort((a, b) => {
          if (sortDirection === "asc") {
            return a[sortColumn] > b[sortColumn] ? 1 : -1;
          } else if (sortDirection === "desc") {
            return a[sortColumn] < b[sortColumn] ? 1 : -1;
          }
          return 0;
        })
      : filteredUsers;

  const columns = [
    {
      name: "Sl No.",
      selector: (row, index) => index + 1,
      sortable: false,
    },

    {
      name: "User Name",
      cell: row=>(
        <>
        {row?.firstName +
          " " +
          (row?.lastName ? row?.lastName : "")}
          </>
      ),
      sortable: true,
    },
    {
      name: "Email",
      selector: "email",
      sortable: true,
    },
    {
      name: "Role",
      cell: (row) => (
        <button className="px-2 bg-green-600 text-white rounded-full">
          {row?.role}
        </button>
      ),
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          {getMe?.role === "admin" && (
            <button
              onClick={() => deleteUser(row?._id)}
              className="text-red-500 flex justify-center"
              style={{ width: "40px", fontSize: "25px" }}
            >
              <AiTwotoneDelete></AiTwotoneDelete>
            </button>
          )}
        </>
      ),
      sortable: false,
    },
  ];

  const sortIconStyles = {
    base: "mr-1",
    sortNone: "hidden",
    sortAsc: "text-green-500",
    sortDesc: "text-red-500",
  };

  return (
    <div>
      <DashBoardMenu></DashBoardMenu>
      <div className="p-8">
        <div className="overflow-x-auto">
          <h2 className="text-xl font-bold mt-2">All Users</h2>
          <div className="text-end">
            <input
              type="text"
              placeholder="Search..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className=" mb-4 px-4 py-2 border border-gray-300 rounded"
            />
          </div>
          <DataTable
            columns={columns}
            data={sortedUsers}
            pagination
            highlightOnHover
            sortServer
            fixedHeader
            // responsive
            sortIconStyles={sortIconStyles}
            onSort={handleSort}
          />
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
