import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateBrand = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImg] = useState(null);
  const [logo, setLogo] = useState(null);

  const [brand, setBrand] = useState({});
  useEffect(() => {
    const url = `https://andy-chocolate-productions.up.railway.app/api/v1/brand/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBrand(data?.data));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // update brand with id
  const updateBrandById = async () => {
    const data = {
      name: name ? name : brand?.name,
      desc: desc ? desc : brand?.desc,
      image: image ? image : brand?.image,
      logo: logo ? logo : brand?.logo,
    };
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
      toast.error(error?.response?.data?.error);
    }
  };

  const [term, setTerm] = useState(false);

  const handleTerm = () => {
    setTerm(!term);
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
            <form onSubmit={handleSubmit} className="text-center">
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 my-2  ">
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    defaultValue={brand?.name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none mb-2 mx-auto"
                  />
                </div>
                <div>
                  <label>Description</label>
                  <textarea
                    onChange={(e) => setDesc(e.target.value)}
                    rows="4"
                    defaultValue={brand?.desc}
                    className="block input-bordered border mx-auto mb-2 w-full p-1 text-sm rounded-none focus:border-none"
                    placeholder="Description..."
                    required
                  ></textarea>
                </div>
                <div>
                  <label>Cover Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImg(e.target.files[0])}
                    className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none"
                  />
                </div>
                <div>
                  <label>Logo</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setLogo(e.target.files[0])}
                    className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none"
                  />
                </div>
              </div>

              <div className="flex justify-around pt-6">
                <div className="flex flex-col gap-y-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-indigo-600 h-5 w-5"
                      checked={term}
                      onChange={handleTerm}
                    />
                    <span className="ml-2 text-gray-900">
                      Do you want to update?
                    </span>
                  </label>
                  <button
                    onClick={updateBrandById}
                    type="submit"
                    className={`mt-4 px-4 py-2 rounded ${
                      term
                        ? "bg-[#5e2006] text-white cursor-pointer"
                        : "bg-gray-400 text-gray-700 cursor-not-allowed"
                    }`}
                    disabled={!term}
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          }
        </div>
      </div>
    </div>
  );
};

export default UpdateBrand;
