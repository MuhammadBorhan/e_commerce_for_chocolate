import React, { useEffect, useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/v1/products")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  const deleteUser = (id) => {
    const confirm = window.confirm("Are you want do delete?");
    if (confirm) {
      //   removeUser(id);
    }
  };
  return (
    <div className="p-8">
      <div className="overflow-x-auto">
        <h2 className="text-xl font-bold mt-2">All User</h2>
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
            {products?.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>
                  {user?.firstName +
                    " " +
                    (user?.lastName ? user?.lastName : "")}
                </td>
                <td>{user.email}</td>
                <td>
                  <button className="px-2 bg-green-600 text-white rounded-full">
                    {user?.role}
                  </button>
                </td>
                {/* {getMe?.role === "admin" && (
                  <td>
                    {" "}
                    <button
                      onClick={() => deleteUser(user?._id)}
                      className="text-red-500 flex justify-center"
                      style={{ width: "40px", fontSize: "25px" }}
                    >
                      <AiTwotoneDelete></AiTwotoneDelete>
                    </button>
                  </td>
                )} */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
