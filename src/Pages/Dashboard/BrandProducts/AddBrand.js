import axios from "axios";
import { useState } from "react";

const AddBrand = () => {
  const [name, setName] = useState("");
  const [image, setImg] = useState("");
  const [logo, setLogo] = useState("");

  const handleSubmitProduct = async (e) => {
    e.preventDefault();

    const data = {
      name,
      image,
      logo,
    };
    console.log(data);
    try {
      await axios.post("http://localhost:4000/api/v1/brand", data);

      // Reset the form inputs
      setName("");
      setImg("");
      setLogo("");

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
            <h2 className="text-xl font-bold">Add Brand</h2>
          </div>
          {
            <form onSubmit={handleSubmitProduct} className="text-center">
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 my-2  ">
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none mb-2 mx-auto"
                />
                <input
                  type="text"
                  // value="image"
                  onChange={(e) => setImg(e.target.value)}
                  placeholder="Brnad Cover Image Url"
                  className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none"
                />
                <input
                  type="text"
                  // value="image"
                  onChange={(e) => setLogo(e.target.value)}
                  placeholder="Brnad Logo"
                  className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none"
                />
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

export default AddBrand;
