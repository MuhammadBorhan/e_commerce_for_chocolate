import React from "react";
import { dhaka } from "../../data";

const Dhaka = () => {
  return (
    <div className="flex gap-4 justify-center">
      {dhaka?.map((dis) => (
        <button>{dis}</button>
      ))}
    </div>
  );
};

export default Dhaka;
