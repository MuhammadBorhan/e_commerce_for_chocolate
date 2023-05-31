import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateGiftBox = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setBoxName] = useState("");
  const [image, setBoxImage] = useState(null);
  const [brand, setBrandName] = useState("");
  const [productList, setProductList] = useState([]);

  const [giftBoxItem, setGiftBoxItem] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/api/v1/giftbox/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setGiftBoxItem(data?.data);
        setProductList(data?.data?.productList);
      });
  }, [id]);

  const handleProductChange = (index, value) => {
    productList[index] = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const updateWithImage = async () => {
    const data = {
      name: name ? name : giftBoxItem?.name,
      image: image ? image : giftBoxItem?.image,
      brand: brand ? brand : giftBoxItem?.brand,
      productList: productList ? productList : giftBoxItem?.productList,
    };
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/v1/updateWithImage/${id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response) {
        navigate("/dashboard/giftitemlist");
      }
    } catch (error) {
      console.log(error?.response?.data?.error);
      toast.error(error?.response?.data?.error);
    }
  };

  const updateWithoutImage = async () => {
    const data = {
      name: name ? name : giftBoxItem?.name,
      brand: brand ? brand : giftBoxItem?.brand,
      productList: productList ? productList : giftBoxItem?.productList,
    };
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/v1/giftbox/${id}`,
        data
      );
      if (response) {
        navigate("/dashboard/giftitemlist");
      }
    } catch (error) {
      console.log(error?.response?.data?.error);
      toast.error(error?.response?.data?.error);
    }
  };

  const [term1, setTerm1] = useState(false);
  const [term2, setTerm2] = useState(false);
  const handleTerm1 = () => {
    setTerm1(!term1);
  };
  const handleTerm2 = () => {
    setTerm2(!term2);
  };
  return (
    <div className="flex justify-center overflow-auto items-center mt-12">
      <div
        className="card bg-base-100 overflow-auto mb-12 rounded-none"
        style={{ boxShadow: "1px 0px 3px 1px lightblue" }}
      >
        <div className="card-body">
          <div className="text-center">
            <h2 className="text-xl font-bold">Update Gift Items</h2>
          </div>
          {
            <form onSubmit={handleSubmit} className="text-center">
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 my-2  ">
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    defaultValue={giftBoxItem?.name}
                    onChange={(e) => setBoxName(e.target.value)}
                    placeholder="Gift Box Name"
                    className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none mb-2 mx-auto"
                  />
                </div>
                <div>
                  <label>Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setBoxImage(e.target.files[0])}
                    className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none"
                  />
                </div>
                <div>
                  <label>Brand</label>
                  <input
                    type="text"
                    defaultValue={giftBoxItem.brand}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="Gift Box Name"
                    className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none mb-2 mx-auto"
                  />
                </div>

                {/* Checkbox  */}

                <div>
                  <h1 className="text-xl font-bold my-2">Product List</h1>
                  {giftBoxItem?.productList?.map((product, index) => (
                    <div
                      className="flex flex-col items-center gap-2"
                      key={index}
                    >
                      <input
                        type="text"
                        defaultValue={product}
                        onChange={(e) =>
                          handleProductChange(index, e.target.value)
                        }
                        placeholder="District"
                        className="input input-bordered h-8 rounded-none focus:border-none mt-2 w-full max-w-xs"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-around pt-6">
                <div className="flex flex-col gap-y-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-indigo-600 h-5 w-5"
                      checked={term1}
                      onChange={handleTerm1}
                    />
                    <span className="ml-2 text-gray-900">
                      Update Without Image
                    </span>
                  </label>
                  <button
                    onClick={updateWithoutImage}
                    type="submit"
                    className={`mt-4 px-4 py-2 rounded ${
                      term1
                        ? "bg-[#5e2006] text-white cursor-pointer"
                        : "bg-gray-400 text-gray-700 cursor-not-allowed"
                    }`}
                    disabled={!term1}
                  >
                    Update Without Image
                  </button>
                </div>
                <div className="flex flex-col gap-y-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-indigo-600 h-5 w-5"
                      checked={term2}
                      onChange={handleTerm2}
                    />
                    <span className="ml-2 text-gray-900">
                      Update With Image
                    </span>
                  </label>
                  <button
                    onClick={updateWithImage}
                    type="submit"
                    className={`mt-4 px-4 py-2 rounded ${
                      term2
                        ? "bg-[#5e2006] text-white cursor-pointer"
                        : "bg-gray-400 text-gray-700 cursor-not-allowed"
                    }`}
                    disabled={!term2}
                  >
                    Update With Image
                  </button>
                </div>
              </div>
            </form>
          }
        </div>
      </div>
    </div>
  );
};

export default UpdateGiftBox;
