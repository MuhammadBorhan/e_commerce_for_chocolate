import React from "react";
import DashBoardMenu from "../../../../Components/DashBoardMenu/DashBoardMenu";
import usePackage from "../../../../Components/Customhook/usePackage";
import { AiTwotoneDelete, AiOutlineFolderAdd } from "react-icons/ai";
import { FaRegEdit } from "react-icons/fa";
import CreatePackage from "./CreatePackage";
import axios from "axios";
import UpdatePackage from "./UpdatePackage";
const SubscriptionUser = () => {
  const [packages] = usePackage();

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are Your Sure?");
    if (confirm) {
      try {
        const response = await axios.delete(
          `http://localhost:5000/api/v1/package/${id}`
        );

        if (response) {
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      <DashBoardMenu></DashBoardMenu>
      <div className="p-8">
        <div className="overflow-x-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold mt-2">Manage All Package</h2>
            <CreatePackage />
          </div>
          <table className="table w-full mt-2">
            {/* head */}
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Package Name</th>
                <th>Type</th>
                <th>Payment</th>
                <th>User Count</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {packages?.map((pcg, i) => (
                <tr key={pcg._id}>
                  <th>{i + 1}</th>
                  <td>{pcg?.name}</td>
                  <td>{pcg?.type}</td>
                  <td>${pcg?.payment}</td>
                  <td>{pcg?.count}</td>
                  <td className="flex items-center gap-2">
                    <UpdatePackage pcg={pcg} />
                    <button
                      onClick={() => handleDelete(pcg?._id)}
                      className="text-red-500 flex justify-center"
                      style={{ width: "40px", fontSize: "25px" }}
                    >
                      <AiTwotoneDelete></AiTwotoneDelete>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionUser;
