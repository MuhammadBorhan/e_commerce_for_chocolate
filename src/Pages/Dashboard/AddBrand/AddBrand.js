import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const AddBrand = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios
      .post(`http://localhost:4000/api/v1/brands`, data)
      .then((res) => console.log(res));
  };
  return (
    <div className="w-2/4 flex justify-center items-center mt-24">
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-3xl font-bold text-center">Add Brand</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <input
                type="text"
                placeholder="Brand Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Brand Image</span>
              </label>
              <input
                type="text"
                alt=""
                placeholder="Photo Url"
                className="input input-bordered w-full max-w-xs"
                {...register("image")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">District</span>
              </label>
              <input
                type="text"
                placeholder="District"
                className="input input-bordered w-full max-w-xs"
                {...register("district")}
              />
            </div>

            <input
              className="btn mt-6 w-full max-w-xs text-white"
              style={{ backgroundColor: "#9A583B" }}
              type="submit"
              value="Add Brands"
            />
          </form>
          {/* {console.log(data)} */}
        </div>
      </div>
    </div>
  );
};

export default AddBrand;
