import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";

import "react-toastify/dist/ReactToastify.css";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import DashBoardMenu from "../../../Components/DashBoardMenu/DashBoardMenu";
import {
  useGetAllBlankBoxQuery,
  useRemoveBlankBoxMutation,
} from "../../../features/api/blankBoxApi";
import { toast } from "react-toastify";
import DataTable from "react-data-table-component";

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
      toast.success("Delete Successful!!!");
    }
  };
  const [searchText, setSearchText] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  const handleSort = (column, direction) => {
    setSortColumn(column.selector);
    setSortDirection(direction);
  };

  const filteredBlankBoxs = searchText
    ? blankBox.filter((brand) =>
        brand?.name.toLowerCase().includes(searchText.toLowerCase())
      )
    : blankBox;

  const sortedBlankBox =
    sortColumn && sortDirection
      ? [...filteredBlankBoxs].sort((a, b) => {
          if (sortDirection === "asc") {
            return a[sortColumn] > b[sortColumn] ? 1 : -1;
          } else if (sortDirection === "desc") {
            return a[sortColumn] < b[sortColumn] ? 1 : -1;
          }
          return 0;
        })
      : filteredBlankBoxs;

  const columns = [
    {
      name: "Sl No.",
      selector: (row, index) => index + 1,
      sortable: false,
    },

    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Festival",
      selector: "festival",
      sortable: true,
    },

    {
      name: "Image",
      cell: (row) => (
        <img
          src={`http://localhost:5000/${row?.image}`}
          className="w-16"
          alt="Image"
        />
      ),
      sortable: false,
    },

    {
      name: "Action",
      cell: (row) => (
        <>
          <button
            className="text-blue-500"
            style={{ width: "40px", fontSize: "25px" }}
          >
            <Link to={`/dashboard/updateBlankBox/${row?._id}`}>
              <FaEdit />
            </Link>
          </button>
          <button
            onClick={() => handleDelete(row?._id)}
            className="text-red-500"
            style={{ width: "40px", fontSize: "25px" }}
          >
            <AiTwotoneDelete />
          </button>
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
          <h2 className="text-xl font-bold mt-2">All Blank Box</h2>
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
            data={filteredBlankBoxs}
            pagination
            highlightOnHover
            sortServer
            fixedHeader
            responsive
            sortIconStyles={sortIconStyles}
            onSort={handleSort}
          />
        </div>
      </div>
    </div>
  );
};

export default BlankBoxList;
