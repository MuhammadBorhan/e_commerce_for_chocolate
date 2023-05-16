import axios from "axios";
import { useState } from "react";

const AddProdusts = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImg] = useState("");

  const handleSubmitProduct = async (e) => {
    e.preventDefault();

    const data = {
      name,
      brand,
      desc,
      price,
      image,
    };
    console.log(data);
    try {
      await axios.post("http://localhost:4000/api/v1/products", data);

      // Reset the form inputs
      setName("");
      setBrand("");
      setDesc("");
      setPrice("");
      setImg("");

      // Handle success or show a success message
    } catch (error) {
      // Handle error or show an error message
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
            <h2 className="text-xl font-bold">Add Product</h2>
          </div>
          {
            <form onSubmit={handleSubmitProduct} className="text-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-2 ">
                {/* <select
                  onChange={(e) => setSelectRegion(e.target.value)}
                  className="border h-8 rounded-none focus:border-none w-full max-w-xs mx-auto"
                >
                  <option disabled selected>
                    Select Region
                  </option>
                  {regions?.map((region, index) => (
                    <option key={index}>{region?.region}</option>
                  ))}
                </select> */}
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none mb-2"
                />

                <select
                  onChange={(e) => setBrand(e.target.value)}
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
              </div>

              <textarea
                onChange={(e) => setDesc(e.target.value)}
                rows="8"
                // value="desc"
                className="block input-bordered mx-auto mb-2 w-2/4 px-0 text-sm rounded-none focus:border-none"
                placeholder="Description..."
                required
              ></textarea>
              <input
                type="number"
                // value="price"
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Price"
                className="input input-bordered mb-2 h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none"
              />
              <input
                type="text"
                // value="image"
                onChange={(e) => setImg(e.target.value)}
                placeholder="Brnad Image Url"
                className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none"
              />

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

export default AddProdusts;
