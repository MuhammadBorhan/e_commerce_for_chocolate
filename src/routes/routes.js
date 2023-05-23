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
import Dashboard from "../Pages/Dashboard/Dashboard";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AddBrand from "../Pages/Dashboard/BrandProducts/AddBrand";
import NewAddRegion from "../Pages/Dashboard/AddRegion/AddRegion";
import AddProdusts from "../Pages/Dashboard/AddProducts/AddProducts";
import AddGiftItems from "../Pages/Dashboard/GiftBox/AddGiftItems";
import RegionList from "../Pages/Dashboard/AddRegion/RegionList";
import AddEvent from "../Pages/Dashboard/Event/AddEvent";
import ProductList from "../Pages/Dashboard/ProductList/ProductList";
import AddTrendingGift from "../Pages/Dashboard/TrendingGift/AddTrendingGift";
import BrandList from "../Pages/Dashboard/BrandProducts/BrandList";
import EventList from "../Pages/Dashboard/Event/EventList";
import GiftItemList from "../Pages/Dashboard/GiftBox/GiftItemList";
import TrendingGiftList from "../Pages/Dashboard/TrendingGift/TrendingGiftList";
import UpdateProducts from "../Pages/Dashboard/UpdateProducts/UpdateProducts";

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
            path: "/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/dashboard/addregion",
            element: <NewAddRegion />,
          },
          {
            path: "/dashboard/regionlist",
            element: <RegionList />,
          },
          {
            path: "/dashboard/alluser",
            element: <AllUsers />,
          },
          {
            path: "/dashboard/addbrand",
            element: <AddBrand />,
          },
          {
            path: "/dashboard/brandlist",
            element: <BrandList />,
          },
          {
            path: "/dashboard/addproduct",
            element: <AddProdusts />,
          },
          {
            path: "/dashboard/allproduct",
            element: <ProductList />,
          },
          {
            path: "/dashboard/updateproductlist/:id",
            element: <UpdateProducts />,
          },
          {
            path: "/dashboard/addgiftitem",
            element: <AddGiftItems />,
          },
          {
            path: "/dashboard/giftitemlist",
            element: <GiftItemList />,
          },
          {
            path: "/dashboard/addtgift",
            element: <AddTrendingGift />,
          },
          {
            path: "/dashboard/trendgiftlist",
            element: <TrendingGiftList />,
          },
          {
            path: "/dashboard/addevent",
            element: <AddEvent />,
          },
          {
            path: "/dashboard/eventlist",
            element: <EventList />,
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
