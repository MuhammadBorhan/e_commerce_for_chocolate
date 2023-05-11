import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./../../firebase/firebase.init.js";
import { useNavigate } from "react-router-dom";

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
