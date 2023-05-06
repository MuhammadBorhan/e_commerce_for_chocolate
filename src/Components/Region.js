import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import District from "./District/District";

const Region = ({ area }) => {
  const { _id, region } = area;
  const [districts, setDistricts] = useState([]);
  const [dis, setDis] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:4000/api/v1/region?region=${region}`)
      .then((res) => res.json())
      .then((data) => setDistricts(data?.data));
  }, []);
  const handleRegion = (id) => {
    console.log(id);
    const datas = districts.filter((value) => value._id == id);
    setDis(datas[0].district);
  };
  return (
    <div>
      <button
        onClick={() => handleRegion(_id)}
        className="btn btn-outline border-none shadow py-10"
      >
        {region}
      </button>
      <div>
        <button>{dis}</button>
      </div>
    </div>
  );
};

export default Region;
