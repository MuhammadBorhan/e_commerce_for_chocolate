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
import { MdDashboard } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { SiBrandfolder } from "react-icons/si";
import { TbBrandProducthunt } from "react-icons/tb";
import { BsGift, BsCalendar2Event } from "react-icons/bs";
import { IoMdGift } from "react-icons/io";
import { RiCheckboxBlankLine } from "react-icons/ri";
import { GrUnorderedList } from "react-icons/gr";
import { FiUsers } from "react-icons/fi";

import { Link, Outlet, useLocation } from "react-router-dom";
// import { useGetUserQuery } from "../../features/api/loginApi";

const DashboardLayout = () => {
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
        <Card className=" menu p-4 w-60 bg-slate-50 border-t-[1px] text-yellow-800">
          <List>
            <ListItem className="  menu bg-[#9A583B]  rounded-md shadow-xl mb-4 p-4 border-t-[1px]">
              <ListItemPrefix className="flex justify-between items-center text-white">
                <MdDashboard className="h-5 w-5" />
              </ListItemPrefix>
              <Link to="/dashboard">
                <div className="text-white font-bold">Dashborad</div>
              </Link>
            </ListItem>

            <div className="overflow-auto">
              <Accordion
                open={open === 1}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
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
                      <CiLocationOn className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      Countries
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1 overflow-hidden">
                  <List className="p-0">
                    <Link to="/dashboard/addregion">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronDownIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Add Region & District
                      </ListItem>
                    </Link>

                    <Link to="/dashboard/regionlist">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        All Region & District
                      </ListItem>
                    </Link>
                  </List>
                </AccordionBody>
              </Accordion>

              {/* Brands  */}
              <Accordion
                open={open === 2}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === 2 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 2}>
                  <AccordionHeader
                    onClick={() => handleOpen(2)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <SiBrandfolder className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      Brands
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1 overflow-hidden">
                  <List className="p-0">
                    <Link to="/dashboard/addbrand">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Add Brands
                      </ListItem>
                    </Link>
                    <Link to="/dashboard/brandlist">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        All Brand
                      </ListItem>
                    </Link>
                  </List>
                </AccordionBody>
              </Accordion>

              {/* Products  */}
              <Accordion
                open={open === 3}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === 3 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 3}>
                  <AccordionHeader
                    onClick={() => handleOpen(3)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <TbBrandProducthunt className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      Products
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1 overflow-hidden">
                  <List className="p-0">
                    <Link to="/dashboard/addproduct">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Add Products
                      </ListItem>
                    </Link>
                    <Link to="/dashboard/allproduct">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        All Products
                      </ListItem>
                    </Link>
                  </List>
                </AccordionBody>
              </Accordion>

              {/* Gift Box */}
              <Accordion
                open={open === 4}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === 4 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 4}>
                  <AccordionHeader
                    onClick={() => handleOpen(4)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <BsGift className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      GiftBox
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1 overflow-hidden">
                  <List className="p-0">
                    <Link to="/dashboard/addgiftitem">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Add Gift Box
                      </ListItem>
                    </Link>
                    <Link to="/dashboard/giftitemlist">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        All Gift Box
                      </ListItem>
                    </Link>
                  </List>
                </AccordionBody>
              </Accordion>

              {/* Trending Gif  */}
              <Accordion
                open={open === 5}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === 5 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 5}>
                  <AccordionHeader
                    onClick={() => handleOpen(5)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <IoMdGift className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      TrendingGift
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1 overflow-hidden">
                  <List className="p-0">
                    <Link to="/dashboard/addgift">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Add TrendingGift
                      </ListItem>
                    </Link>
                    <Link to="/dashboard/trendgiftlist">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        All TrendingGift
                      </ListItem>
                    </Link>
                  </List>
                </AccordionBody>
              </Accordion>

              {/* Events  */}
              <Accordion
                open={open === 6}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === 6 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 6}>
                  <AccordionHeader
                    onClick={() => handleOpen(6)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <BsCalendar2Event className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      Events
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1 overflow-hidden">
                  <List className="p-0">
                    <Link to="/dashboard/addevent">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Add Events
                      </ListItem>
                    </Link>
                    <Link to="/dashboard/eventlist">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        All Events
                      </ListItem>
                    </Link>
                  </List>
                </AccordionBody>
              </Accordion>

              {/* Blank Box  */}
              <Accordion
                open={open === 7}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === 7 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 7}>
                  <AccordionHeader
                    onClick={() => handleOpen(7)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <RiCheckboxBlankLine className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      Blank Box
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1 overflow-hidden">
                  <List className="p-0">
                    <Link to="/dashboard/addblankbox">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Add Blank Box
                      </ListItem>
                    </Link>
                    <Link to="/dashboard/blanklist">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        All Blank Box
                      </ListItem>
                    </Link>
                  </List>
                </AccordionBody>
              </Accordion>

              {/* Orders */}
              <Accordion
                open={open === 8}
                icon={
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === 8 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 8}>
                  <AccordionHeader
                    onClick={() => handleOpen(8)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <GrUnorderedList className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      Orders
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1 overflow-hidden">
                  <List className="p-0">
                    <Link to="/dashboard/orders">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Manage Orders
                      </ListItem>
                    </Link>
                    <Link to="/dashboard/delivered">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Orders Delivered
                      </ListItem>
                    </Link>
                  </List>
                </AccordionBody>
              </Accordion>

              {/* Users  */}
              <Accordion
                open={open === 9}
                icon={
                  <ChevronDownIcon
                    // strokeWidth={2.5}
                    className={`mx-auto h-4 w-4 transition-transform ${
                      open === 9 ? "rotate-180" : ""
                    }`}
                  />
                }
              >
                <ListItem className="p-0" selected={open === 9}>
                  <AccordionHeader
                    onClick={() => handleOpen(9)}
                    className="border-b-0 p-3"
                  >
                    <ListItemPrefix>
                      <FiUsers className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography
                      color="blue-gray"
                      className="mr-auto font-normal"
                    >
                      Users
                    </Typography>
                  </AccordionHeader>
                </ListItem>
                <AccordionBody className="py-1 overflow-hidden">
                  <List className="p-0">
                    <Link to="/dashboard/alluser">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Manage User
                      </ListItem>
                    </Link>
                    <Link to="/dashboard/subscription">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Subscription
                      </ListItem>
                    </Link>
                    <Link to="/dashboard/affiliate">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Affiliate
                      </ListItem>
                    </Link>
                    <Link to="/dashboard/level_user">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Level User
                      </ListItem>
                    </Link>
                    <Link to="/dashboard/visitor">
                      <ListItem>
                        <ListItemPrefix>
                          <ChevronRightIcon
                            strokeWidth={3}
                            className="h-3 w-5"
                          />
                        </ListItemPrefix>
                        Visitor's
                      </ListItem>
                    </Link>
                  </List>
                </AccordionBody>
              </Accordion>
            </div>

            <div className="sticky shadow-2xl">
              <ListItem>
                <ListItemPrefix>
                  <Cog6ToothIcon className="h-5 w-5" />
                </ListItemPrefix>
                Settings
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <PowerIcon className="h-5 w-5" />
                </ListItemPrefix>
                Log Out
              </ListItem>
            </div>
          </List>
        </Card>
      </div>
    </div>
  );
};
export default DashboardLayout;
