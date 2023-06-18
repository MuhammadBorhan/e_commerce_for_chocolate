import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./../../firebase/firebase.init.js";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const auth = getAuth(app);

const SocialLogin = () => {
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        const gUser = {
          firstName: user?.displayName,
          email: user?.email,
        };

        console.log(user);
        axios
          .post(
            `http://localhost:5003/api/v1/signup`,
            gUser
          )
          .then((res) => {
            console.log(res?.data?.token);
            const accessToken = res?.data?.token;
            localStorage.setItem("accessToken", accessToken);
            if (res.status === 200) {
              navigate("/dashboard");
            }
          });
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div className="">
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline w-full bg-black text-white hover:bg-black "
      >
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
