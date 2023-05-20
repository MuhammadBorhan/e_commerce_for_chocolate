import React, { useEffect, useState } from "react";
import HeroSlider from "../Components/HeroSlider";
import HeaderMenu from "../Components/HeaderMenu";
import MobileSearch from "../Components/MobileSearch";
import CategorySwiper from "./CategorySwiper/CategorySwiper";
import SameDayDelivery from "../Components/SameDayDelivery";
import Regions from "../Components/Regions";
import axios from "axios";

const Home = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error.response.data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("image", image);
      formData.append("name", name);
      formData.append("price", price);
      formData.append("description", description);
      console.log(formData);

      // Send a POST request to the backend API with the FormData
      const response = await axios.post(
        "http://localhost:5000/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Product created:", response.data);
    } catch (error) {
      console.error("Error creating product:", error.response.data);
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

      <div>
        <h1>Create a Product with image upload</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border"
          />
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="border"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border"
          ></textarea>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="border"
          />
          <button type="submit">Create</button>
        </form>
        <h2>Products</h2>
        {products.map((product) => (
          <div key={product._id}>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <img
              src={`http://localhost:5000/${product.image}`}
              alt={product.name}
              className="w-20"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
