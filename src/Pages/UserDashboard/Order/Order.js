import React, { useEffect, useState } from "react";

const Order = () => {
  const [orders,setOrders] = useState([])
  useEffect(()=>{
    fetch('http://localhost:5003/api/v1/orders')
    .then(res=>res.json())
    .then(data=>setOrders(data?.data))
  },[])
  
  return (
    <div>
      <div className="p-8">
        <div className="overflow-x-auto">
          <h2 className="text-xl font-bold mt-2">Your Order</h2>
          <table className="table w-full mt-2">
            {/* head */}
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Amount</th>
                <th>Quantity</th>
                <th>Gift Box Image</th>
                <th>Blank Box Image</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>
              {orders?.map((order, index) => {
                return (
                  <tr key={index}>
                    <th>{index + 1}</th>
                    <td>{order?.amount}</td>
                    <td>{order?.quantity}</td>
                    <td>
                      <img
                        src={`http://localhost:5003/${order?.logo}`}
                        className="w-16"
                      />
                    </td>
                    <td>
                      <img
                        src={`http://localhost:5003/${order?.image}`}
                        className="w-32"
                      />
                    </td>

                    {/* <td>
                      {" "}
                      <button
                        className="text-blue-500"
                        style={{ width: "40px", fontSize: "25px" }}
                      >
                        <Linl to={`/dashboard/updatebrand/${brand?._id}`}>
                          <FaEdit />
                        </Link>
                      </button>
                      <button
                        onClick={() => handleDelete(brand?._id)}
                        className="text-red-500"
                        style={{ width: "40px", fontSize: "25px" }}
                      >
                        <AiTwotoneDelete />
                      </button>
                    </td> */}
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

export default Order;
