import React from "react";

const District = ({ localArea }) => {
  const { district } = localArea;
  return (
    <div>
      <button className="btn btn-outline border-none shadow py-10">
        {district}
      </button>
    </div>
  );
};

export default District;
