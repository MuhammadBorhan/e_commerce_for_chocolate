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
import Dhaka from "../Pages/TrendingGifts/Dhaka";
import Chittagong from "../Pages/TrendingGifts/Chittagong";
import Comilla from "../Pages/TrendingGifts/Comilla";
import Rajshahi from "../Pages/TrendingGifts/Rajshahi";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "/dhaka",
            element: <Dhaka />,
          },
          {
            path: "/chittagong",
            element: <Chittagong />,
          },
          {
            path: "/comilla",
            element: <Comilla />,
          },
          {
            path: "/rajshahi",
            element: <Rajshahi />,
          },
        ],
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
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
