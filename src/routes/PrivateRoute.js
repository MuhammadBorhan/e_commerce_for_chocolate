import React from 'react';
import { useGetUserQuery } from '../features/api/loginApi';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { data,isLoading } = useGetUserQuery();
    const user = data?.data;
    const location = useLocation()

    if (isLoading) {
        return (
          <div className="flex flex-col items-center mt-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
            {/* <p className="mt-4 text-gray-900">Loading...</p> */}
          </div>
        );
      }

    if(user && user?._id){
        return children;
    }
    return <Navigate to='/login' state={{from: location}}  replace></Navigate>
}

export default PrivateRoute;