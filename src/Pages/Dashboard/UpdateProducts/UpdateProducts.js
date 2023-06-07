import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useGetAllBrandsQuery } from "../../../features/api/brandApi";
import { useNavigate, useParams } from "react-router-dom";
import DashBoardMenu from "../../../Components/DashBoardMenu/DashBoardMenu";

const UpdateProducts = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImg] = useState(null);

  const [product, setProduct] = useState({});
  console.log(product.image);
  useEffect(() => {
    const url = `https://andy-chocolate-productions.up.railway.app/api/v1/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data?.data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleUpdateProductWithImage = async () => {
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

  const handleUpdateProduct = async () => {
    const data = {
      name: name ? name : product?.name,
      brand: brand ? brand : product?.brand,
      desc: desc ? desc : product?.desc,
      price: price ? price : product?.price,
    };
    try {
      const response = await axios.patch(
        `https://andy-chocolate-productions.up.railway.app/api/v1/product/${id}`,
        data
      );
      console.log(response);
      if (response) {
        navigate("/dashboard/allproduct");
      }
    } catch (error) {
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
              <h2 className="text-xl font-bold">Update Product</h2>
            </div>
            {
              <form onSubmit={handleSubmit} className="text-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-2 ">
                  <input
                    type="text"
                    defaultValue={product?.name}
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
                      onClick={handleUpdateProduct}
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
                      onClick={handleUpdateProductWithImage}
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
    </div>
  );
};

export default UpdateProducts;
