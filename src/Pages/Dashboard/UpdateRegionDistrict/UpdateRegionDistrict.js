import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

const UpdateRegionDistrict = () => {
  const { id } = useParams();
  const [region, setRegion] = useState("");
  const [district, setDistricts] = useState([]);
  console.log(region, district);

  const [regionDistrict, setRegionDistrict] = useState({});
  useEffect(() => {
    const url = `http://localhost:4000/api/v1/region/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setRegionDistrict(data?.data);
        setRegion(data?.data?.region);
        // setDistricts(data?.data?.district);
      });
  }, [id]);

  const getDistrict = regionDistrict?.district;
  const handleDistrictChange = (index, value, dis) => {
    console.log(index, value);
    dis = value;
    console.log(dis);
    // const updatedDistrict = [...district];
    // updatedDistrict[index] = value;
    setDistricts(dis);
  };

  const handleSubmitDist = async (e) => {
    e.preventDefault();

    const newDistrictData = {
      // region: region ? region : regionDistrict?.region,
      region,
      district,
      // district,
    };
    console.log(newDistrictData);
    try {
      const res = await axios.patch(
        `http://localhost:4000/api/v1/region/${id}`,
        newDistrictData
      );

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="p-8">
      <div className="flex justify-center overflow-auto items-center mt-12">
        <div
          className="card bg-base-100 overflow-auto mb-12 rounded-none"
          style={{ boxShadow: "1px 0px 3px 1px lightblue" }}
        >
          <div className="card-body">
            <div className="text-center">
              <h2 className="text-xl font-bold">Update Region And District</h2>
            </div>
            <form onSubmit={handleSubmitDist}>
              <div className="grid grid-cols-1  my-2">
                <input
                  type="text"
                  defaultValue={regionDistrict.region}
                  onChange={(e) => setRegion(e.target.value)}
                  placeholder="Region"
                  className="input input-bordered h-8 rounded-none focus:border-none w-full max-w-xs"
                />
              </div>

              <div>
                <h1 className="text-xl font-bold my-2">District</h1>
                {getDistrict?.map((district, index) => (
                  <div className="flex flex-col items-center gap-2" key={index}>
                    <input
                      type="text"
                      defaultValue={district}
                      onChange={(e) =>
                        handleDistrictChange(index, e.target.value, district)
                      }
                      placeholder="District"
                      className="input input-bordered h-8 rounded-none focus:border-none mt-2 w-full max-w-xs"
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-around pt-6">
                {/* <button
                  type="button"
                  onClick={handleAddDistrict}
                  className="bg-green-500 px-2 py-1 font-bold text-white"
                >
                  Add
                </button> */}

                <button
                  type="submit"
                  className="bg-blue-500 px-2 py-1 font-bold text-white "
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateRegionDistrict;
