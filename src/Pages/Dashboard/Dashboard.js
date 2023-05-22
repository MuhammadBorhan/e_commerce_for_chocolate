import React, { useState } from "react";
import { useGetAllUserQuery } from "../../features/api/loginApi";
import { useGetAllProductsQuery } from "../../features/api/productsApi";
import { useGetAllRegionQuery } from "../../features/api/regionApi";
import { useGetAllBrandsQuery } from "../../features/api/brandApi";
import { useGetAllEventQuery } from "../../features/api/eventApi";
import { useGetAllGiftBoxQuery } from "../../features/api/GiftBoxApi";
import { useGetAllTrendGiftQuery } from "../../features/api/trendingGift";
import { Link } from "react-router-dom";
import { HiOutlineUsers } from "react-icons/hi";
import { SiBrandfolder } from "react-icons/si";
import { BsCalendarEvent, BsGift } from "react-icons/bs";
import { TbGiftCard } from "react-icons/tb";
import { RiProductHuntLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";

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
      <Link to="/dashboard/alluser">
        <div className="flex justify-between p-4 justify-items-center bg-slate-100 text-success-content rounded-sm shadow-xl ">
          <div className="avatar placeholder">
            <div className="bg-gradient-to-r from-yellow-800 to-amber-700 text-neutral-content rounded-full w-8">
              <span className="text-xl">
                <HiOutlineUsers></HiOutlineUsers>
              </span>
            </div>
          </div>
          <div>
            <p className="text-xl font-bold">User {users?.length}</p>
          </div>
        </div>
      </Link>

      <Link to="/dashboard/brandlist">
        <div className="flex justify-between p-4 justify-items-center bg-slate-100 text-success-content rounded-sm shadow-xl">
          <div className="avatar placeholder">
            <div className="bg-gradient-to-r from-yellow-800 to-amber-700 text-neutral-content rounded-full w-8">
              <span className="text-xl">
                <SiBrandfolder />
              </span>
            </div>
          </div>
          <div>
            <p className="text-xl font-bold">Total Brand {allBrand?.length}</p>
          </div>
        </div>
      </Link>

      <Link to="/dashboard/giftitemlist">
        <div className="flex justify-between p-4 justify-items-center bg-slate-100 text-success-content rounded-sm shadow-xl">
          <div className="avatar placeholder">
            <div className="bg-gradient-to-r from-yellow-800 to-amber-700 text-neutral-content rounded-full w-8">
              <span className="text-xl">
                <BsGift />
              </span>
            </div>
          </div>
          <div>
            <p className="text-xl font-bold">
              Total Gift Box {allGiftBox?.length}
            </p>
          </div>
        </div>
      </Link>

      <Link to="/dashboard/eventlist">
        <div className="flex justify-between p-4 justify-items-center bg-slate-100 text-success-content rounded-sm shadow-xl">
          <div className="avatar placeholder">
            <div className="bg-gradient-to-r from-yellow-800 to-amber-700 text-neutral-content rounded-full w-8">
              <span className="text-xl">
                <BsCalendarEvent />
              </span>
            </div>
          </div>
          <div>
            <p className="text-xl font-bold">Total Event {allEvent?.length}</p>
          </div>
        </div>
      </Link>

      <Link to="/dashboard/allproduct">
        <div className="flex justify-between p-4 justify-items-center bg-slate-100 text-success-content rounded-sm shadow-xl">
          <div className="avatar placeholder">
            <div className="bg-gradient-to-r from-yellow-800 to-amber-700 text-neutral-content rounded-full w-8">
              <span className="text-xl">
                <RiProductHuntLine />
              </span>
            </div>
          </div>
          <div>
            <p className="text-xl font-bold">
              Total Products {products?.length}
            </p>
          </div>
        </div>
      </Link>

      <Link to="/dashboard/regionlist">
        <div className="flex justify-between p-4 justify-items-center bg-slate-100 text-success-content rounded-sm shadow-xl">
          <div className="avatar placeholder">
            <div className="bg-gradient-to-r from-yellow-800 to-amber-700 text-neutral-content rounded-full w-8">
              <span className="text-xl">
                <CiLocationOn />
              </span>
            </div>
          </div>
          <div>
            <p className="text-xl font-bold">Total Regions {regions?.length}</p>
          </div>
        </div>
      </Link>

      <Link to="/dashboard/trendgiftlist">
        <div className="flex justify-between p-4 justify-items-center bg-slate-100 text-success-content rounded-sm shadow-xl">
          <div className="avatar placeholder">
            <div className="bg-gradient-to-r from-yellow-800 to-amber-700 text-neutral-content rounded-full w-8">
              <span className="text-xl">
                <TbGiftCard />
              </span>
            </div>
          </div>
          <div>
            <p className="text-xl font-bold">Trend Gifts {trendItem?.length}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Dashboard;
