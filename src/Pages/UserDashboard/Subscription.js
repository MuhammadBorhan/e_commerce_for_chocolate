import React from "react";
import Container from "../../Components/Container";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import usePackage from "../../Components/Customhook/usePackage";
import { RxCrossCircled } from "react-icons/rx";
import SubsCriptionPayment from "./SubsCriptionPayment";

const Subscription = () => {
  const [packages] = usePackage();
  return (
    <Container>
      <h2 className="text-center text-2xl font-bold mt-6 text-yellow-900">
        Pick Your Subscription
      </h2>
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {packages?.map((pcg) => (
          <div className="rounded bg-slate-50" key={pcg?._id}>
            <div className="card-body items-center text-center ">
              <h2 className="card-title text-2xl font-mono">{pcg?.name}</h2>
              <h2 className="card-title text-xl font-serif">
                ¥{pcg?.payment}/{pcg?.name}
              </h2>
              <div className="flex flex-col gap-4 py-4">
                <div>
                  <p className="flex items-center justify-between">
                    {pcg?.name === "Yearly" ? (
                      <span className="flex items-center gap-x-1">
                        <IoIosCheckmarkCircleOutline className="text-green-500 font-bold" />
                        Good service
                      </span>
                    ) : (
                      <span className="line-through flex items-center gap-x-1">
                        <RxCrossCircled className="text-red-700 font-bold" />
                        Good service
                      </span>
                    )}
                  </p>
                </div>
                <div>
                  <p className="flex items-center justify-between">
                    {pcg?.name === "Weekly" ? (
                      <span className="line-through flex items-center gap-x-1">
                        <RxCrossCircled className="text-red-700 font-bold" />
                        Good service
                      </span>
                    ) : (
                      <span className="flex items-center gap-x-1">
                        <IoIosCheckmarkCircleOutline className="text-green-500 font-bold" />
                        Good service
                      </span>
                    )}
                  </p>
                </div>
                <div>
                  <p className="flex items-center justify-between">
                    <span className="flex items-center gap-x-1">
                      <IoIosCheckmarkCircleOutline className="text-green-500 font-bold" />
                      Good service
                    </span>
                  </p>
                </div>
              </div>
              <div className="card-actions justify-center">
                <SubsCriptionPayment pcg={pcg} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Subscription;
