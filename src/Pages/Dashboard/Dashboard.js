import React from "react";
import { useGetAllUserQuery } from "../../features/api/loginApi";
import { useGetAllProductsQuery } from "../../features/api/productsApi";
import { useGetAllRegionQuery } from "../../features/api/regionApi";

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
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 text-center">
      <div className="card bg-success text-success-content rounded-sm shadow-xl">
        <div className="card-body ">
          <h2 className="text-2xl font-bold">Total User {users?.length}</h2>
        </div>
      </div>
      <div className="card bg-primary text-primary-content rounded-sm shadow-xl">
        <div className="card-body ">
          <h2 className="text-2xl font-bold">
            Total Products {products?.length}
          </h2>
        </div>
      </div>
      <div className="card bg-secondary text-secondary-content rounded-sm shadow-xl">
        <div className="card-body ">
          <h2 className="text-2xl font-bold">Total Region {regions?.length}</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
