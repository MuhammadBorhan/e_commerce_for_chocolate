import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useGetAllBrandsQuery } from "../../../features/api/brandApi";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImg] = useState(null);

  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `https://andy-chocolate-productions.up.railway.app/api/v1/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data?.data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleUpdateProduct = async () => {
    const data = {
      name: name ? name : product?.name,
      brand: brand ? brand : product?.brand,
      desc: desc ? desc : product?.desc,
      price: price ? price : product?.price,
      image: image ? image : product?.image,
    };
    try {
      const response = await axios.patch(
        `https://andy-chocolate-productions.up.railway.app/api/v1/products/${id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      if (response) {
        navigate("/dashboard/allproduct");
      }
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  };

  const { data } = useGetAllBrandsQuery();
  const brands = data?.data;
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
            <form onSubmit={handleSubmit} className="text-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-2 ">
                <input
                  type="text"
                  value={product?.name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none mb-2"
                />

                <div>
                  <input
                    type="text"
                    disabled
                    defaultValue={product?.brand}
                    className="input input-bordered h-8 rounded-none focus:border-none w-[50%] max-w-xs lg:max-w-none mb-2"
                  />
                  <select
                    onChange={(e) => setBrand(e.target.value)}
                    className="border h-8 rounded-none focus:border-none w-[50%] max-w-xs mx-auto"
                  >
                    <option disabled selected>
                      Select Brand
                    </option>
                    {brands?.map((brand) => (
                      <option key={brand?._id}>{brand?.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <textarea
                onChange={(e) => setDesc(e.target.value)}
                rows="4"
                defaultValue={product?.desc}
                className="block input-bordered border mx-auto mb-2 w-full p-1 text-sm rounded-none focus:border-none"
                placeholder="Description..."
                required
              ></textarea>
              <input
                type="number"
                defaultValue={product?.price}
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
                  onClick={handleUpdateProduct}
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
