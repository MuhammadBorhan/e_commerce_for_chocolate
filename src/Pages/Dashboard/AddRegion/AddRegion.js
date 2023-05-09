import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddRegion = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios
      .post(`http://localhost:4000/api/v1/region`, data)
      .then((res) => console.log(res));
  };
  return (
    <div className="flex justify-center items-center mt-24">
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center">Add Region</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Region</span>
              </label>
              <input
                type="text"
                placeholder="Add Region"
                className="input input-bordered w-full max-w-xs"
                {...register("region")}
              />
            </div>
            {
              <div className="form-control w-full max-w-xs ">
                <label className="label">
                  <span className="label-text">District</span>
                </label>
                <input
                  type="text"
                  placeholder="Add Region"
                  className="input input-bordered w-full max-w-xs"
                  {...register("district")}
                />
                <button>Add</button>
                <button>Remove</button>
              </div>
            }

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
