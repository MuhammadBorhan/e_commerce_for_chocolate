import React, { useEffect, useState } from "react";
import HeroSlider from "../Components/HeroSlider";
import HeaderMenu from "../Components/HeaderMenu";
import MobileSearch from "../Components/MobileSearch";
import CategorySwiper from "./CategorySwiper/CategorySwiper";
import SameDayDelivery from "../Components/SameDayDelivery";
import Regions from "../Components/Regions";

import axios from "axios";
import { AiOutlineDelete, AiOutlineSave } from "react-icons/ai";
import { IoMdAddCircleOutline } from "react-icons/io";

const Home = () => {
  const [district, setDistrict] = useState("");
  const [brandName, setBrandName] = useState("");
  const [brandImage, setBrandImage] = useState("");
  const [products, setProducts] = useState([]);

  const handleProductChange = (index, field, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;
    setProducts(updatedProducts);
  };

  const handleAddProduct = () => {
    const newProduct = { name: "", image: "", price: 0, quantity: 0 };
    // const newProduct = { name: "", image: "", price: 0, quantity: 0 };
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
    console.log(newData);
    try {
      await axios.post("http://localhost:5000/api/v1/products", newData); // Assuming your server is running on the same host

      // Reset the form inputs
      setDistrict("");
      setBrandName("");
      setBrandImage("");
      setProducts([]);

      // Handle success or show a success message
    } catch (error) {
      // Handle error or show an error message
    }
  };
  return (
    <>
      <MobileSearch />
      <HeaderMenu />
      <HeroSlider />
      <CategorySwiper />
      <Regions />
      <SameDayDelivery />

      <div className="flex justify-center overflow-auto items-center">
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
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-2">
                <input
                  type="text"
                  value={district}
                  onChange={(e) => setDistrict(e.target.value)}
                  placeholder="District"
                  className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs"
                />
                <input
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="Brand Name"
                  className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs"
                />
              </div>
              <input
                type="text"
                value={brandImage}
                onChange={(e) => setBrandImage(e.target.value)}
                placeholder="Brand Image URL"
                className="input input-bordered h-8 rounded-none focus:border-none w-full"
              />
              <div>
                <h1 className="text-xl font-bold my-2">Products</h1>
                {products.map((product, index) => (
                  <div className="flex flex-col items-center gap-2">
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
                  {/* <IoMdAddCircleOutline /> */}
                  Add
                </button>

                <button
                  type="submit"
                  className="bg-blue-500 px-2 py-1 font-bold text-white "
                >
                  {/* <AiOutlineSave /> */}
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
