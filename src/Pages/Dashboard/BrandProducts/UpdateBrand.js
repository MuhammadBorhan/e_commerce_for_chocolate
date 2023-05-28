import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBrand = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [image, setImg] = useState(null);
  const [logo, setLogo] = useState(null);
  console.log(name, image, logo);

  const [brand, setBrand] = useState({});
  console.log(brand);
  useEffect(() => {
    const url = `https://andy-chocolate-productions.up.railway.app//api/v1/brand/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBrand(data?.data));
  }, [id]);

  const handleSubmitBrand = async (e) => {
    e.preventDefault();

    const data = {
      name: name ? name : brand?.name,
      image: image ? image : brand?.image,
      // logo: logo ? logo : brand?.logo,
    };
    console.log(data);
    try {
      const response = await axios.patch(
        `https://andy-chocolate-productions.up.railway.app/api/v1/brand/${id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      if (response) {
        navigate("/dashboard/brandlist");
      }
    } catch (error) {
      console.error("Error creating product:", error?.response?.data);
      // toast.error(error?.response?.data);
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
            <h2 className="text-xl font-bold">Update Brand</h2>
          </div>
          {
            <form onSubmit={handleSubmitBrand} className="text-center">
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 my-2  ">
                <label>Brand Name</label>
                <input
                  type="text"
                  defaultValue={brand.name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none mb-2 mx-auto"
                />
                <label>Cover Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImg(e.target.files[0])}
                  className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none"
                />
                <label>Logo</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setLogo(e.target.files[0])}
                  className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none"
                />
              </div>

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

export default UpdateBrand;
