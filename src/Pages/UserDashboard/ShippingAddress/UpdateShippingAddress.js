import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateShippingAddress = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [boxName, setBoxName] = useState([]);

  const [shippingAddresses, setShippingAddresses] = useState({});
  useEffect(() => {
<<<<<<< HEAD
    const url = `http://localhost:5003/api/v1/order/${id}`;
=======
    const url = `http://localhost:5000/api/v1/order/${id}`;
>>>>>>> 077a7b945487552961594540ecbf19fd4bf8b883
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setShippingAddresses(data?.data);
        setBoxName(data?.data?.boxName);
      });
  }, [id]);
  console.log(shippingAddresses);
  const handleGiftBoxChange = (index, value) => {
    setBoxName[index] = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleUpdate = async () => {
    const data = {
      firstName: firstName ? firstName : shippingAddresses?.firstName,
      lastName: lastName ? lastName : shippingAddresses?.lastName,
      address1: address1 ? address1 : shippingAddresses?.address1,
      address2: address2 ? address2 : shippingAddresses?.address2,
      region: region ? region : shippingAddresses?.region,
      district: district ? district : shippingAddresses?.district,
      state: state ? state : shippingAddresses?.state,
      zip: zip ? zip : shippingAddresses?.zip,
      boxName: boxName ? boxName : boxName?.boxName,
    };
    try {
      const response = await axios.patch(
<<<<<<< HEAD
        `http://localhost:5003/api/v1/order/${id}`,
=======
        `http://localhost:5000/api/v1/order/${id}`,
>>>>>>> 077a7b945487552961594540ecbf19fd4bf8b883
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      if (response) {
        navigate("/user/dashboard/shipping-address");
      }
    } catch (error) {
      console.log(error?.response?.data?.error);
      toast.error(error?.response?.data?.error);
    }
  };

  const [term, setTerm] = useState(false);

  const handleterm = () => {
    setTerm(!term);
  };
  return (
    <div className="flex justify-center overflow-auto items-center mt-12">
      <div
        className="card bg-base-100 overflow-auto mb-12 rounded-none"
        style={{ boxShadow: "1px 0px 3px 1px lightblue" }}
      >
        <div className="card-body">
          <div className="text-center">
            <h2 className="text-xl font-bold">Update Gift Items</h2>
          </div>
          {
            <form onSubmit={handleSubmit} className="text-center">
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 my-2  ">
                <div>
                  <h1 className="text-xl font-bold my-2">Box Name</h1>
                  {boxName?.map((box, index) => (
                    <div
                      className="flex flex-col items-center gap-2"
                      key={index}
                    >
                      <input
                        type="text"
                        defaultValue={box}
                        onChange={(e) =>
                          handleGiftBoxChange(index, e.target.value)
                        }
                        className="input input-bordered h-8 rounded-none focus:border-none mt-2 w-full max-w-xs"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label>First Name</label>
                  <input
                    type="text"
                    defaultValue={shippingAddresses?.firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none mb-2 mx-auto"
                  />
                </div>
                <div>
                  <label>Last Name</label>
                  <input
                    type="text"
                    defaultValue={shippingAddresses?.lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none mb-2 mx-auto"
                  />
                </div>
                <div>
                  <label>Address</label>
                  <input
                    type="text"
                    defaultValue={shippingAddresses?.address1}
                    onChange={(e) => setAddress1(e.target.value)}
                    className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none mb-2 mx-auto"
                  />
                </div>
                <div>
                  <label>Address</label>
                  <input
                    type="text"
                    defaultValue={shippingAddresses?.address2}
                    onChange={(e) => setAddress2(e.target.value)}
                    className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none mb-2 mx-auto"
                  />
                </div>
                <div>
                  <label>Region</label>
                  <input
                    type="text"
                    defaultValue={shippingAddresses?.region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none mb-2 mx-auto"
                  />
                </div>
                <div>
                  <label>District</label>
                  <input
                    type="text"
                    defaultValue={shippingAddresses?.district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none mb-2 mx-auto"
                  />
                </div>
                <div>
                  <label>State</label>
                  <input
                    type="text"
                    defaultValue={shippingAddresses?.state}
                    onChange={(e) => setState(e.target.value)}
                    className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none mb-2 mx-auto"
                  />
                </div>
                <div>
                  <label>Zip</label>
                  <input
                    type="text"
                    defaultValue={shippingAddresses?.zip}
                    onChange={(e) => setZip(e.target.value)}
                    className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none mb-2 mx-auto"
                  />
                </div>

                {/* Checkbox  */}

                {/* <div>
                  <h1 className="text-xl font-bold my-2">Product List</h1>
                  {shippingAddresses?.boxName?.map((box, index) => (
                    <div
                      className="flex flex-col items-center gap-2"
                      key={index}
                    >
                      <input
                        type="text"
                        defaultValue={box}
                        onChange={(e) =>
                            handleGiftBox(index, e.target.value)
                          }
                        className="input input-bordered h-8 rounded-none focus:border-none mt-2 w-full max-w-xs"
                      />
                    </div>
                  ))}
                </div> */}
              </div>

              <div className="flex justify-around pt-6">
                <div className="flex flex-col gap-y-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox text-indigo-600 h-5 w-5"
                      checked={term}
                      onChange={handleterm}
                    />
                    <span className="ml-2 text-gray-900">
                      I'm Agree for update
                    </span>
                  </label>
                  <button
                    onClick={handleUpdate}
                    type="submit"
                    className={`mt-4 px-4 py-2 rounded ${
                      term
                        ? "bg-[#5e2006] text-white cursor-pointer"
                        : "bg-gray-400 text-gray-700 cursor-not-allowed"
                    }`}
                    disabled={!term}
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          }
        </div>
      </div>
    </div>
  );
};

export default UpdateShippingAddress;
