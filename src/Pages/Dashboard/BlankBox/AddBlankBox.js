import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const AddBlankBox = () => {
  const [name, setName] = useState("");
  const [festival, setFestival] = useState("");
  const [image, setImage] = useState(null);
  const festivals = ["Valentine", "Christmas", "Marriage", "Birthday"];
  const handleSubmitBlankBox = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("festival", festival);
      formData.append("image", image);

      const response = await axios.post(
        "http://localhost:5000/api/v1/blankBox",
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
      setFestival("");

      toast.success("Successfully added");
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
            <h2 className="text-xl font-bold">Add Blank Box</h2>
          </div>
          {
            <form onSubmit={handleSubmitBlankBox} className="text-center">
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
                <select
                  value={festival}
                  onChange={(e) => setFestival(e.target.value)}
                  className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none"
                >
                  <option>--Select Festival--</option>
                  {festivals?.map((fest, index) => (
                    <option key={index}>{fest}</option>
                  ))}
                </select>

                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
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

export default AddBlankBox;
