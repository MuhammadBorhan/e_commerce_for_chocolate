import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AiOutlineFolderAdd } from "react-icons/ai";

const CreatePackage = ({ eventId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `https://andy-chocolate-productions.up.railway.app/api/v1/package`,
        data
      );
      if (response) {
        setIsOpen(false);
        document.body.style.overflow = "auto";
        reset();
      }
    } catch (error) {
      toast.error(error?.response);
    }
  };
  return (
    <div>
      <button onClick={openModal} className="text-4xl text-blue-500 font-bold">
        <AiOutlineFolderAdd />
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-md lg:w-[400px] lg:mt-12">
            <div className="card bg-base-100 overflow-auto shadow-xl mb-12">
              <div className="card-body">
                <div className="text-center">
                  <h2 className="text-xl font-bold">Create Your New Package</h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Package Name</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="input input-bordered w-full h-8 rounded-none focus:border-none "
                      {...register("name")}
                    />
                  </div>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Package Type</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="input input-bordered w-full h-8 rounded-none focus:border-none "
                      {...register("type")}
                    />
                  </div>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Package Amount</span>
                    </label>
                    <input
                      type="text"
                      className="input input-bordered w-full h-8 rounded-none focus:border-none "
                      {...register("payment")}
                    />
                  </div>

                  <input
                    className="btn mt-6 block m-auto w-full border-none text-white"
                    style={{ backgroundColor: "#9A583B" }}
                    type="submit"
                    value="Create"
                  />
                </form>
              </div>
            </div>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePackage;
