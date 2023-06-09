import axios from "axios";
import { useState } from "react";
import { useGetAllBrandsQuery } from "../../../features/api/brandApi";
import { useGetAllRegionQuery } from "../../../features/api/regionApi";
import { toast } from "react-toastify";

const AddTrendingGift = () => {
  const { data: getbrand } = useGetAllBrandsQuery();
  const allBrand = getbrand?.data;
  const { data: gregion } = useGetAllRegionQuery();
  const allRegion = gregion?.data;

  const [brand, setBrand] = useState("");
  const [region, setRegion] = useState("");
  const [district, setDistrict] = useState("");

  const selectDistrict = allRegion?.filter(
    (sregion) => sregion.region === region
  );

  const handleTrendGift = async (e) => {
    e.preventDefault();

    const data = {
      brand,
      region,
      district,
    };
    console.log(data);
    try {
      await axios.post(
        "https://andy-chocolate-productions.up.railway.app//api/v1/trendgift",
        data
      );

      // Reset the form inputs
      setBrand("");
      // setRegion("");
      // setDistrict("");

      toast.success("Successfully Added");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div className="p-8">
      <h1 className="mb-4 text-blue-500 font-bold">Add Trending Gift</h1>
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
                    {allBrand?.map((brand) => (
                      <option key={brand._id}>{brand?.name}</option>
                    ))}
                  </select>
                </div>

                <select
                  onChange={(e) => setRegion(e.target.value)}
                  className="border h-8 rounded-none focus:border-none w-full max-w-xs mx-auto mb-2"
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
                  className="border h-8 rounded-none focus:border-none w-full max-w-xs mx-auto mb-2"
                >
                  <option disabled selected>
                    Select District
                  </option>
                  {selectDistrict?.[0]?.district?.map((dst, i) => (
                    <option key={i}>{dst}</option>
                  ))}
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
    </div>
  );
};

export default AddTrendingGift;
