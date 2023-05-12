import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./../../firebase/firebase.init.js";
import { useNavigate } from "react-router-dom";
import google from "../../../src/assets/images/google.png";

const auth = getAuth(app);

const SocialLogin = () => {
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;

        console.log(user);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div className=" block mx-auto w-3/4">
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline flex justify-center items-center "
        // style={{ backgroundColor: "#9A583B" }}
      >
        <img style={{ width: "30px" }} src={google} alt="Google" />
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
