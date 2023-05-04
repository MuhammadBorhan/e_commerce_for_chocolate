import React, { useState } from "react";
import { useForm } from "react-hook-form";
import bg from "../../assets/images/loginBg.jpg";
import { Link } from "react-router-dom";

const SignUp = () => {
  const styles = {
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "150vh",
  };
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");
  return (
    <div className="flex  h-screen justify-center items-center" style={styles}>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-xl font-bold">Sign up to complete your order</h2>
          <p>
            Already have an account?{" "}
            <Link className="text-primary" to="/login">
              Sign in
            </Link>
          </p>
          <form
            onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}
          >
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Country</span>
              </label>
              <input
                type="country"
                placeholder="Country"
                className="input input-bordered w-full max-w-xs"
                {...register("country")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Mobile Number</span>
              </label>
              <input
                type="tel"
                placeholder="Mobile Number"
                className="input input-bordered w-full max-w-xs"
                {...register("phone")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email Id</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Paswoord</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password")}
              />
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Date of Birth</span>
              </label>
              <input
                type="date"
                placeholder="Pick Your Date"
                className="input input-bordered w-full max-w-xs"
                {...register("date")}
              />
            </div>

            <input
              className="btn mt-6 w-full max-w-xs text-white"
              style={{ backgroundColor: "#9A583B" }}
              type="submit"
              value="Login"
            />
          </form>
          <div className="divider">OR</div>
          <button
            className="btn "
            // style={{ backgroundColor: "#9A583B" }}
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
