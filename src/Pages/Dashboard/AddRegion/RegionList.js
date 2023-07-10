import React, { useState } from "react";
import {
  useGetAllRegionQuery,
  useRemoveRegionMutation,
} from "../../../features/api/regionApi";
import { FaEdit } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import DashBoardMenu from "../../../Components/DashBoardMenu/DashBoardMenu";
import DataTable from "react-data-table-component";
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
  const [searchText, setSearchText] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  const handleSort = (column, direction) => {
    setSortColumn(column.selector);
    setSortDirection(direction);
  };

  const filteredRegions = searchText
    ? regions.filter((region) =>
        region?.region.toLowerCase().includes(searchText.toLowerCase())
      )
    : regions;

  const sortedRegions =
    sortColumn && sortDirection
      ? [...filteredRegions].sort((a, b) => {
          if (sortDirection === "asc") {
            return a[sortColumn] > b[sortColumn] ? 1 : -1;
          } else if (sortDirection === "desc") {
            return a[sortColumn] < b[sortColumn] ? 1 : -1;
          }
          return 0;
        })
      : filteredRegions;

  const columns = [
    {
      name: "Sl No.",
      selector: (row, index) => index + 1,
      sortable: false,
    },

    {
      name: "District",
      cell: (row) => (
        <select className="  rounded-none focus:border-none ">
          {row?.district?.map((district, index) => (
            <option key={index}>{district}</option>
          ))}
        </select>
      ),
      sortable: true,
    },
    {
      name: "Region",
      selector: "region",
      sortable: true,
    },

    {
      name: "Action",
      cell: (row) => (
        <>
          <Link to={`/dashboard/updateregionlist/${row?._id}`}>
            <button
              className="text-blue-500"
              style={{ width: "40px", fontSize: "25px" }}
            >
              <FaEdit />
            </button>
          </Link>
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
          <h2 className="text-xl font-bold mt-2">Region List</h2>
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
            data={sortedRegions}
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

export default RegionList;
