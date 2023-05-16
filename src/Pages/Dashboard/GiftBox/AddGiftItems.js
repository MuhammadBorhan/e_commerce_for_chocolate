import axios from "axios";
import { useState } from "react";

const AddGiftItems = () => {
  const [boxName, setBoxName] = useState("");
  const [boxImage, setBoxImage] = useState("");
  const [brandName, setBrandName] = useState("");
  const [productList, setProductList] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const data = [
    "Godiva 1",
    "Kitkat 1",
    "Gidiva 2",
    "nestle 1",
    "Kitkat 2",
    "linkd choco",
  ];

  const handlePruductchange = (e) => {
    console.log(e);
    // const { value, checked } = e.target;
    const value = e.target.value;
    const isChecked = e.target.checked;
    if (isChecked) {
      setProductList([...productList, value]);
    } else {
      setProductList(productList.filter((item) => item !== value));
    }
  };

  const handleSelectAll = () => {
    if (!selectAll) {
      setProductList(data);
    } else {
      setProductList([]);
    }
    setSelectAll(!selectAll);
  };

  const handleUnselectAll = () => {
    setProductList([]);
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
      // setProductList("");

      // Handle success or show a success message
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
                  onChange={(e) => setBoxName(e.target.value)}
                  placeholder="Name"
                  className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none mb-2 mx-auto"
                />
                <input
                  type="text"
                  // value="image"
                  onChange={(e) => setBoxImage(e.target.value)}
                  placeholder="Brnad Cover Image Url"
                  className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none"
                />

                <select
                  onChange={(e) => setBrandName(e.target.value)}
                  // value="brand"
                  className="border h-8 rounded-none focus:border-none w-full max-w-xs mx-auto"
                >
                  <option disabled selected>
                    Select Brand
                  </option>
                  <option>Godiva</option>
                  <option>Kitkat</option>
                  <option>Guylian</option>
                  <option>Cudbery</option>
                </select>

                {/* Checkbox  */}

                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="ml-2  cursor-pointer">
                    Select Product
                  </label>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                      />
                      {selectAll ? "Unselect All" : "Select All"}
                    </label>
                  </div>
                  <div>
                    {data.map((item) => (
                      <label key={item} className="block mt-2">
                        <input
                          type="checkbox"
                          className="form-checkbox"
                          value={item}
                          checked={productList.includes(item)}
                          onChange={handlePruductchange}
                        />
                        {item}
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
