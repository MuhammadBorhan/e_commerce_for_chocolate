import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import { useGetAllBrandsQuery } from "../../../features/api/brandApi";
import { useGetAllProductsQuery } from "../../../features/api/productsApi";

const AddGiftItems = () => {
  const [boxName, setBoxName] = useState("");
  const [boxImage, setBoxImage] = useState("");
  const [brandName, setBrandName] = useState("");
  const [productList, setProductList] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const { data: brands } = useGetAllBrandsQuery();
  const allBrand = brands?.data;
  const { data: products } = useGetAllProductsQuery();
  const allProducts = products?.data;
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

  console.log(productList);

  const handleSubmitGiftItem = async (e) => {
    e.preventDefault();

    const data = {
      boxName,
      boxImage,
      brandName,
      productList,
    };
    console.log(data);
    try {
      await axios.post("http://localhost:5000/api/v1/giftbox", data);

      // Reset the htmlForm inputs
      setBoxName("");
      setBoxImage("");
      setBrandName("");
      setProductList("");

      toast.success("Successfully added");
    } catch (error) {
      console.log(error);
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
                  value={boxName}
                  onChange={(e) => setBoxName(e.target.value)}
                  placeholder="Gift Box Name"
                  className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none mb-2 mx-auto"
                />
                <input
                  type="text"
                  value={boxImage}
                  onChange={(e) => setBoxImage(e.target.value)}
                  placeholder="Gift Box Image Url"
                  className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none"
                />

                <select
                  onChange={(e) => setBrandName(e.target.value)}
                  vlaue={brandName}
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
<ul
  className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
  aria-labelledby="dropdownSearchButton"
>
  <li>
    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
      <input
        id="checkbox-item-11"
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      />
      <label
        htmlFor="checkbox-item-11"
        className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
      >
        Bonnie Green
      </label>
    </div>
  </li>
  <li>
    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
      <input
        checked
        id="checkbox-item-12"
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      />
      <label
        htmlFor="checkbox-item-12"
        className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
      >
        Jese Leos
      </label>
    </div>
  </li>
  <li>
    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
      <input
        id="checkbox-item-13"
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      />
      <label
        htmlFor="checkbox-item-13"
        className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
      >
        Michael Gough
      </label>
    </div>
  </li>
  <li>
    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
      <input
        id="checkbox-item-14"
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      />
      <label
        htmlFor="checkbox-item-14"
        className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
      >
        Robert Wall
      </label>
    </div>
  </li>
  <li>
    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
      <input
        id="checkbox-item-15"
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      />
      <label
        htmlFor="checkbox-item-15"
        className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
      >
        Joseph Mcfall
      </label>
    </div>
  </li>
  <li>
    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
      <input
        id="checkbox-item-16"
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      />
      <label
        htmlFor="checkbox-item-16"
        className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
      >
        Leslie Livingston
      </label>
    </div>
  </li>
  <li>
    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
      <input
        id="checkbox-item-17"
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      />
      <label
        htmlFor="checkbox-item-17"
        className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
      >
        Roberta Casas
      </label>
    </div>
  </li>
</ul>;
