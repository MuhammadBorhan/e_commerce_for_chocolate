import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import {
  useGetAllTrendGiftQuery,
  useRemoveTrendGiftMutation,
} from "../../../features/api/trendingGift";
import { toast } from "react-toastify";

const TrendingGiftList = () => {
  const { data } = useGetAllTrendGiftQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const trendingGift = data?.data;

  const [removeTrending] = useRemoveTrendGiftMutation();

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you want do delete?");
    if (confirm) {
      removeTrending(id);
      toast.success("Delete Successfull!!");
    }
  };
  return (
    <div className="p-8">
      <h1 className="mb-4 text-blue-500 font-bold">Trending Gift List</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>SL. No</th>
              <th>Brand</th>
              <th>Region</th>
              <th>District</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {trendingGift?.map((trend, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{trend?.brand}</td>
                <td>{trend?.region}</td>
                <td>{trend?.district}</td>
                <td>
                  <button
                    className="text-blue-500"
                    style={{ width: "40px", fontSize: "25px" }}
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={(e) => handleDelete(trend?._id)}
                    className="text-red-500"
                    style={{ width: "40px", fontSize: "25px" }}
                  >
                    <AiTwotoneDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TrendingGiftList;
