import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";

import "react-toastify/dist/ReactToastify.css";
import { useGetAllBrandsQuery } from "../../../features/api/brandApi";
import { useRemoveBrandMutation } from "../../../features/api/brandApi";
import { MdUpdate } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import DashBoardMenu from "../../../Components/DashBoardMenu/DashBoardMenu";
import DataTable from "react-data-table-component";

const BrandList = () => {
  const { data } = useGetAllBrandsQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const brands = data?.data;

  const [removeBrand] = useRemoveBrandMutation();

  const handleDelete = (id) => {
    const confirm = window.confirm("Are You Sure?");
    if (confirm) {
      removeBrand(id);
    }
  };
  const [searchText, setSearchText] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  const handleSort = (column, direction) => {
    setSortColumn(column.selector);
    setSortDirection(direction);
  };

  const filteredBrands = searchText
    ? brands.filter((brand) =>
        brand?.name.toLowerCase().includes(searchText.toLowerCase())
      )
    : brands;

  const sortedBrands =
    sortColumn && sortDirection
      ? [...filteredBrands].sort((a, b) => {
          if (sortDirection === "asc") {
            return a[sortColumn] > b[sortColumn] ? 1 : -1;
          } else if (sortDirection === "desc") {
            return a[sortColumn] < b[sortColumn] ? 1 : -1;
          }
          return 0;
        })
      : filteredBrands;

  const columns = [
    {
      name: "Sl No.",
      selector: (row, index) => index + 1,
      sortable: false,
    },

    {
      name: "Brand Name",
      selector: "name",
      sortable: true,
    },
   
    {
      name: "Logo",
      cell: (row) => (
        <img
          src={`https://andy-chocolate-productions.up.railway.app/${row?.logo}`}
          className="w-16"
          alt="Brand Logo"
        />
      ),
      sortable: false,
    },
    {
      name: "Cover Image",
      cell: (row) => (
        <img
          src={`https://andy-chocolate-productions.up.railway.app/${row?.image}`}
          className="w-16"
          alt="Brand Cover"
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
            <Link to={`/dashboard/updatebrand/${row?._id}`}>
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
          <h2 className="text-xl font-bold mt-2">All Brand</h2>
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
            data={sortedBrands}
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

export default BrandList;
