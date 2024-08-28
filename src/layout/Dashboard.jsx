import { FaHome } from "react-icons/fa";
import { FaBook, FaCartPlus, FaShop, FaUser } from "react-icons/fa6";
import { RiContactsBook3Fill } from "react-icons/ri";
import { VscPreview } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-amber-300">
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
          <li className="hover:underline hover:text-pink-600 ">
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
          {/* dividerrrr */}
          <div className="flex w-full flex-col">
            <div className="divider divider-neutral"></div>
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
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
