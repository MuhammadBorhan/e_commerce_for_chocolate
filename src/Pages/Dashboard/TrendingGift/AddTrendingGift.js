import axios from "axios";
import { useState } from "react";

const AddTrendingGift = () => {
  const [brand, setBrand] = useState("");
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");

  const handleTrendGift = async (e) => {
    e.preventDefault();

    const data = {
      brand,
      region,
      district,
    };
    console.log(data);
    try {
      await axios.post("http://localhost:4000/api/v1/trendgift", data);

      // Reset the form inputs
      setBrand("");
      setRegion("");
      setDistrict("");

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
            <h2 className="text-xl font-bold">Add Product</h2>
          </div>
          {
            <form onSubmit={handleTrendGift} className="text-center">
              <div className=" ">
                <select
                  onChange={(e) => setBrand(e.target.value)}
                  // value="brand"
                  className="border h-8 rounded-none focus:border-none w-full max-w-xs mx-auto mb-2"
                >
                  <option disabled selected>
                    Select Brand
                  </option>
                  <option>Godiva</option>
                  <option>Kitkat</option>
                  <option>Guylian</option>
                  <option>Cudbery</option>
                </select>
              </div>

              <select
                onChange={(e) => setRegion(e.target.value)}
                className="border h-8 rounded-none focus:border-none w-full max-w-xs mx-auto mb-2"
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
                className="border h-8 rounded-none focus:border-none w-full max-w-xs mx-auto mb-2"
              >
                <option disabled selected>
                  Select District
                </option>
                <option>MohammadPur</option>
                <option>Laksam</option>
                <option>Agrabaad</option>
                <option>Mirzapur</option>
              </select>

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

export default AddTrendingGift;
