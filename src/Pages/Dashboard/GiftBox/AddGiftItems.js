import React, { useState } from "react";
import { toast } from "react-toastify";
import { useGetAllBrandsQuery } from "../../../features/api/brandApi";
import { useGetAllProductsQuery } from "../../../features/api/productsApi";
import axios from "axios";

const AddGiftItems = () => {
  const [name, setBoxName] = useState("");
  const [image, setBoxImage] = useState(null);
  const [brand, setBrandName] = useState("");
  const [productList, setProductList] = useState([]);

  const [selectAll, setSelectAll] = useState(false);

  const { data: brands } = useGetAllBrandsQuery();
  const allBrand = brands?.data;
  console.log(allBrand);
  const { data: products } = useGetAllProductsQuery();
  const allProducts = products?.data;
  console.log(allProducts);
  const handlePruductchange = (name) => {
    const isSelected = productList.includes(name);
    if (isSelected) {
      setProductList(productList.filter((item) => item !== name));
    } else {
      setProductList([...productList, name]);
    }
  };

  const handleSelectAll = () => {
    if (!selectAll) {
      const allNames = allProducts.map((item) => item.name);
      setProductList(allNames);
    } else {
      setProductList([]);
    }
    setSelectAll(!selectAll);
  };

  const handleSubmitGiftItem = async (e) => {
    e.preventDefault();

    const data = {
      name,
      image,
      brand,
      productList,
    };
    try {
      const response = await axios.post(
        "https://andy-chocolate-productions.up.railway.app//api/v1/giftbox",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Reset the htmlForm inputs
      setBoxName("");
      setBoxImage(null);
      setBrandName("");
      setProductList("");

      toast.success("Successfully added");
    } catch (error) {
      console.log(error?.response?.data?.error);
      toast.error(error?.response?.data?.error);
    }
  };
  return (
    <div className="flex justify-center overflow-auto items-center mt-12">
      <div
        className="card bg-base-100 overflow-auto mb-12 rounded-none"
        style={{ boxShadow: "1px 0px 3px 1px lightblue" }}
      >
        <div className="card-body">
          <div className="text-center">
            <h2 className="text-xl font-bold">Add Gift Items</h2>
          </div>
          {
            <form onSubmit={handleSubmitGiftItem} className="text-center">
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 my-2  ">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setBoxName(e.target.value)}
                  placeholder="Gift Box Name"
                  className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none mb-2 mx-auto"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setBoxImage(e.target.files[0])}
                  className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none"
                />

                <select
                  onChange={(e) => setBrandName(e.target.value)}
                  vlaue={brand}
                  className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none"
                >
                  <option disabled selected>
                    Select Brand
                  </option>
                  {allBrand?.map((brand, index) => (
                    <option key={index}>{brand?.name}</option>
                  ))}
                </select>

                {/* Checkbox  */}
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="ml-2  cursor-pointer">
                    Select Product
                  </label>
                  <div>
                    <label className="inline-flex items-center gap-x-1 cursor-pointer my-2">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                      />
                      {selectAll ? "Unselect All" : "Select All"}
                    </label>
                  </div>
                  <div className="grid grid-cols-3 lg:grid-cols-6 gap-4">
                    {allProducts?.map((product) => (
                      <label
                        key={product._id}
                        className="inline-flex items-center gap-x-1"
                      >
                        <input
                          type="checkbox"
                          className="form-checkbox"
                          value={product?.name}
                          checked={productList.includes(product?.name)}
                          onChange={() => handlePruductchange(product?.name)}
                        />
                        {product?.name}
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-around pt-6">
                <button
                  type="submit"
                  className="bg-[#5e2006] px-2 py-1 font-bold text-white "
                >
                  Save
                </button>
              </div>
            </form>
          }
        </div>
      </div>
    </div>
  );
};

export default AddGiftItems;
