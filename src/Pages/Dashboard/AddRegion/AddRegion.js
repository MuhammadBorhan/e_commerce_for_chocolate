import axios from "axios";
import React, { useState } from "react";

const NewAddRegion = () => {
  const [region, setRegion] = useState("");
  const [district, setDistricts] = useState([]);

  const handleDistrictChange = (index, value) => {
    console.log(index, value);
    const updatedDistrict = [...district];
    updatedDistrict[index] = value;
    setDistricts(updatedDistrict);
  };

  const handleAddDistrict = () => {
    const newDistrict = {};
    setDistricts([...district, newDistrict]);
  };

  const handleRemoveDistrict = (index) => {
    const updatedDistrcit = [...district];
    updatedDistrcit.splice(index, 1);
    setDistricts(updatedDistrcit);
  };

  const handleSubmitDist = async (e) => {
    e.preventDefault();

    const newDistrictData = {
      region,
      district,
    };
    try {
      await axios.post("http://localhost:5000/api/v1/region", newDistrictData);

      // Reset the form inputs
      setRegion("");
      setDistricts([]);

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
            <h2 className="text-xl font-bold">Add Region And District</h2>
          </div>
          <form onSubmit={handleSubmitDist}>
            <div className="grid grid-cols-1  my-2">
              <input
                type="text"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                placeholder="Region"
                className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs"
              />
            </div>

            <div>
              <h1 className="text-xl font-bold my-2">District</h1>
              {district.map((district, index) => (
                <div className="flex flex-col items-center gap-2" key={index}>
                  <input
                    type="text"
                    value={district?.name}
                    onChange={(e) =>
                      handleDistrictChange(index, e.target.value)
                    }
                    placeholder="District"
                    className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs"
                  />

                  <button
                    type="button"
                    onClick={() => handleRemoveDistrict(index)}
                  >
                    Delete
                  </button>
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
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewAddRegion;