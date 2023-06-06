import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <div>
      <button
        className=" w-24 bg-transparent  hover:bg-[#DB874B] text-[#DB874B] font-semibold hover:text-white py-2 px-4 border border-[#DB874B] hover:border-transparent rounded"
        onClick={openModal}
      >
        Register
      </button>

      {isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded shadow-md">
            <div className="card bg-base-100 overflow-auto shadow-xl mb-12">
              <div className="card-body">
                <div className="text-center">
                  <h2 className="text-xl font-bold">
                    Please Register For Join Meeeting
                  </h2>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="input input-bordered w-full h-8 rounded-none focus:border-none "
                      {...register("name")}
                    />
                  </div>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="input input-bordered w-full h-8 rounded-none focus:border-none "
                      {...register("email")}
                    />
                  </div>
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">Contact No.</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your contact No."
                      className="input input-bordered w-full h-8 rounded-none focus:border-none "
                      {...register("phone")}
                    />
                  </div>

                  <input
                    className="btn mt-6 block m-auto w-full border-none text-white"
                    style={{ backgroundColor: "#9A583B" }}
                    type="submit"
                    value="Register"
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

export default Modal;
