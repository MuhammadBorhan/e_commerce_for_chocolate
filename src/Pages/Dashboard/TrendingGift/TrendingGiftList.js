import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import {
  useGetAllTrendGiftQuery,
  useRemoveTrendGiftMutation,
} from "../../../features/api/trendingGift";
import { toast } from "react-toastify";
import DashBoardMenu from "../../../Components/DashBoardMenu/DashBoardMenu";
import DataTable from "react-data-table-component";
const TrendingGiftList = () => {
  const { data } = useGetAllTrendGiftQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const trendingGift = data?.data;

  const [removeTrending] = useRemoveTrendGiftMutation();

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you want do delete?");
    if (confirm) {
      removeTrending(id);
      toast.success("Delete Successfull!!");
    }
  };
  const [searchText, setSearchText] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  const handleSort = (column, direction) => {
    setSortColumn(column.selector);
    setSortDirection(direction);
  };

  const filteredTrendingGifts = searchText
    ? trendingGift.filter((gift) =>
        gift?.brand.toLowerCase().includes(searchText.toLowerCase())
      )
    : trendingGift;

  const sortedTrendingGift =
    sortColumn && sortDirection
      ? [...filteredTrendingGifts].sort((a, b) => {
          if (sortDirection === "asc") {
            return a[sortColumn] > b[sortColumn] ? 1 : -1;
          } else if (sortDirection === "desc") {
            return a[sortColumn] < b[sortColumn] ? 1 : -1;
          }
          return 0;
        })
      : filteredTrendingGifts;

  const columns = [
    {
      name: "Sl No.",
      selector: (row, index) => index + 1,
      sortable: false,
    },

    {
      name: "Brand Name",
      selector: "brand",
      sortable: true,
    },
    {
      name: "Region",
      selector: "region",
      sortable: true,
    },
    {
      name: "District",
      selector: "district",
      sortable: true,
    },

    {
      name: "Action",
      cell: (row) => (
        <>
          <button
            className="text-blue-500"
            style={{ width: "40px", fontSize: "25px" }}
          >
            <FaEdit />
          </button>
          <button
            onClick={(e) => handleDelete(row?._id)}
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
          <h2 className="text-xl font-bold mt-2">All Trending Gift</h2>
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
            data={sortedTrendingGift}
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

export default TrendingGiftList;
