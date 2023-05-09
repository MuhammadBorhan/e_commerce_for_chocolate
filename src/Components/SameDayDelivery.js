import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SameDayDelivery = () => {
  const [user, setUser] = useState({});
  console.log("user", user);
  useEffect(() => {
    fetch("http://localhost:5000/api/v1/me", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUser(data?.data));
  }, []);
  return (
    <div className="pb-12 pr-4 lg:pr-12 pl-4 lg:pl-12 lg:pt-6">
      {/* <div className="py-6 text-center">
        <h3 className="text-xl lg:text-2xl font-bold">Trending Gifts</h3>
        <p>Handpicked for your gifting needs</p>
      </div> */}
      <div className="">
        <div
          className="flex justify-between pb-2 mb-2"
          style={{ borderBottom: "1px solid gray" }}
        >
          <h6>Same Day Delivery {user?.email}</h6>
          <Link
            to="/same-day-delivery-gifts"
            style={{ textDecoration: "none", color: "gray" }}
          >
            View All
          </Link>
        </div>

        {/* images for desktop device */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-6 ">
            <img
              src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/products/p-royal-purple-chocolate-bouquet-178336-m.jpg"
              style={{ width: "200px", borderRadius: "0 0 10px 10px" }}
            />
            <img
              src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/products/p-chocolaty-goodness-191630-m.jpg"
              style={{ width: "200px", borderRadius: "0 0 10px 10px" }}
            />
            <img
              src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/products/p-rochers-galore-gift-178334-m.jpg"
              style={{ width: "200px", borderRadius: "0 0 10px 10px" }}
            />
            <img
              src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/products/p-premium-couverture-chocolate-hamper-191990-m.jpg"
              style={{ width: "200px", borderRadius: "0 0 10px 10px" }}
            />
            <img
              src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/products/p-chocolates-aplenty-gift-tray-170162-m.jpg"
              style={{ width: "200px", borderRadius: "0 0 10px 10px" }}
            />
            <img
              src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/products/p-health-conscious-gourmet-box-203911-m.jpg"
              style={{ width: "200px", borderRadius: "0 0 10px 10px" }}
            />
          </div>
        </div>

        {/* images for mobile device */}
        <div className="grid grid-cols-3 gap-2 lg:hidden">
          <img
            src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/products/p-royal-purple-chocolate-bouquet-178336-m.jpg"
            style={{ width: "150px", borderRadius: "0 0 10px 10px" }}
          />
          <img
            src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/products/p-chocolaty-goodness-191630-m.jpg"
            style={{ width: "150px", borderRadius: "0 0 10px 10px" }}
          />
          <img
            src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/products/p-rochers-galore-gift-178334-m.jpg"
            style={{ width: "150px", borderRadius: "0 0 10px 10px" }}
          />
          <img
            src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/products/p-premium-couverture-chocolate-hamper-191990-m.jpg"
            style={{ width: "150px", borderRadius: "0 0 10px 10px" }}
          />
          <img
            src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/products/p-chocolates-aplenty-gift-tray-170162-m.jpg"
            style={{ width: "150px", borderRadius: "0 0 10px 10px" }}
          />
          <img
            src="https://cdn.igp.com/f_auto,q_auto,t_pnopt5prodlp/products/p-health-conscious-gourmet-box-203911-m.jpg"
            style={{ width: "150px", borderRadius: "0 0 10px 10px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default SameDayDelivery;
