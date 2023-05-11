import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import NotFound from "../Pages/NotFound";
import DeliveryGifts from "../Pages/DeliveryGifts";
import DeliveryGiftsDetails from "../Pages/DeliveryGiftsDetails";
import CartProducts from "../Pages/CartProduct/CartProducts";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import BrandsItem from "../Pages/BrandsItem/BrandsItem";
import DashboardLayout from "../Layout/DashboardLayout";
// import Dashboard from "../Pages/Dashboard/Dashboard";
import AddRegion from "../Pages/Dashboard/AddRegion/AddRegion";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddBrand from "../Pages/Dashboard/AddBrand/AddBrand";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/brands/:name",
        element: <BrandsItem />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/same-day-delivery-gifts",
        element: <DeliveryGifts />,
      },
      {
        path: "/delivery/:name",
        element: <DeliveryGiftsDetails />,
      },
      {
        path: "/carts",
        element: <CartProducts />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "/dashboard/addregion",
            element: <AddRegion />,
          },
          {
            path: "/dashboard/alluser",
            element: <AllUsers />,
          },
          {
            path: "/dashboard/addbrand",
            element: <AddBrand />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
