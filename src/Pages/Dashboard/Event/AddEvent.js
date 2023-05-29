import axios from "axios";
import { format } from "date-fns";
import { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { DayPicker } from "react-day-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { toast } from "react-toastify";
import { useGetAllBrandsQuery } from "../../../features/api/brandApi";
import { useGetAllRegionQuery } from "../../../features/api/regionApi";

const AddEvent = () => {
  const [title, setTitle] = useState("");
  const [dateTime, setDateTime] = useState(new Date());
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [brand, setBrand] = useState("");
  const [status, setStatus] = useState("");
  const [gmeet, setGMeet] = useState("");
  const [desc, setDesc] = useState("");

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
      title,
      dateTime,
      region,
      district,
      brand,
      status,
      gmeet,
      desc,
    };
    console.log(data);
    try {
      await axios.post(
        "https://andy-chocolate-productions.up.railway.app/api/v1/event",
        data
      );

      // Reset the form inputs
      setTitle("");
      setDateTime("");
      setRegion("");
      setDistrict("");
      setBrand("");
      setGMeet("");
      setDesc("");

      toast.success("Succeessfully Added");
    } catch (error) {
      toast.error(error?.response?.data?.error);
    }
  };
  return (
    <div className="p-8">
      <h1 className="mb-4 text-blue-500 font-bold">Add Event</h1>
      <div className="flex justify-center overflow-auto items-center mt-12">
        <div
          className="card bg-base-100 overflow-auto mb-12 rounded-none"
          style={{ boxShadow: "1px 0px 3px 1px lightblue" }}
        >
          <div className="card-body">
            <div className="text-center">
              <h2 className="text-xl font-bold">Add Event</h2>
            </div>
            {
              <form onSubmit={handleSubmitEvent} className="text-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-2 ">
                  <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none mb-2"
                  />

                  <select
                    onChange={(e) => setRegion(e.target.value)}
                    className="border h-8 rounded-none focus:border-none w-full max-w-xs mx-auto"
                  >
                    <option disabled selected>
                      Select Region
                    </option>
                    {allRegion?.map((region) => (
                      <option key={region?._id}>{region?.region}</option>
                    ))}
                  </select>

                  <select
                    onChange={(e) => setDistrict(e.target.value)}
                    className="border h-8 rounded-none focus:border-none w-full max-w-xs mx-auto"
                  >
                    <option disabled selected>
                      Select District
                    </option>
                    {selectDistrict?.[0]?.district?.map((dst, i) => (
                      <option key={i}>{dst}</option>
                    ))}
                  </select>

                  <select
                    onChange={(e) => setBrand(e.target.value)}
                    className="border h-8 rounded-none focus:border-none w-full max-w-xs mx-auto"
                  >
                    <option disabled selected>
                      Select Brand
                    </option>
                    {allBrand?.map((brand) => (
                      <option key={brand?._id}>{brand?.name}</option>
                    ))}
                  </select>

                  <select
                    onChange={(e) => setStatus(e.target.value)}
                    className="border h-8 rounded-none focus:border-none w-full max-w-xs mx-auto"
                  >
                    <option disabled selected>
                      Status
                    </option>
                    <option>Pending</option>
                    <option>Cancel</option>
                    <option>Join Now</option>
                    <option>Finish</option>
                  </select>

                  <input
                    type="text"
                    onChange={(e) => setGMeet(e.target.value)}
                    placeholder="Google Meet Link"
                    className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs lg:max-w-none mb-2"
                  />
                </div>

                <div className="hero">
                  <div className="hero-content flex-col">
                    {/* <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                    onChange={(e) => handleDate(e)}
                  />
                  <p className="text-red-700 text-center text-2xl mt-2">
                    Our Event Date is: {format(selected, "PPpp")}
                  </p> */}
                    <DateTimePicker value={dateTime} onChange={setDateTime} />
                  </div>
                </div>
                <textarea
                  onChange={(e) => setDesc(e.target.value)}
                  rows="4"
                  // value="desc"
                  className="block input-bordered border mb-2 mx-auto w-full  p-1 text-sm rounded-none focus:border-none"
                  placeholder="Description..."
                  required
                ></textarea>

                <div className="flex justify-around pt-6">
                  <button
                    type="submit"
                    className="bg-[#5e2006] px-4 py-1 font-bold text-white "
                  >
                    Save
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

export default AddEvent;
