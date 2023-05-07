import axios from "axios";
import { useForm } from "react-hook-form";

const AddRegion = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    axios
      .post(`http://localhost:4000/api/v1/region`, data)
      .then((res) => console.log(res));
  };

  return (
    <div className="flex  h-screen justify-center items-center">
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
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

            <input
              className="btn mt-6 w-full max-w-xs text-white"
              style={{ backgroundColor: "#9A583B" }}
              type="submit"
              value="Login"
            />
          </form>
          {/* {console.log(data)} */}
        </div>
      </div>
    </div>
  );
};

export default AddRegion;
