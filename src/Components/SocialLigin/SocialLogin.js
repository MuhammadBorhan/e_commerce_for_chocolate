import React, { useEffect } from "react";

import { useSignInWithGithub } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGithub(auth);

  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);
  let errorElement;
  if (error) {
    errorElement = (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div>
      {errorElement}
      <button
        onClick={() => signInWithGoogle()}
        className="btn block m-auto w-2/4 "
        // style={{ backgroundColor: "#9A583B" }}
      >
        Continue with Google
      </button>
    </div>
  );
};

export default SocialLogin;
