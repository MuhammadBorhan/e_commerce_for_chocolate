import React from 'react';
import DashBoardMenu from '../../../Components/DashBoardMenu/DashBoardMenu';
import { AiTwotoneDelete } from 'react-icons/ai';
import { useState } from 'react';

const Affiliate = () => {
    const [toggle,setToggle] = useState(false)
    const coupons = [
        {
          _id: 1,
          couponCode: "PBGTY8",
          amount: "10",
        },
        {
          _id: 2,
          couponCode: "SAIFUR02",
          amount: "15",
        },
        {
          _id: 3,
          couponCode: "BORHAN",
          amount: "30",
        },
        {
          _id: 4,
          couponCode: "FAHAD",
          amount: "5",
        },
        {
          _id: 5,
          couponCode: "MESSI",
          amount: "40",
        },
        {
          _id: 6,
          couponCode: "ODD6H",
          amount: "50",
        },
        {
          _id: 7,
          couponCode: "HYDFF",
          amount: "75",
        },
        {
          _id: 8,
          couponCode: "ANDY",
          amount: "100",
        },
      ];
    return (
        <div>
      <DashBoardMenu></DashBoardMenu>
      <div className="p-8">
        <div className="overflow-x-auto">
          <h2 className="text-xl font-bold mt-2">Add Affiliate Coupon</h2>
          <table className="table w-full mt-2">
            {/* head */}
            <thead>
              <tr>
                <th>Sl No.</th>
                <th>Coupon Code</th>
                <th>amount(%)</th>
                {/* <th>Payment</th>
                <th>User Count</th> */}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {coupons?.map((coupon, i) => (
                <tr key={coupon._id}>
                  <th>{i + 1}</th>
                  <td>{coupon.couponCode}</td>
                  <td>{coupon.amount}</td>
                  {/* <td>{user.price}</td>
                  <td>2</td> */}
                  <td className='flex items-center'>
                  <button
                        onClick={() => setToggle(!toggle)}
                        className={`${ toggle
                            ? "bg-green-500 px-2 py-1 text-white font-bold rounded"
                            : "bg-red-500 px-2 py-1 text-white font-bold rounded"
                        }`}
                      >
                        {!toggle ? "Disable" : "Enable"}
                      </button>
                      <button
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
        <button className="btn bg-yellow-900">Add New Coupon</button>
      </div>
    </div>
    );
};

export default Affiliate;