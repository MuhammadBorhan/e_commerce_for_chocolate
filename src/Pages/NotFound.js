import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center ">
      <p className="font-bold text-red-500 text-4xl">404 Page Not Found </p>
      <Link to="/" className="text-xl underline text-blue-500 ">
        Home
      </Link>
    </div>
  );
};

export default NotFound;
