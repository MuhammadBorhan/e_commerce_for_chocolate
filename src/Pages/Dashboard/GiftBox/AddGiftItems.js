import axios from "axios";
import { useState } from "react";

const AddGiftItems = () => {
  const [boxName, setBoxName] = useState("");
  const [boxImage, setBoxImage] = useState("");
  const [brandName, setBrandName] = useState("");
  const [productList, setProductList] = useState([]);

  const handlePruductchange = (e) => {
    console.log(e);
    const { value, checked } = e.target;
    if (checked) {
      setProductList((prev) => [...prev, value]);
    }
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
      await axios.post("http://localhost:4000/api/v1/giftbox", data);

      // Reset the form inputs
      setBoxName("");
      setBoxImage("");
      setBrandName("");
      setProductList("");

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
                  <ul class="dropdown-content menu w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          onChange={(e) => handlePruductchange(e)}
                          type="checkbox"
                          value="Godiva1"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="vue-checkbox"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Godiva1
                        </label>
                      </div>
                    </li>
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          onChange={(e) => handlePruductchange(e)}
                          type="checkbox"
                          value="Kitkat3"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="react-checkbox"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Kitkat3
                        </label>
                      </div>
                    </li>
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          onChange={(e) => handlePruductchange(e)}
                          type="checkbox"
                          value="Milka1"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="angular-checkbox"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Milka1
                        </label>
                      </div>
                    </li>
                    <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                      <div class="flex items-center pl-3">
                        <input
                          onChange={(e) => handlePruductchange(e)}
                          type="checkbox"
                          value="Godiva2"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                        />
                        <label
                          for="laravel-checkbox"
                          class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                          Godiva2
                        </label>
                      </div>
                    </li>
                  </ul>
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
  class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
  aria-labelledby="dropdownSearchButton"
>
  <li>
    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
      <input
        id="checkbox-item-11"
        type="checkbox"
        value=""
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      />
      <label
        for="checkbox-item-11"
        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
      >
        Bonnie Green
      </label>
    </div>
  </li>
  <li>
    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
      <input
        checked
        id="checkbox-item-12"
        type="checkbox"
        value=""
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      />
      <label
        for="checkbox-item-12"
        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
      >
        Jese Leos
      </label>
    </div>
  </li>
  <li>
    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
      <input
        id="checkbox-item-13"
        type="checkbox"
        value=""
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      />
      <label
        for="checkbox-item-13"
        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
      >
        Michael Gough
      </label>
    </div>
  </li>
  <li>
    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
      <input
        id="checkbox-item-14"
        type="checkbox"
        value=""
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      />
      <label
        for="checkbox-item-14"
        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
      >
        Robert Wall
      </label>
    </div>
  </li>
  <li>
    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
      <input
        id="checkbox-item-15"
        type="checkbox"
        value=""
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      />
      <label
        for="checkbox-item-15"
        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
      >
        Joseph Mcfall
      </label>
    </div>
  </li>
  <li>
    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
      <input
        id="checkbox-item-16"
        type="checkbox"
        value=""
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      />
      <label
        for="checkbox-item-16"
        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
      >
        Leslie Livingston
      </label>
    </div>
  </li>
  <li>
    <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
      <input
        id="checkbox-item-17"
        type="checkbox"
        value=""
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
      />
      <label
        for="checkbox-item-17"
        class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
      >
        Roberta Casas
      </label>
    </div>
  </li>
</ul>;
