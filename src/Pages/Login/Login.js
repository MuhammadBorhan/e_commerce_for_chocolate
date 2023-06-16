import { useForm } from "react-hook-form";
import bg from "../../assets/images/loginBg.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SocialLogin from "../../Components/SocialLigin/SocialLogin";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/login`,
        data
      );
      console.log(response?.data?.data?.user?.role);
      const accessToken = await response?.data?.data?.token;
      localStorage.setItem("accessToken", accessToken);
      if (response?.data?.data?.user?.role === "admin") {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.error);
    }
  };
  return (
    <div
      className="flex  h-screen justify-center items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        position: "fixed",
        width: "100%",
      }}
    >
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-xl font-bold">Sign in to complete your order</h2>
          <p>
            Don't have an account?{" "}
            <Link className="text-primary" to="/signup">
              Sign up
            </Link>
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
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

            <input
              className="btn mt-6 w-full max-w-xs text-white"
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

export default Login;
