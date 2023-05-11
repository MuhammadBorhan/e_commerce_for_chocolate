import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillFileAdd, AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

const AddRegion = () => {
  const { register, handleSubmit } = useForm();

  const [region, setRegion] = useState("");

  const [districtList, setDistrictList] = useState([
    { id: uuidv4(), name: "" },
  ]);

  const handleDistrictChange = (e, index, id) => {
    const { value } = e.target;
    // const newDistrict = districtList[index];
    // newDistrict.name = value;
    // console.log(newDistrict);
    setDistrictList((old) =>
      old.map((item) => {
        if (item.id === id) {
          return { ...item, name: value };
        }
        return item;
      })
    );
  };

  const handleAddDistrictClick = () => {
    const newDistrict = { id: uuidv4(), name: "" };
    setDistrictList((p) => [...p, newDistrict]);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const payload = {
      region: region,
      district: districtList,
    };
    console.log(payload);
    axios
      .post(`http://localhost:4000/api/v1/region`, payload)
      .then((res) => console.log(res));
  };

  // console.log(districtList);

  return (
    <div className="flex justify-center items-center mt-24">
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center">Add Region</h2>
          <form onSubmit={handleFormSubmit}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Region</span>
              </label>
              <input
                type="text"
                placeholder="Add Region"
                className="input input-bordered w-full max-w-xs"
                // {...register("region")}
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              />
            </div>

            <div className="form-control w-full max-w-xs ">
              <label className="label">
                <span className="label-text">District</span>
              </label>
              {districtList.map((item, index) => {
                const { id, name } = item;

                return (
                  <div key={id} className="flex justify-center items-center">
                    <input
                      type="text"
                      placeholder="Add District"
                      className="input input-bordered mt-4 w-full max-w-xs"
                      // {...register("district")}
                      value={name}
                      onChange={(e) => handleDistrictChange(e, index, id)}
                    />

                    <button
                      className="text-red-500 flex justify-center items-center"
                      style={{ width: "40px", fontSize: "45px" }}
                    >
                      {" "}
                      <AiFillDelete></AiFillDelete>
                    </button>
                  </div>
                );
              })}
              <button
                type="button"
                onClick={handleAddDistrictClick}
                className="btn w-1/4 btn-success text-center mt-6"
              >
                {" "}
                Add
              </button>
            </div>

            <input
              className="btn mt-6 w-full max-w-xs text-white"
              style={{ backgroundColor: "#9A583B" }}
              type="submit"
              value="Add Region"
            />
          </form>
          {/* {console.log(data)} */}
        </div>
      </div>
    </div>
  );
};

export default AddRegion;
