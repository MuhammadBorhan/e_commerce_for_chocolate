import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateBlankBox = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [festival, setFestival] = useState("");
  const [image, setImage] = useState(null);
  const festivals = ["Valentine", "Christmas", "Marriage", "Birthday"];

  const [getData, setGetData] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5003/api/v1/blankBox/${id}`)
      .then((res) => res.json())
      .then((data) => setGetData(data?.data));
  }, []);

  const handleSubmitBlankBox = async (e) => {
    e.preventDefault();

    // try {
    //   const formData = new FormData();
    //   formData.append("name", name);
    //   formData.append("festival", festival);
    //   formData.append("image", image);

    //   const response = await axios.patch(
    //     `http://localhost:5003/api/v1/blankBox/${id}`,
    //     formData,
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //       },
    //     }
    //   );

    //   console.log(response);
    //   if (response) {
    //     navigate("/dashboard/blanklist");
    //   }
    // } catch (error) {
    //   console.error("Error creating product:", error.response.data);
    //   toast.error(error.response.data);
    // }
  };

  const handleUpdate = async () => {
    const data = {
      name: name ? name : getData?.name,
      image: image ? image : getData?.image,
      festival: festival ? festival : getData?.festival,
    };
    try {
      const response = await axios.patch(
        `http://localhost:5003/api/v1/blankBox/${id}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response) {
        navigate("/dashboard/blanklist");
      }
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  };
  return (
    <div className="flex justify-center overflow-auto items-center p-12 w-full">
      <div
        className="card bg-base-100 overflow-auto mb-12 rounded-none"
        style={{ boxShadow: "1px 0px 3px 1px lightblue" }}
      >
        <div className="card-body">
          <div className="text-center">
            <h2 className="text-xl font-bold">Update Blank Box</h2>
          </div>
          {
            <form onSubmit={handleSubmitBlankBox} className="text-center">
              <div className="grid grid-cols-1 gap-4 my-2  ">
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    defaultValue={getData?.name}
                    onChange={(e) => setName(e.target.value)}
                    className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none mb-2 mx-auto"
                  />
                </div>
                <div className="w-full">
                  <input
                    type="text"
                    defaultValue={getData?.festival}
                    className="input input-bordered h-8 rounded-none focus:border-none w-[40%]  mb-2 mx-auto"
                  />
                  <select
                    value={festival}
                    onChange={(e) => setFestival(e.target.value)}
                    className="input input-bordered h-8 rounded-none focus:border-none w-[60%]"
                  >
                    <option>--Select Festival--</option>
                    {festivals?.map((fest, index) => (
                      <option key={index}>{fest}</option>
                    ))}
                  </select>
                </div>

                <div className="w-full flex">
                  <img
                    src={`http://localhost:5003/${getData?.image}`}
                    className="w-[10%]"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setImage(e.target.files[0])}
                    className="input input-bordered h-8 rounded-none focus:border-none w-[85%] ml-auto"
                  />
                </div>
              </div>

              <div className="flex justify-around pt-6">
                <button
                  onClick={handleUpdate}
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

export default UpdateBlankBox;
