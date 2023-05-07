import { useForm } from "react-hook-form";
import bg from "../../assets/images/loginBg.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
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
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", { required: "Email is Required" })}
              />
              {errors.email && (
                <p role="alert" className="text-red-600">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Paswoord</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", { required: "Password is required" })}
              />
              {errors.email && (
                <p role="alert" className="text-red-600">
                  {errors.password?.message}
                </p>
              )}
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
            className="btn btn-outline"
            // style={{ backgroundColor: "#9A583B" }}
          >
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
