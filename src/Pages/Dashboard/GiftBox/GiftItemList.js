import React from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import {
  useGetAllGiftBoxQuery,
  useGetAllSelectGiftBoxQuery,
  useRemoveGiftBoxMutation,
} from "../../../features/api/GiftBoxApi";
import { toast } from "react-toastify";
import axios from "axios";
import { Link } from "react-router-dom";
import DashBoardMenu from "../../../Components/DashBoardMenu/DashBoardMenu";

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

  const { data: getSelectGiftBox } = useGetAllSelectGiftBoxQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const selectGiftBox = getSelectGiftBox?.data;

  const filtering = allGiftBox?.filter((abox) => {
    return selectGiftBox?.some((sbox) => sbox?._id === abox?._id);
  });

  const maping = filtering?.find((fltr) => fltr);

  // enable or disable
  const handleToggle = async (id, isEnabled) => {
    try {
      const response = await axios.patch(
        `http://localhost:5003/api/v1/selectgiftbox/${id}`,
        {
          isEnabled: !isEnabled,
        }
      );
      if (response) {
        setTimeout(() => {
          window.location.reload();
        }, 50);
      }
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  return (
    <div>
      <DashBoardMenu></DashBoardMenu>
      <div className="p-8">
        <h1 className="mb-4 text-blue-500 font-bold">Gift Box List</h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th>SL. No</th>
                <th>Gift_name</th>
                <th>Box Image</th>
                <th>Products</th>
                <th>Brand</th>
                <th>Festival</th>
                <th>Branding Item</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allGiftBox?.map((box, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{box?.name}</td>
                    <td>
                      <img
                        src={`http://localhost:5003/${box?.image}`}
                        className="w-16"
                      />
                    </td>
                    <td>
                      <select className="  rounded-none focus:border-none ">
                        {box?.productList?.map((product, index) => (
                          <option key={index}>{product}</option>
                        ))}
                      </select>
                    </td>
                    <td>{box?.brand}</td>
                    <td>{box?.festival}</td>
                    <td>
                      <button
                        onClick={() => handleToggle(box._id, box.isEnabled)}
                        className={`${
                          box.isEnabled === true
                            ? "bg-red-500 px-2 py-1 text-white font-bold rounded"
                            : "bg-green-500 px-2 py-1 text-white font-bold rounded"
                        }`}
                      >
                        {box.isEnabled ? "Disable" : "Enable"}
                      </button>
                    </td>
                    <td>
                      <button
                        className="text-blue-500"
                        style={{ width: "40px", fontSize: "25px" }}
                      >
                        <Link to={`/dashboard/updategiftboxitem/${box?._id}`}>
                          {" "}
                          <FaEdit />
                        </Link>
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
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default GiftItemList;
