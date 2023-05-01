import React from "react";
import { useLocation, useParams } from "react-router-dom";

const DeliveryGiftsDetails = () => {
  const location = useLocation();
  const data = location?.state;
  console.log(data);
  return (
    <div style={{ marginTop: "75px" }}>
      <div className="row py-3">
        <div className="col-12 col-lg-6 d-flex justify-content-center">
          <img
            className="d-none d-lg-block"
            src={data.image}
            style={{ width: "400px" }}
          />
          <img
            className="d-block d-lg-none"
            src={data.image}
            style={{ width: "300px" }}
          />
        </div>
        <div className="col-12 col-lg-6 d-flex justify-content-center pe-4 flex-column">
          <p>Same Day Delivery</p>
          <p>{data.name}</p>
          <h4>{data.price}</h4>
          <p>{data.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryGiftsDetails;
