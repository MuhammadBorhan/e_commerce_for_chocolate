import React, { useEffect, useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import DashBoardMenu from "../../../Components/DashBoardMenu/DashBoardMenu";
import DataTable from "react-data-table-component";

const AllVisitors = () => {
  const [visitors, setVisitors] = useState([]);
  const unique = [...new Map(visitors.map((v) => [v.isp, v])).values()];

  useEffect(() => {
    fetch("https://andy-chocolate-productions.up.railway.app/api/v1/visitors")
      .then((res) => res.json())
      .then((data) => setVisitors(data?.data));
  }, []);

 
  const [searchText, setSearchText] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  const handleSort = (column, direction) => {
    setSortColumn(column.selector);
    setSortDirection(direction);
  };

  const filteredVisitors = searchText
    ? visitors.filter((visitor) =>
        visitor?.city.toLowerCase().includes(searchText.toLowerCase())
      )
    : visitors;

  const sortedVisitors =
    sortColumn && sortDirection
      ? [...filteredVisitors].sort((a, b) => {
          if (sortDirection === "asc") {
            return a[sortColumn] > b[sortColumn] ? 1 : -1;
          } else if (sortDirection === "desc") {
            return a[sortColumn] < b[sortColumn] ? 1 : -1;
          }
          return 0;
        })
      : filteredVisitors;

  const columns = [
    {
      name: "Sl No.",
      selector: (row, index) => index + 1,
      sortable: false,
      
    },
   
    {
      name: "Country",
      selector: "country",
      sortable: true,
    },
    {
      name: "City",
      selector: "city",
      sortable: true,
    },
    {
      name: "ISP",
      selector: "isp",
      sortable: true,
    },
    {
      name: "IP",
      selector: "ip",
      sortable: true,
    },
    {
      name: "Action",
      cell: row=> (
        <>
         <button
                      className="text-red-500 flex justify-center"
                      style={{ width: "40px", fontSize: "25px" }}
                    >
                      <AiTwotoneDelete></AiTwotoneDelete>
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
          <h2 className="text-xl font-bold mt-2">All Visitorss</h2>
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
            data={sortedVisitors}
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

export default AllVisitors;
