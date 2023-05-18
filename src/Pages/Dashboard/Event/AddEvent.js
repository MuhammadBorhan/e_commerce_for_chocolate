import axios from "axios";
import { format } from "date-fns";
import { useState } from "react";
import { DayPicker } from "react-day-picker";

const AddEvent = () => {
  const [title, setTitle] = useState("");
  const [dateTime, setDateTime] = useState();
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");
  const [brand, setBrand] = useState("");
  const [status, setStatus] = useState("");
  const [gMeet, setGMeet] = useState("");
  const [desc, setDesc] = useState("");
  const [selected, setSelected] = useState(new Date());

  const handleDate = (e) => {
    console.log(e);
  };

  const handleSubmitEvent = async (e) => {
    e.preventDefault();

    const data = {
      title,
      selected,
      region,
      district,
      brand,
      status,
      gMeet,
      desc,
    };
    console.log(data);
    try {
      await axios.post("http://localhost:4000/api/v1/event", data);

      // Reset the form inputs
      setTitle("");
      setDateTime("");
      setRegion("");
      setDistrict("");
      setBrand("");
      setGMeet("");
      setDesc("");

      // Handle success or show a success message
    } catch (error) {
      console.log(error);
      // Handle error or show an error message
    }
  };
  return (
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
                  <option>Dhaka</option>
                  <option>Cumilla</option>
                  <option>Chittagong</option>
                  <option>Tangail</option>
                </select>
                <select
                  onChange={(e) => setDistrict(e.target.value)}
                  className="border h-8 rounded-none focus:border-none w-full max-w-xs mx-auto"
                >
                  <option disabled selected>
                    Select District
                  </option>
                  <option>MohammadPur</option>
                  <option>Laksam</option>
                  <option>Agrabaad</option>
                  <option>Mirzapur</option>
                </select>
                <select
                  onChange={(e) => setBrand(e.target.value)}
                  className="border h-8 rounded-none focus:border-none w-full max-w-xs mx-auto"
                >
                  <option disabled selected>
                    Select Brand
                  </option>
                  <option>Godiva</option>
                  <option>Kitkat</option>
                  <option>Guylian</option>
                  <option>Cudbery</option>
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
                  <option>Start</option>
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
                  <DayPicker
                    mode="single"
                    selected={selected}
                    onSelect={setSelected}
                    onChange={(e) => handleDate(e)}
                  />
                  <p className="text-red-700 text-center text-2xl mt-2">
                    Our Event Date is: {format(selected, "PPpp")}
                  </p>
                </div>
              </div>
              <textarea
                onChange={(e) => setDesc(e.target.value)}
                rows="8"
                // value="desc"
                className="block input-bordered mb-2 mx-auto w-2/4  px-0 text-sm rounded-none focus:border-none"
                placeholder="Description..."
                required
              ></textarea>

              <div className="flex justify-around pt-6">
                <button
                  type="submit"
                  className="bg-[#5e2006] px-2 py-1 font-bold text-white "
                >
                  Save
                </button>
              </div>
            </form>
          }
        </div>
      </div>
    </div>
  );
};

export default AddEvent;
