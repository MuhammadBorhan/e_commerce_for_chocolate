import React from 'react';
import DashBoardMenu from '../../../Components/DashBoardMenu/DashBoardMenu';
const SubscriptionUser = () => {
//     const [subsUsers, setSubsUsers] = useState([]);
//    useEffect(()=>{
//     fetch("subscription.json")
//     .then((res)=>res.json())
//     .then((data)=>console.log(data))
//    },[])
const subsUsers = [
    {
      "_id": 1,
      "packageName": "Basic Level",
      "type":"Free",
      "price": "Free"
    },
    {
      "_id": 2,
      "packageName": "Weekly",
      "type":"Payment",
      "price": "¥30"
    },
    {
      "_id": 3,
      "packageName": "Monthly",
      "type":"Paymnet",
      "price": "¥100"
    },
    {
      "_id": 4,
      "packageName": "Yearly",
      "type":"Payment",
      "price": "¥300"
    }
    
  ]

    return (
        <div>
        <DashBoardMenu></DashBoardMenu>
        <div className="p-8">
          <div className="overflow-x-auto">
            <h2 className="text-xl font-bold mt-2">All User</h2>
            <table className="table w-full mt-2">
              {/* head */}
              <thead>
                <tr>
                  <th>Sl No.</th>
                  <th>Package Name</th>
                  <th>Type</th>
                  <th>Payment</th>
                  <th>User Count</th>
                  {/* <th>Action</th> */}
                </tr>
              </thead>
              <tbody>
                {subsUsers?.map((user, i) => (
                  <tr key={user._id}>
                    <th>{i + 1}</th>
                    <td>{user.packageName}</td>
                    <td>{user.type}</td>
                    <td>{user.price}</td>
                    <td>2</td>
                    {/* <td>
                      {" "}
                      <button
                        className="text-red-500 flex justify-center"
                        style={{ width: "40px", fontSize: "25px" }}
                      >
                        <AiTwotoneDelete></AiTwotoneDelete>
                      </button>
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button className='btn bg-yellow-900'>Add New</button>
        </div>
      </div>
    );
};

export default SubscriptionUser;