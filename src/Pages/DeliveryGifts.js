import React from "react";
import { sameDayDeliveryData } from "../data";
import { Link } from "react-router-dom";

const DeliveryGifts = () => {
  return (
    <div className="p-2 p-lg-5" style={{ marginTop: "60px" }}>
      <p className="pb-4 fw-bold">
        Same Day Delivery Gifts ({sameDayDeliveryData.length} Products)
      </p>
      <div className="">
        <div className="row">
          {sameDayDeliveryData.map((datas) => {
            const { image, name, price } = datas;
            return (
              <div className="col-6 col-lg-3">
                <Link
                  to={`/delivery/${name}`}
                  state={datas}
                  className="text-decoration-none"
                >
                  <div class="card">
                    <img src={image} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h6 class="card-title">{name}</h6>
                      <h4 class="card-text">{price}$</h4>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DeliveryGifts;
