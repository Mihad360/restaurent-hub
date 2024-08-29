import { FaHome } from "react-icons/fa";
import { FaBook, FaCartPlus, FaShop, FaUser } from "react-icons/fa6";
import { RiContactsBook3Fill } from "react-icons/ri";
import { VscPreview } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto flex">
      <div className="w-64 min-h-screen">
        <ul className="list-none p-7 text-lg text-black space-y-2 font-semibold">
          <li className="hover:underline hover:text-pink-600">
            <NavLink
              to="/dashboard/home"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-pink-600 font-bold"
                  : ""
              }
            >
              <span className="flex items-center gap-3">
                <FaUser />
                User Home
              </span>
            </NavLink>
          </li>
          <li className="hover:underline hover:text-pink-600">
            <NavLink
              to="/dashboard/carts"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-pink-600 font-bold"
                  : ""
              }
            >
              <span className="flex items-center gap-3">
                <FaCartPlus />
                Carts
              </span>
            </NavLink>
          </li>
          <li className="hover:underline hover:text-pink-600">
            <NavLink
              to="/dashboard/ddd"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-pink-600 font-bold"
                  : ""
              }
            >
              <span className="flex items-center gap-3">
                <FaBook />
                My Bookings
              </span>
            </NavLink>
          </li>
          <li className="hover:underline hover:text-pink-600">
            <NavLink
              to="/dashboard/fff"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-pink-600 font-bold"
                  : ""
              }
            >
              <span className="flex items-center gap-3">
                <VscPreview />
                Reviews
              </span>
            </NavLink>
          </li>
          {/* Horizontal Divider */}
          <div className="w-full">
            <div className="border-t border-neutral-500 my-4"></div>
          </div>
          {/* ---------- */}
          <li className="hover:underline hover:text-pink-600">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-pink-600 font-bold"
                  : ""
              }
            >
              <span className="flex items-center gap-3">
                <FaHome />
                Home
              </span>
            </NavLink>
          </li>
          <li className="hover:underline hover:text-pink-600">
            <NavLink
              to="/shop"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-pink-600 font-bold"
                  : ""
              }
            >
              <span className="flex items-center gap-3">
                <FaShop />
                Shop
              </span>
            </NavLink>
          </li>
          <li className="hover:underline hover:text-pink-600">
            <NavLink
              to="/contactus"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-pink-600 font-bold"
                  : ""
              }
            >
              <span className="flex items-center gap-3">
                <RiContactsBook3Fill />
                Contact Us
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
      {/* Vertical Divider */}
      <div className="relative flex ">
        <div className="absolute left-0 top-0 h-full w-px bg-neutral-500"></div>
      </div>
      {/* ---------- */}
      <div className="flex-1 ml-7">
        <Outlet />
      </div>
    </div>
    </div>
  );
};

export default Dashboard;
