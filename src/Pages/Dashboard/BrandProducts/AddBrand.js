import React, { useEffect, useState } from "react";
import axios from "axios";

import { AiOutlineDelete } from "react-icons/ai";
import { useGetAllRegionQuery } from "../../../features/api/regionApi";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddBrand = () => {
  // fetch region and district data
  const { data } = useGetAllRegionQuery();
  const regions = data?.data;

  const [selectRegion, setSelectRegion] = useState("");
  // fetch district data by region
  const [districts, setDistricts] = useState({});
  const getDistrict = districts[0]?.district;
  useEffect(() => {
    fetch(`http://localhost:5000/api/v1/region?region=${selectRegion}`)
      .then((res) => res.json())
      .then((data) => setDistricts(data?.data));
  }, [selectRegion]);

  const [district, setDistrict] = useState("");
  const [brandName, setBrandName] = useState("");
  const [brandImage, setBrandImage] = useState("");
  const [products, setProducts] = useState([]);

  const handleProductChange = (index, field, value) => {
    console.log(index, field, value);
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;
    setProducts(updatedProducts);
  };

  const handleAddProduct = () => {
    const newProduct = { name: "", image: "", price: 0, quantity: 0 };
    setProducts([...products, newProduct]);
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newData = {
      district,
      brandName,
      brandImage,
      products,
    };
    try {
      await axios.post("http://localhost:5000/api/v1/products", newData);

      // Reset the form inputs
      // setDistrict("");
      // setSelectRegion("");
      setBrandName("");
      setBrandImage("");
      setProducts([]);
      toast.success("Insert Successfully!");
    } catch (error) {
      // console.error(error);
      toast.error(error.message);
    }
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div className="flex justify-center overflow-auto items-center mt-12">
      <div
        className="card bg-base-100 overflow-auto mb-12 rounded-none"
        style={{ boxShadow: "1px 0px 3px 1px lightblue" }}
      >
        <div className="card-body">
          <div className="text-center">
            <h2 className="text-xl font-bold">
              Added New Product With Brand and District
            </h2>
          </div>
          {
            <form onSubmit={handleSubmit} className="text-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-2 ">
                <select
                  onChange={(e) => setSelectRegion(e.target.value)}
                  className="border h-8 rounded-none focus:border-none w-full max-w-xs mx-auto"
                >
                  <option disabled selected>
                    Select Region
                  </option>
                  {regions?.map((region, index) => (
                    <option key={index}>{region?.region}</option>
                  ))}
                </select>
                <select
                  onChange={(e) => setDistrict(e.target.value)}
                  className="border h-8 rounded-none focus:border-none w-full max-w-xs mx-auto"
                >
                  <option disabled selected>
                    Select District
                  </option>
                  {getDistrict?.map((district, index) => (
                    <option key={index}>{district}</option>
                  ))}
                </select>
                {/* <input
                  type="text"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  placeholder="District"
                  className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs mx-auto"
                /> */}
              </div>
              <input
                type="text"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="Brand Name"
                className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none mb-2"
              />
              <input
                type="text"
                value={brandImage}
                onChange={(e) => setBrandImage(e.target.value)}
                placeholder="Brand Image URL"
                className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none"
              />
              <div>
                <h1 className="text-xl font-bold my-2">Products</h1>
                {products.map((product, index) => (
                  <div className="flex flex-col items-center gap-2" key={index}>
                    <input
                      type="text"
                      value={product.name}
                      onChange={(e) =>
                        handleProductChange(index, "name", e.target.value)
                      }
                      placeholder="Name"
                      className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs"
                    />
                    <div className="flex gap-x-16 items-center">
                      <label>Price:</label>
                      <input
                        type="number"
                        value={product.price}
                        onChange={(e) =>
                          handleProductChange(
                            index,
                            "price",
                            parseFloat(e.target.value)
                          )
                        }
                        placeholder="Price"
                        className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs"
                      />
                    </div>
                    <div className="flex gap-x-10 items-center">
                      <label>Quantity:</label>
                      <input
                        type="number"
                        value={product.quantity}
                        onChange={(e) =>
                          handleProductChange(
                            index,
                            "quantity",
                            parseFloat(e.target.value)
                          )
                        }
                        placeholder="Quantity"
                        className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs"
                      />
                    </div>
                    <input
                      type="text"
                      value={product.image}
                      onChange={(e) =>
                        handleProductChange(index, "image", e.target.value)
                      }
                      placeholder="Product Image URL"
                      className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveProduct(index)}
                    >
                      <AiOutlineDelete className="text-red-500 font-bold" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex justify-around pt-6">
                <button
                  type="button"
                  onClick={handleAddProduct}
                  className="bg-green-500 px-2 py-1 font-bold text-white"
                >
                  Add
                </button>

                <button
                  type="submit"
                  className="bg-blue-500 px-2 py-1 font-bold text-white "
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

export default AddBrand;
