import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import NotFound from "../Pages/NotFound";
import DeliveryGifts from "../Pages/DeliveryGifts";
import DeliveryGiftsDetails from "../Pages/DeliveryGiftsDetails";

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
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
