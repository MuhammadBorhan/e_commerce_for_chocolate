import React, { useEffect, useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import {
  useGetAllProductsQuery,
  useRemoveProductMutation,
} from "../../../features/api/productsApi";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import DashBoardMenu from "../../../Components/DashBoardMenu/DashBoardMenu";
import DataTable from "react-data-table-component";

const ProductList = () => {
  const { data } = useGetAllProductsQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const products = data?.data;

  const [removeProduct] = useRemoveProductMutation();
  const [searchText, setSearchText] = useState("");
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState(null);

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (confirm) {
      removeProduct(id);
      toast.success("Successfully Deleted");
    }
  };

  const handleSort = (column, direction) => {
    setSortColumn(column.selector);
    setSortDirection(direction);
  };

  const filteredProducts = searchText
    ? products.filter((product) =>
        product?.name.toLowerCase().includes(searchText.toLowerCase())
      )
    : products;

  const sortedProducts =
    sortColumn && sortDirection
      ? [...filteredProducts].sort((a, b) => {
          if (sortDirection === "asc") {
            return a[sortColumn] > b[sortColumn] ? 1 : -1;
          } else if (sortDirection === "desc") {
            return a[sortColumn] < b[sortColumn] ? 1 : -1;
          }
          return 0;
        })
      : filteredProducts;

  const columns = [
    {
      name: "Sl No.",
      selector: (row, index) => index + 1,
      sortable: false,
      
    },
    {
      name: "Image",
      cell: (row) => (
        <img
          src={`https://andy-chocolate-productions.up.railway.app/${row?.image}`}
          className="w-16"
          alt="Product"
        />
      ),
      sortable: false,
    },
    {
      name: "Product Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Color",
      selector: "color",
      sortable: true,
    },
    {
      name: "Price",
      selector: "price",
      sortable: true,
    },
    {
      name: "Brand",
      selector: "brand",
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <>
          <Link to={`/dashboard/updateproductlist/${row?._id}`}>
            <button className="px-2 bg-blue-600 text-white mr-2">Edit</button>
          </Link>
          <button
            onClick={() => handleDelete(row?._id)}
            className="px-2 bg-red-600 text-white"
          >
            Delete
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
          <h2 className="text-xl font-bold mt-2">All Products</h2>
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
            data={sortedProducts}
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

export default ProductList;
