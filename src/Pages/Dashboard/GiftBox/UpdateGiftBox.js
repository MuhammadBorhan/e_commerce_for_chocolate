import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateGiftBox = () => {
  const [name, setBoxName] = useState("");
  const [image, setBoxImage] = useState(null);
  const [brand, setBrandName] = useState("");
  const [productList, setProductList] = useState([]);

  const { id } = useParams();

  const [giftBoxItem, setGiftBoxItem] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/api/v1/giftbox/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setGiftBoxItem(data?.data));
  }, [id]);
  console.log(giftBoxItem);
  const handleSubmitGiftItem = async (e) => {
    e.preventDefault();

    const data = {
      name,
      image,
      brand,
      productList,
    };
    try {
      const response = await axios.patch(
        `http://localhost:5000/api/v1/giftbox/${id}`,
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
            <h2 className="text-xl font-bold">Update Gift Items</h2>
          </div>
          {
            <form onSubmit={handleSubmitGiftItem} className="text-center">
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 my-2  ">
                <input
                  type="text"
                  defaultValue={giftBoxItem?.name}
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

                <input
                  type="text"
                  defaultValue={giftBoxItem.brand}
                  onChange={(e) => setBoxName(e.target.value)}
                  placeholder="Gift Box Name"
                  className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none mb-2 mx-auto"
                />

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
                        onChange={(e) => setProductList(index, e.target.value)}
                        placeholder="District"
                        className="input input-bordered h-8 rounded-none focus:border-none mt-2 w-full max-w-xs"
                      />
                    </div>
                  ))}
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

export default UpdateGiftBox;
