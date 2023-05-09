import React, { useState } from "react";
import { useForm } from "react-hook-form";
import bg from "../../assets/images/loginBg.jpg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SocialLogin from "../../Components/SocialLigin/SocialLogin";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { password, confirmPassword } = data;
    if (password !== confirmPassword) {
      alert("Password did not match");
    } else if (password.length < 6) {
      alert("Password is less than 6");
    } else {
      axios.post(`http://localhost:4000/api/v1/signup`, data).then((res) => {
        console.log(res);
        if (res.status === 200) {
          navigate("/");
        }
      });
    }
  };
  return (
    <div
      className="flex lg:h-screen justify-center overflow-auto items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        // height: "100%",
        position: "fixed",
        width: "100%",
        // overflow: "scroll",
      }}
    >
      <div className="card bg-base-100 overflow-auto shadow-xl mb-12">
        <div className="card-body">
          <div className="text-center">
            <h2 className="text-xl font-bold">
              Sign up to complete your order
            </h2>
            <p>
              Already have an account?{" "}
              <Link className="text-primary" to="/login">
                Sign in
              </Link>
            </p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-2 gap-x-8">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("firstName")}
                />
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered w-full max-w-xs"
                  {...register("lastName")}
                />
              </div>
              {/* <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Country</span>
                </label>
                <input
                  type="country"
                  placeholder="Country"
                  className="input input-bordered w-full max-w-xs"
                  {...register("country")}
                />
              </div> */}
              {/* <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Mobile Number</span>
                </label>
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="input input-bordered w-full max-w-xs"
                  {...register("phone")}
                />
              </div> */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
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
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("confirmPassword")}
                />
              </div>
            </div>
            <input
              className="btn mt-6 block m-auto w-full text-white"
              style={{ backgroundColor: "#9A583B" }}
              type="submit"
              value="Login"
            />
          </form>
          <div className="divider">OR</div>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
