import React from "react";
import Container from "../../Components/Container";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const Subscription = () => {
  return (
    <Container>
      <h2 className="text-center text-2xl font-bold mt-6 text-yellow-900">Pick Your Subscription</h2>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3">
        <div className=" border-r border-gray-800 rounded-l-lg bg-slate-50 ">
          <div className="card-body items-center text-center">
            <h3 className="card-title font-bold">Weekly</h3>
            <h3 className="card-title text-3xl font-bold">¥30/week</h3>

            <div>
              <p className="flex items-center justify-between">
                <IoIosCheckmarkCircleOutline />{" "}
                <span className="ml-1">Good service</span>
              </p>
            </div>
            <div>
              <p className="flex items-center justify-between">
                <IoIosCheckmarkCircleOutline />{" "}
                <span className="ml-1">Good service</span>
              </p>
            </div>
            <div>
              <p className="flex items-center justify-between">
                <IoIosCheckmarkCircleOutline />{" "}
                <span className="ml-1">Good service</span>
              </p>
            </div>

            <div className="card-actions -mb-16 justify-center">
              <button className="btn bg-yellow-900">Subscribe</button>
            </div>
          </div>
        </div>
        <div className=" border-r border-gray-800 bg-slate-50">
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Monthly</h2>
            <h2 className="card-title text-3xl font-bold">¥100/month</h2>
            <div>
              <p className="flex items-center justify-between">
                <IoIosCheckmarkCircleOutline />{" "}
                <span className="ml-1">Good service</span>
              </p>
            </div>
            <div>
              <p className="flex items-center justify-between">
                <IoIosCheckmarkCircleOutline />{" "}
                <span className="ml-1">Good service</span>
              </p>
            </div>
            <div>
              <p className="flex items-center justify-between">
                <IoIosCheckmarkCircleOutline />{" "}
                <span className="ml-1">Good service</span>
              </p>
            </div>
            <div className="card-actions -mb-16 justify-center">
              <button className="btn bg-yellow-900">Subscribe</button>
            </div>
          </div>
        </div>
        <div className=" border-r rounded-r-lg bg-slate-50">
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold">Yearly</h2>
            <h2 className="card-title text-3xl font-bold">¥300/year</h2>
            <div>
              <p className="flex items-center justify-between">
                <IoIosCheckmarkCircleOutline />{" "}
                <span className="ml-1">Good service</span>
              </p>
            </div>
            <div>
              <p className="flex items-center justify-between">
                <IoIosCheckmarkCircleOutline />{" "}
                <span className="ml-1">Good service</span>
              </p>
            </div>
            <div>
              <p className="flex items-center justify-between">
                <IoIosCheckmarkCircleOutline />{" "}
                <span className="ml-1">Good service</span>
              </p>
            </div>
            <div className="card-actions -mb-16 justify-center">
              <button className="btn bg-yellow-900">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Subscription;
