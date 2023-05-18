import React, { useEffect, useState } from "react";
import { AiTwotoneDelete, AiOutlineEdit } from "react-icons/ai";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data?.data));
  }, []);

  const deleteUser = (id) => {
    const confirm = window.confirm("Are you want do delete?");
    if (confirm) {
      // removeUser(id);
    }
  };
  console.log(products.length);
  return (
    <div className="p-8">
      <div className="overflow-x-auto">
        <h2 className="text-xl font-bold mt-2">Product List</h2>
        <table className="table w-full mt-2">
          {/* head */}
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Product Name</th>
              <th>Brand</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products?.map((p, i) => (
              <tr key={p._id}>
                <th>{i + 1}</th>
                <td>{p?.name}</td>
                <td>{p?.brand}</td>
                {/* <td>
                  <button className="px-2 bg-green-600 text-white rounded-full">
                    {user.role}
                  </button>
                </td> */}

                <td>
                  <button
                    className="text-red-500 flex justify-center justify-space-between"
                    onClick={() => deleteUser(p?._id)}
                    style={{ width: "40px", fontSize: "25px" }}
                  >
                    <AiTwotoneDelete></AiTwotoneDelete>
                  </button>
                  <button className="text-red-500 flex justify-center justify-space-between">
                    <AiOutlineEdit></AiOutlineEdit>
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

export default ProductList;
