import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import {
  useGetAllGiftBoxQuery,
  useGetAllSelectGiftBoxQuery,
  useRemoveGiftBoxMutation,
} from "../../../features/api/GiftBoxApi";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
import DashBoardMenu from "../../../Components/DashBoardMenu/DashBoardMenu";
import DataTable from "react-data-table-component";
const GiftItemList = () => {
  const { data: giftBoxs } = useGetAllGiftBoxQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const allGiftBox = giftBoxs?.data;

  const [removeBox] = useRemoveGiftBoxMutation();

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you want do delete?");
    if (confirm) {
      removeBox(id);
      toast.success("Delete Successfull!!");
    }
  };

  const { data: getSelectGiftBox } = useGetAllSelectGiftBoxQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const selectGiftBox = getSelectGiftBox?.data;

  const filtering = allGiftBox?.filter((abox) => {
    return selectGiftBox?.some((sbox) => sbox?._id === abox?._id);
  });

  const maping = filtering?.find((fltr) => fltr);

  // enable or disable
  const handleToggle = async (id, isEnabled) => {
    try {
      const response = await axios.patch(
        `https://andy-chocolate-productions.up.railway.app/api/v1/selectgiftbox/${id}`,
        {
          isEnabled: !isEnabled,
        }
      );
      if (response) {
        setTimeout(() => {
          window.location.reload();
        }, 50);
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };
  const [searchText, setSearchText] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  const handleSort = (column, direction) => {
    setSortColumn(column.selector);
    setSortDirection(direction);
  };

  const filteredGiftBoxs = searchText
    ? allGiftBox.filter((giftBox) =>
        giftBox?.name.toLowerCase().includes(searchText.toLowerCase())
      )
    : allGiftBox;

  const sortedGiftBoxs =
    sortColumn && sortDirection
      ? [...filteredGiftBoxs].sort((a, b) => {
          if (sortDirection === "asc") {
            return a[sortColumn] > b[sortColumn] ? 1 : -1;
          } else if (sortDirection === "desc") {
            return a[sortColumn] < b[sortColumn] ? 1 : -1;
          }
          return 0;
        })
      : filteredGiftBoxs;

  const columns = [
    {
      name: "Sl No.",
      selector: (row, index) => index + 1,
      sortable: false,
    },

    {
      name: "Gift Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Box Image",
      cell: (row) => (
        <img
          src={`https://andy-chocolate-productions.up.railway.app/${row?.image}`}
          className="w-16"
        />
      ),
      sortable: false,
    },
    {
      name: "Products",
      cell: (row) => (
      
        <select className="rounded-none focus:border-none ">
          {row?.productList?.map((product,index) => (
            <option key={index}>{product}</option>
          ))}
        </select>
    
      ),
      sortable: true,
    },
  
    {
      name: "Festival",
      selector: "festival",
      sortable: true,
    },
    {
      name: "Brand Name",
      selector: "brand",
      sortable: true,
    },
    {
      name: "Branding Item",
      cell: (row) => (
        <button
          onClick={() => handleToggle(row._id, row.isEnabled)}
          className={`${
            row.isEnabled === true
              ? "bg-red-500 px-2 py-1 text-white font-bold rounded"
              : "bg-green-500 px-2 py-1 text-white font-bold rounded"
          }`}
        >
          {row.isEnabled ? "Disable" : "Enable"}
        </button>
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
            <Link to={`/dashboard/updategiftboxitem/${row?._id}`}>
              {" "}
              <FaEdit />
            </Link>
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
          <h2 className="text-xl font-bold mt-2">All Gift Box</h2>
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
            data={sortedGiftBoxs}
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

export default GiftItemList;
