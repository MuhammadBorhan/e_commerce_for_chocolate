import { useForm } from "react-hook-form";
import bg from "../../assets/images/loginBg.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import SocialLogin from "../../Components/SocialLigin/SocialLogin";
import { toast } from "react-toastify";
import { useGetUserQuery } from "../../features/api/loginApi";
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'
  const { register, handleSubmit } = useForm();
  const { data,isLoading } = useGetUserQuery();
    
  if (isLoading) {
    return (
      <div className="flex flex-col items-center mt-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        {/* <p className="mt-4 text-gray-900">Loading...</p> */}
      </div>
    );
  }
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:5003/api/v1/login`,
        data
      );
      const accessToken = await response?.data?.data?.token;
      localStorage.setItem("accessToken", accessToken);

      const from = location.state?.path || "/user/dashboard";
      console.log(from);
      if (response?.data?.data?.user?.role === "admin") {
        navigate(from, {replace: true})
        // navigate('/dashboard')
      } else {
        navigate(from, {replace: true})
        // navigate('/dashboard')
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
