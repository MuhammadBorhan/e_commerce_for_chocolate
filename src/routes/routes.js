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
import UpdateRegionDistrict from "../Pages/Dashboard/UpdateRegionDistrict/UpdateRegionDistrict";
import UpdateBrand from "../Pages/Dashboard/BrandProducts/UpdateBrand";
import UpdateGiftBox from "../Pages/Dashboard/GiftBox/UpdateGiftBox";
import UpdateEvent from "../Pages/Dashboard/Event/UpdateEvent";
import AllVisitors from "../Pages/Dashboard/AllUsers/AllVisitors";
import AddToCart from "../Pages/AddToCart/AddToCart";
import AddBlankBox from "../Pages/Dashboard/BlankBox/AddBlankBox";
import BlankBoxList from "../Pages/Dashboard/BlankBox/BlankBoxList";
import UpdateBlankBox from "../Pages/Dashboard/BlankBox/UpdateBlankBox";
import UserDashboard from "../Pages/UserDashboard/UserDashboard";
import DashbordHome from "../Pages/UserDashboard/DashbordHome";
import Order from "../Pages/UserDashboard/Order/Order";
import RequireAuth from "../Components/PrivateRoute/RequireAuth";
import Checkout from "../Pages/Checkout/Checkout";
import ShippingAddress from "../Pages/UserDashboard/ShippingAddress/ShippingAddress";
import Payment from "../Pages/UserDashboard/Payment/Payment";
import DashboardAuth from "../Components/PrivateRoute/DashboardAuth/DashboardAuth";

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
        path: "/addtocart/:name",
        element: <AddToCart />,
      },
      {
        path: "/checkout",
        element: (
          <RequireAuth>
            <Checkout />
          </RequireAuth>
        ),
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
            element: (
              <DashboardAuth allowedRoles={["admin"]}>
                <Dashboard />
              </DashboardAuth>
            ),
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
            path: "/dashboard/updateregionlist/:id",
            element: <UpdateRegionDistrict />,
          },
          {
            path: "/dashboard/alluser",
            element: <AllUsers />,
          },
          {
            path: "/dashboard/visitor",
            element: <AllVisitors />,
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
            path: "/dashboard/updatebrand/:id",
            element: <UpdateBrand />,
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
            path: "/dashboard/updategiftboxitem/:id",
            element: <UpdateGiftBox />,
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
          {
            path: "/dashboard/updateevent/:id",
            element: <UpdateEvent />,
          },
          {
            path: "/dashboard/addblankbox",
            element: <AddBlankBox />,
          },
          {
            path: "/dashboard/blanklist",
            element: <BlankBoxList />,
          },
          {
            path: "/dashboard/updateBlankBox/:id",
            element: <UpdateBlankBox />,
          },
        ],
      },
      {
        path: "/user/dashboard",
        element: (
          <DashboardAuth allowedRoles={["user"]}>
            <UserDashboard />
          </DashboardAuth>
        ),
        children: [
          {
            path: "/user/dashboard",
            element: <DashbordHome />,
          },
          {
            path: "/user/dashboard/order-history",
            element: <Order />,
          },
          {
            path: "/user/dashboard/shipping-address",
            element: <ShippingAddress />,
          },
          {
            path: "/user/dashboard/payment",
            element: <Payment />,
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
