import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const AddBrand = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImg] = useState(null);
  const [logo, setLogo] = useState(null);

  const handleSubmitBrand = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("desc", desc);
      formData.append("image", image);
      formData.append("logo", logo);
      const response = await axios.post(
        "http://localhost:5003/api/v1/brand",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response) {
        // Reset the form inputs
        setName("");
        setDesc("");

        toast.success("Successfully added");
      }
    } catch (error) {
      console.error("Error creating product:", error.response.data);
      toast.error(error?.response?.data?.error);
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
            <form onSubmit={handleSubmitBrand} className="text-center">
              <div className="grid grid-cols-1 gap-4 my-2  ">
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    value={name}
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
                    value={desc}
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
