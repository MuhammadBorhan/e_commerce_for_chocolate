import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Cog6ToothIcon, PowerIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  MdDashboard,
  MdOutlineSubscriptions,
  MdOutlineLocalShipping,
} from "react-icons/md";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { RiFileList3Line, RiMoneyCnyBoxLine } from "react-icons/ri";

// import { useGetUserQuery } from "../../features/api/loginApi";

const Sidebar = () => {
  // const { data } = useGetUserQuery();
  // const users = data?.data;

  const location = useLocation();
  const { pathname } = location;
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <div className="drawer drawer-mobile bg-slate-50 ">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <Outlet />
      </div>
      <div className="drawer-side shadow-lg shadow-indigo-500/40">
        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
        <Card className=" menu p-4 w-60 bg-slate-50 text-yellow-800">
          <List>
           <Link to='/user/dashboard'>
           <ListItem
              className={`${
                pathname === "/user/dashboard"
                  ? "bg-[#9A583B] text-white font-bold"
                  : ""
              }`}
            >
              <ListItemPrefix>
                <MdDashboard className="h-5 w-5" />
              </ListItemPrefix>
              Dashboard
            </ListItem>
           </Link>
            {/* <ListItem className="  menu bg-[#9A583B]  rounded-md shadow-xl mb-4 p-4 border-t-[1px]">
              <ListItemPrefix className="flex justify-between items-center text-white">
                <MdDashboard className="h-5 w-5" />
              </ListItemPrefix>
              <div className="text-white font-bold">Dashborad</div>
            </ListItem> */}

            {/* Order History  */}
            <Link
              to="/user/dashboard/order-history"
              className="flex items-center gap-x-1"
            >
              <ListItem
                className={`${
                  pathname === "/user/dashboard/order-history"
                    ? "bg-[#9A583B] text-white font-bold"
                    : ""
                }`}
              >
                <ListItemPrefix>
                  <AiOutlineUnorderedList className="h-5 w-5" />
                </ListItemPrefix>
                Order History
              </ListItem>
            </Link>

            {/*Shipping Address */}
            <Link
              to="/user/dashboard/shipping-address"
              className="flex items-center gap-x-1"
            >
              <ListItem
                className={`${
                  pathname === "/user/dashboard/shipping-address"
                    ? "bg-[#9A583B] text-white font-bold"
                    : ""
                }`}
              >
                <ListItemPrefix>
                  <MdOutlineLocalShipping className="h-5 w-5" />
                </ListItemPrefix>
                Shipping Address
              </ListItem>
            </Link>

            {/* Payment  */}
            <Link
              to="/user/dashboard/payment"
              className="flex items-center gap-x-1"
            >
              <ListItem
              className={`${
                pathname === "/user/dashboard/payment"
                  ? "bg-[#9A583B] text-white font-bold"
                  : ""
              }`} 
              >
                <ListItemPrefix>
                  <RiMoneyCnyBoxLine className="h-5 w-5" />
                </ListItemPrefix>
                Payment Method
              </ListItem>
            </Link>
            <Link
              to="/user/dashboard/order-history"
              className="flex items-center gap-x-1"
            >
              <ListItem 
              className={`${
                pathname === "/user/dashboard/wishlist"
                  ? "bg-[#9A583B] text-white font-bold"
                  : ""
              }`}
              >
                <ListItemPrefix>
                  <RiFileList3Line className="h-5 w-5" />
                </ListItemPrefix>
                Wish List
              </ListItem>
            </Link>
            {/* <Link to="/user/dashboard/subscription">
              <ListItem>
                <button
                  className={`${
                    pathname === "/user/dashboard/subscription"
                      ? "bg-blue-600 text-white"
                      : "bg-yellow-900 text-slate-50"
                  } mt-2 btn btn-outline hover:bg-slate-100 outline-none hover:outline-none hover:text-yellow-900 hover:border-none border-none `}
                >
                  Add Subscription
                </button>
              </ListItem>
            </Link> */}
            <Accordion
              open={open === 1}
              icon={
                <ChevronDownIcon
                  strokeWidth={3}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 1 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <MdOutlineSubscriptions className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Subscription
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1 overflow-hidden">
                <List className="p-0">
                  <Link to="/user/dashboard/subscription">
                    <ListItem>
                      <ListItemPrefix>
                        <ChevronDownIcon strokeWidth={3} className="h-3 w-5" />
                      </ListItemPrefix>
                      <button>Add Subscription</button>
                    </ListItem>
                  </Link>
                </List>
              </AccordionBody>
            </Accordion>
            <ListItem>
              <ListItemPrefix>
                <Cog6ToothIcon className="h-5 w-5" />
              </ListItemPrefix>
              Settings
            </ListItem>

            <ListItem>
              <ListItemPrefix>
                <TbLogout className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
        </Card>
      </div>
    </div>
  );
};
export default Sidebar;
