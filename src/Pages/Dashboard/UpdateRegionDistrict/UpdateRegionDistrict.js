import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";
import DashBoardMenu from "../../../Components/DashBoardMenu/DashBoardMenu";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const UpdateRegionDistrict = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [region, setRegion] = useState("");
  const [getDistrict, setDistricts] = useState([]);
  const [newDistrict, setNewDistricts] = useState([]);

  const [regionDistrict, setRegionDistrict] = useState({});
  useEffect(() => {
    const url = `http://localhost:5003/api/v1/region/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRegionDistrict(data?.data);
        setRegion(data?.data?.region);
        setDistricts(data?.data?.district);
      });
  }, [id]);

  const handleDistrictChange = (index, value) => {
    getDistrict[index] = value;
    console.log(getDistrict);
  };

  const handleNewDistrictChange = (index, value) => {
    newDistrict[index] = value;
  };

  const handleAddDistrict = () => {
    const newDstrct = "";
    setNewDistricts([...newDistrict, newDstrct]);
  };

  const handleRemoveDistrict = (index) => {
    const updatedDistrcit = [...newDistrict];
    updatedDistrcit.splice(index, 1);
    setNewDistricts(updatedDistrcit);
  };

  const handleCancel = (d) => {
    const restDist = getDistrict?.filter((dist) => dist !== d);
    setDistricts(restDist);
  };

  const handleSubmitDist = async (e) => {
    e.preventDefault();

    const newDistrictData = {
      region,
      district: [...getDistrict, ...newDistrict],
    };
    try {
      const response = await axios.patch(
        `http://localhost:5003/api/v1/region/${id}`,
        newDistrictData,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      if (response) {
        navigate("/dashboard/regionlist");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.error);
    }
  };

  return (
    <div>
      <DashBoardMenu></DashBoardMenu>
      <div className="p-8">
        <div className="flex justify-center overflow-auto items-center mt-12">
          <div
            className="card bg-base-100 overflow-auto mb-12 rounded-none"
            style={{ boxShadow: "1px 0px 3px 1px lightblue" }}
          >
            <div className="card-body">
              <div className="text-center">
                <h2 className="text-xl font-bold">
                  Update Region And District
                </h2>
              </div>
              <form onSubmit={handleSubmitDist}>
                <div className="grid grid-cols-1  my-2">
                  <input
                    type="text"
                    defaultValue={regionDistrict.region}
                    onChange={(e) => setRegion(e.target.value)}
                    placeholder="Region"
                    className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs"
                  />
                </div>

                <div>
                  <h1 className="text-xl font-bold my-2">District</h1>
                  {regionDistrict?.district?.map((district, index) => (
                    <div
                      className="flex flex-col items-center gap-2"
                      key={index}
                    >
                      <div className="flex items-center">
                        <input
                          type="text"
                          defaultValue={district}
                          onChange={(e) =>
                            handleDistrictChange(index, e.target.value)
                          }
                          placeholder="District"
                          className="input input-bordered h-8 rounded-none focus:border-none mt-2 w-full max-w-xs"
                        />
                        <div
                          onClick={() => handleCancel(district)}
                          className=" ml-2 text-red-600 cursor-pointer"
                        >
                          <FaTrash />
                        </div>
                      </div>
                    </div>
                  ))}

                  {newDistrict.map((dstrct, index) => (
                    <div
                      className="flex flex-col items-center gap-2"
                      key={index}
                    >
                      <div className="flex items-center">
                        <input
                          type="text"
                          onChange={(e) =>
                            handleNewDistrictChange(index, e.target.value)
                          }
                          placeholder="District"
                          className="input input-bordered h-8 rounded-none focus:border-none mt-2 w-full max-w-xs"
                        />

                        <button
                          className="flex"
                          type="button"
                          onClick={() => handleRemoveDistrict(index)}
                        >
                          <div className=" ml-2 text-red-600 cursor-pointer">
                            <FaTrash />
                          </div>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex justify-around pt-6">
                  <button
                    type="button"
                    onClick={handleAddDistrict}
                    className="bg-green-500 px-2 py-1 font-bold text-white"
                  >
                    Add
                  </button>

                  <button
                    type="submit"
                    className="bg-blue-500 px-2 py-1 font-bold text-white "
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateRegionDistrict;
