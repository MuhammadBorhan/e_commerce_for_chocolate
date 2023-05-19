import React from "react";
import { useGetAllUserQuery } from "../../features/api/loginApi";
import { useGetAllProductsQuery } from "../../features/api/productsApi";
import { useGetAllRegionQuery } from "../../features/api/regionApi";
import { useGetAllBrandsQuery } from "../../features/api/brandApi";
import { useGetAllEventQuery } from "../../features/api/eventApi";
import { useGetAllGiftBoxQuery } from "../../features/api/GiftBoxApi";
import { useGetAllTrendGiftQuery } from "../../features/api/trendingGift";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { data, isLoading } = useGetAllUserQuery();
  const users = data?.data;

  const { data: product } = useGetAllProductsQuery();
  const products = product?.data;

  const {
    data: regionData,
    isLoading: regionLoading,
    error: regionError,
  } = useGetAllRegionQuery();
  const regions = regionData?.data;

  const { data: brands } = useGetAllBrandsQuery();
  const allBrand = brands?.data;

  const { data: events } = useGetAllEventQuery();
  const allEvent = events?.data;

  const { data: giftbox } = useGetAllGiftBoxQuery();
  const allGiftBox = giftbox?.data;

  const { data: trenitem } = useGetAllTrendGiftQuery();
  const trendItem = trenitem?.data;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 text-center">
      <div className="card bg-success text-success-content rounded-sm shadow-xl">
        <div className="card-body ">
          <h2 className="text-2xl font-bold">User {users?.length}</h2>
        </div>
      </div>
      <div className="card bg-[orange] text-success-content rounded-sm shadow-xl">
        <div className="card-body ">
          <h2 className="text-2xl font-bold">Brand {allBrand?.length}</h2>
        </div>
      </div>
      <div className="card bg-[indigo] text-white rounded-sm shadow-xl">
        <div className="card-body ">
          <h2 className="text-2xl font-bold">Gift Box {allGiftBox?.length}</h2>
        </div>
      </div>
      <Link to="/dashboard/eventlist">
        <div className="card bg-[purple] text-white rounded-sm shadow-xl">
          <div className="card-body ">
            <h2 className="text-2xl font-bold">Event {allEvent?.length}</h2>
          </div>
        </div>
      </Link>
      <div className="card bg-primary text-primary-content rounded-sm shadow-xl">
        <div className="card-body ">
          <h2 className="text-2xl font-bold">Products {products?.length}</h2>
        </div>
      </div>
      <div className="card bg-secondary text-secondary-content rounded-sm shadow-xl">
        <div className="card-body ">
          <h2 className="text-2xl font-bold">Regions {regions?.length}</h2>
        </div>
      </div>
      <div className="card bg-[tomato] text-secondary-content rounded-sm shadow-xl">
        <div className="card-body ">
          <h2 className="text-2xl font-bold">
            Trending Item {trendItem?.length}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
