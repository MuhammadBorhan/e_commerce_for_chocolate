import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import {
  useGetAllGiftBoxQuery,
  useRemoveGiftBoxMutation,
} from "../../../features/api/GiftBoxApi";
import { toast } from "react-toastify";

const GiftItemList = () => {
  const { data: giftBoxs } = useGetAllGiftBoxQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const allGiftBox = giftBoxs?.data;
  const [removeBox] = useRemoveGiftBoxMutation();

  const handleDelete = (id) => {
    const confirm = window.confirm("Are you want do delete?");
    if (confirm) {
      removeBox(id);
      toast.success("Delete Successfull!!");
    }
  };
  return (
    <div className="p-8">
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>SL. No</th>
              <th>Gift_name</th>
              <th>Box Image</th>
              <th>Products</th>
              <th>Brand</th>
              <th>Branding Item</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allGiftBox?.map((box, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{box?.boxName}</td>
                <td>
                  <img src={box?.boxImage} className="w-16" />
                </td>
                <td>
                  <select className="  rounded-none focus:border-none ">
                    {box?.productList?.map((product, index) => (
                      <option key={index}>{product}</option>
                    ))}
                  </select>
                </td>
                <td>{box?.brandName}</td>
                <td>yes or not</td>
                <td>
                  <button
                    className="text-blue-500"
                    style={{ width: "40px", fontSize: "25px" }}
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={(e) => handleDelete(box?._id)}
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

export default GiftItemList;
