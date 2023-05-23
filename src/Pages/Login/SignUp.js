import React from "react";
import { useForm } from "react-hook-form";
import bg from "../../assets/images/loginBg.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SocialLogin from "../../Components/SocialLigin/SocialLogin";
import { toast } from "react-toastify";

const SignUp = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    // const { confirmPassword: cfw, ...others } = data;
    // const { password, confirmPassword } = data;
    // if (password !== confirmPassword) {
    //   toast.error("Password did not match");
    // } else if (password.length < 6) {
    //   toast.error("Password is less than 6");
    // } else {
    //   try {
    //     const response = await axios.post(
<<<<<<< HEAD
    //       `http://localhost:4000/api/v1/signup`,
=======
    //       `http://localhost:5002/api/v1/signup`,
>>>>>>> 9fe882de56a939a28aad3953fc2b210b31a14746
    //       others
    //     );
    //     const accessToken = response?.data?.token;
    //     localStorage.setItem("accessToken", accessToken);
    //     if (response) {
    //       navigate("/dashboard");
    //       window.location.reload();
    //     }
    //   } catch (error) {
    //     console.log(error);
    //     toast.error(error?.response?.data?.error);
    //   }
    // }

    try {
      const { confirmPassword: cfw, ...others } = data;
      const response = await axios.post(
        `http://localhost:4000/api/v1/signup`,
        others
      );
      const accessToken = response?.data?.token;
      localStorage.setItem("accessToken", accessToken);
      if (response) {
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(error?.response?.data?.error);
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
                  className="input input-bordered w-full h-8 rounded-none focus:border-none max-w-xs"
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
                  className="input input-bordered w-full h-8 rounded-none focus:border-none max-w-xs"
                  {...register("lastName")}
                />
              </div>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full h-8 rounded-none focus:border-none "
                {...register("email")}
              />
            </div>
            <div className="grid lg:grid-cols-2 gap-x-8">
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Paswoord</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full h-8 rounded-none focus:border-none max-w-xs"
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
                  className="input input-bordered w-full h-8 rounded-none focus:border-none max-w-xs"
                  {...register("confirmPassword")}
                />
              </div>
            </div>

            <input
              className="btn mt-6 block m-auto w-full border-none text-white"
              style={{ backgroundColor: "#9A583B" }}
              type="submit"
              value="Login"
            />
          </form>
          <div className="divider ">OR</div>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
