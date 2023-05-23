import React, { useEffect, useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import {
  useGetAllGiftBoxQuery,
  useGetAllSelectGiftBoxQuery,
  useRemoveGiftBoxMutation,
} from "../../../features/api/GiftBoxApi";
import { toast } from "react-toastify";
import axios from "axios";

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

  const handleSave = async (data) => {
    try {
      await axios.post(
        "https://andy-chocolate-production.up.railway.app/api/v1/selectgiftbox",
        data
      );
      toast.success("Gift-Box Added Succfess!!!");
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.error);
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

  const handleCancel = (id) => {
    fetch(
      `https://andy-chocolate-production.up.railway.app/api/v1/selectgiftbox/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
    toast.error("Remove Success.");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  return (
    <div className="p-8">
      <h1 className="mb-4 text-blue-500 font-bold">Gift Box List</h1>
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
            {allGiftBox?.map((box, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{box?.name}</td>
                  <td>
                    <img
                      src={`https://andy-chocolate-production.up.railway.app/${box?.image}`}
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
                  <td>
                    {maping?._id === box?._id ? (
                      <button
                        onClick={() => handleCancel(box?._id)}
                        className="mr-4 btn btn-error btn-xs text-white"
                      >
                        No
                      </button>
                    ) : (
                      <button
                        onClick={() => handleSave(box)}
                        className={`btn btn-primary btn-xs text-white`}
                      >
                        Yes
                      </button>
                    )}
                  </td>
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
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GiftItemList;
