import React from "react";
import { comilla } from "../../data";

const Comilla = () => {
  return (
    <div className="flex gap-4 justify-center">
      {comilla?.map((dis) => (
        <button>{dis}</button>
      ))}
    </div>
  );
};

export default Comilla;
