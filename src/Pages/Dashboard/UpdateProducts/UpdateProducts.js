import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useGetAllBrandsQuery } from "../../../features/api/brandApi";
import { useParams } from "react-router-dom";

const UpdateProducts = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImg] = useState(null);

  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const url = `http://localhost:4000/api/v1/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data?.data));
  }, [id]);

  console.log(product);

  const handleUpdateProduct = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("brand", brand);
      formData.append("desc", desc);
      formData.append("price", price);
      formData.append("image", image);
      const response = await axios.patch(
        `http://localhost:4000/api/v1/products/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      // Reset the form inputs
      //   setName("");
      //   setBrand("");
      //   setDesc("");
      //   setPrice("");
      //   setImg("");
      toast.success("Successfully added");
    } catch (error) {
      console.error("Error creating product:", error.response.data);
      toast.error(error.response.data);
    }
  };

  const { data } = useGetAllBrandsQuery();
  const brands = data?.data;
  //   console.log(brands);
  return (
    <div className="flex justify-center overflow-auto items-center mt-12">
      <div
        className="card bg-base-100 overflow-auto mb-12 rounded-none"
        style={{ boxShadow: "1px 0px 3px 1px lightblue" }}
      >
        <div className="card-body">
          <div className="text-center">
            <h2 className="text-xl font-bold">Update Product</h2>
          </div>
          {
            <form onSubmit={handleUpdateProduct} className="text-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-2 ">
                <input
                  type="text"
                  defaultValue={product?.name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none mb-2"
                />

                <select
                  onChange={(e) => setBrand(e.target.value)}
                  className="border h-8 rounded-none focus:border-none w-full max-w-xs mx-auto"
                >
                  <option disabled selected>
                    Select Brand
                  </option>
                  {brands?.map((brand) => (
                    <option key={brand?._id}>{brand?.name}</option>
                  ))}
                </select>
              </div>

              <textarea
                onChange={(e) => setDesc(e.target.value)}
                rows="4"
                value={product?.desc}
                className="block input-bordered border mx-auto mb-2 w-full p-1 text-sm rounded-none focus:border-none"
                placeholder="Description..."
                required
              ></textarea>
              <input
                type="number"
                value={product?.price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                className="input input-bordered mb-2 h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none"
              />
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImg(e.target.files[0])}
                className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none"
              />

              <div className="flex justify-around pt-6">
                <button
                  type="submit"
                  className="bg-[#5e2006] px-2 py-1 font-bold text-white "
                >
                  Update
                </button>
              </div>
            </form>
          }
        </div>
      </div>
    </div>
  );
};

export default UpdateProducts;
