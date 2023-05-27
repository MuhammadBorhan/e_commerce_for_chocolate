import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateBrand = () => {
  const [name, setName] = useState("");
  const [image, setImg] = useState(null);
  const [logo, setLogo] = useState(null);
  const { id } = useParams();

  const [brand, setBrand] = useState({});
  useEffect(() => {
    const url = `https://andy-chocolate-productions.up.railway.app//api/v1/brand/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBrand(data?.data));
  }, [id]);

  const handleSubmitBrand = async (e) => {
    e.preventDefault();

    const formData = {
      name: name ? name : brand?.name,
      image: image ? image : brand?.image,
      logo: logo ? logo : brand?.logo,
    };
    console.log(formData);
    try {
      const response = await axios.patch(
        `https://andy-chocolate-productions.up.railway.app//api/v1/brand/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      // Reset the form inputs
      setName("");
      setImg("");
      setLogo("");

      // toast.success("Successfully added");
    } catch (error) {
      console.error("Error creating product:", error.response.data);
      toast.error(error.response.data);
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
                <input
                  type="text"
                  defaultValue={brand.name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none mb-2 mx-auto"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImg(e.target.files[0])}
                  className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none"
                />
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

export default UpdateBrand;
