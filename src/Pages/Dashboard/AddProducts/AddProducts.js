import axios from "axios";
import { useState } from "react";
import { useGetAllBrandsQuery } from "../../../features/api/brandApi";
import { toast } from "react-toastify";
import DashBoardMenu from "../../../Components/DashBoardMenu/DashBoardMenu";

const AddProdusts = () => {
  const colors = ["Black", "White", "Milk"];
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState(0);
  const [color, setcolor] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImg] = useState(null);

  const handleSubmitProduct = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("brand", brand);
      formData.append("price", price);
      formData.append("color", color);
      formData.append("desc", desc);
      formData.append("image", image);
      const response = await axios.post(
        "http://localhost:5000/api/v1/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      // Reset the form inputs
      setName("");
      setBrand("");
      setcolor("");
      setDesc("");
      setPrice("");
      setImg("");
      if (response) {
        toast.success("Successfully added");
      }
    } catch (error) {
      console.error("Error creating product:", error.response.data);
      toast.error(error.response?.data?.error);
    }
  };

  const { data } = useGetAllBrandsQuery();
  const brands = data?.data;
  return (
    <div>
      <DashBoardMenu></DashBoardMenu>
      <div className="flex justify-center overflow-auto items-center mt-12">
        <div
          className="card bg-base-100 overflow-auto mb-12 rounded-none"
          style={{ boxShadow: "1px 0px 3px 1px lightblue" }}
        >
          <div className="card-body">
            <div className="text-center">
              <h2 className="text-xl font-bold">Add Product</h2>
            </div>
            {
              <form onSubmit={handleSubmitProduct} className="text-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-2 ">
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none mb-2"
                  />

                  <select
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="border h-8 rounded-none focus:border-none w-full max-w-xs mx-auto"
                  >
                    <option>--Select Brand--</option>
                    {brands?.map((brand) => (
                      <option key={brand?._id}>{brand?.name}</option>
                    ))}
                  </select>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-2 ">
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                    className="input input-bordered mb-2 h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none"
                  />

                  <select
                    value={color}
                    onChange={(e) => setcolor(e.target.value)}
                    className="border h-8 rounded-none focus:border-none w-full max-w-xs mx-auto"
                  >
                    <option>--Select Color--</option>
                    {colors?.map((color, index) => (
                      <option key={index}>{color}</option>
                    ))}
                  </select>
                </div>

                <textarea
                  onChange={(e) => setDesc(e.target.value)}
                  rows="4"
                  value={desc}
                  className="block input-bordered border mx-auto mb-2 w-full p-1 text-sm rounded-none focus:border-none"
                  placeholder="Description..."
                  required
                ></textarea>

                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImg(e.target.files[0])}
                  className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none"
                />

                <div className="flex justify-around pt-6">
                  <button
                    type="submit"
                    className="bg-[#9A583B] px-2 py-1 font-bold text-white "
                  >
                    Save
                  </button>
                </div>
              </form>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProdusts;
