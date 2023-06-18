import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useGetAllBrandsQuery } from "../../../features/api/brandApi";
import { useGetAllRegionQuery } from "../../../features/api/regionApi";
import DateTimePicker from "react-datetime-picker";
import { toast } from "react-toastify";
import axios from "axios";

const UpdateEvent = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [dateTime, setDateTime] = useState(new Date());
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [brand, setBrand] = useState("");
  const [status, setStatus] = useState("");
  const [gmeet, setGMeet] = useState("");
  const [desc, setDesc] = useState("");
  const [capacity, setCapacity] = useState("");

  const [event, setEvent] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5003/api/v1/event/${id}`)
      .then((res) => res.json())
      .then((data) => setEvent(data?.data));
  }, [id]);

  const { data: getbrand } = useGetAllBrandsQuery();
  const allBrand = getbrand?.data;
  const { data: gregion } = useGetAllRegionQuery();
  const allRegion = gregion?.data;

  const selectDistrict = allRegion?.filter(
    (sregion) => sregion.region === region
  );

  const handleSubmitEvent = async (e) => {
    e.preventDefault();

    const data = {
      title: title ? title : event?.title,
      dateTime: dateTime ? dateTime : event?.dateTime,
      region: region ? region : event?.region,
      district: district ? district : event?.district,
      brand: brand ? brand : event?.brand,
      status: status ? status : event?.status,
      gmeet: gmeet ? gmeet : event?.gmeet,
      desc: desc ? desc : event?.desc,
      capacity: capacity ? capacity : event?.capacity,
    };
    try {
      const response = await axios.patch(
        `http://localhost:5003/api/v1/event/${id}`,
        data
      );
      if (response) {
        navigate("/dashboard/eventlist");
      }
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.error);
    }
  };
  return (
    <div className="p-8">
      <h1 className="mb-4 text-blue-500 font-bold">Update Event</h1>
      <div className="flex justify-center overflow-auto items-center mt-12">
        <div
          className="card bg-base-100 overflow-auto mb-12 rounded-none"
          style={{ boxShadow: "1px 0px 3px 1px lightblue" }}
        >
          <div className="card-body">
            <div className="text-center">
              <h2 className="text-xl font-bold">Update Event</h2>
            </div>
            {
              <form onSubmit={handleSubmitEvent} className="text-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-2 ">
                  <input
                    type="text"
                    defaultValue={event?.title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="input input-bordered h-8 rounded-none focus:border-none w-full lg:w-[400px] max-w-xs lg:max-w-none mb-2"
                  />

                  <div className="w-full ">
                    <input
                      type="text"
                      defaultValue={event?.region}
                      disabled
                      className="input input-bordered h-8 rounded-none focus:border-none w-[50%]  mb-2"
                    />

                    <select
                      onChange={(e) => setRegion(e.target.value)}
                      className="border h-8 rounded-none focus:border-none w-[50%] max-w-xs mx-auto"
                    >
                      <option disabled selected>
                        Select Region
                      </option>
                      {allRegion?.map((region) => (
                        <option key={region?._id}>{region?.region}</option>
                      ))}
                    </select>
                  </div>

                  <div className="w-full">
                    <input
                      type="text"
                      defaultValue={event?.district}
                      disabled
                      className="input input-bordered h-8 rounded-none focus:border-none w-[50%]  mb-2"
                    />
                    <select
                      onChange={(e) => setDistrict(e.target.value)}
                      className="border h-8 rounded-none focus:border-none w-[50%] mx-auto"
                    >
                      <option disabled selected>
                        Select District
                      </option>
                      {selectDistrict?.[0]?.district?.map((dst, i) => (
                        <option key={i}>{dst}</option>
                      ))}
                    </select>
                  </div>

                  <div className="w-full">
                    <input
                      type="text"
                      defaultValue={event?.brand}
                      disabled
                      className="input input-bordered h-8 rounded-none focus:border-none w-[50%]  mb-2"
                    />
                    <select
                      onChange={(e) => setBrand(e.target.value)}
                      className="border h-8 rounded-none focus:border-none w-[50%] mx-auto"
                    >
                      <option disabled selected>
                        Select Brand
                      </option>
                      {allBrand?.map((brand) => (
                        <option key={brand?._id}>{brand?.name}</option>
                      ))}
                    </select>
                  </div>

                  <div className="w-full">
                    <input
                      type="text"
                      defaultValue={event?.status}
                      disabled
                      className="input input-bordered h-8 rounded-none focus:border-none w-[50%]  mb-2"
                    />
                    <select
                      onChange={(e) => setStatus(e.target.value)}
                      className="border h-8 rounded-none focus:border-none w-[50%] mx-auto"
                    >
                      <option disabled selected>
                        Status
                      </option>
                      <option>Pending</option>
                      <option>Cancel</option>
                      <option>Start</option>
                      <option>Finish</option>
                    </select>
                  </div>

                  <input
                    type="text"
                    defaultValue={event?.gmeet}
                    onChange={(e) => setGMeet(e.target.value)}
                    className="input input-bordered h-8 rounded-none focus:border-none w-full lg:w-[400px] mb-2"
                  />
                </div>

                <div className="flex flex-col lg:flex-row justify-between mb-6">
                  <input
                    type="text"
                    defaultValue={event?.dateTime}
                    disabled
                    className="input input-bordered h-8 rounded-none focus:border-none w-full lg:w-[400px] mb-2"
                  />
                  <DateTimePicker
                    value={dateTime}
                    onChange={setDateTime}
                    className="input  h-8 rounded-none focus:border-none w-full lg:w-[400px] mb-2"
                  />
                  <input
                    type="number"
                    defaultValue={event?.capacity}
                    onChange={(e) => setCapacity(e.target.value)}
                    className="input input-bordered h-8 rounded-none focus:border-none w-full lg:w-[400px] mb-2"
                  />
                </div>
                <textarea
                  onChange={(e) => setDesc(e.target.value)}
                  rows="4"
                  defaultValue={event?.desc}
                  className="block input-bordered border mb-2 mx-auto w-full  p-1 text-sm rounded-none focus:border-none"
                  required
                ></textarea>

                <div className="flex justify-around pt-6">
                  <button
                    type="submit"
                    className="bg-[#5e2006] px-4 py-1 font-bold text-white "
                  >
                    Update
                  </button>
                </div>
              </form>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateEvent;
