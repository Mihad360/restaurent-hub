import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showNotificationDropdown, setShowNotificationDropdown] =
    useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0); // Initial cart item count

  const toggleNotificationDropdown = () => {
    setShowNotificationDropdown(!showNotificationDropdown);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const addToCart = () => {
    setCartItemCount(cartItemCount + 1); // Increment cart item count
  };

  const links = (
    <>
      <div>
        <ul className="flex items-center gap-4 md:gap-10 text-sm md:text-lg text-black font-semibold dark:text-white">
          <li className="hover:text-amber-600 hover:ease-in-out hover:transition-all hover:scale-110 duration-150 hover:font-bold">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-amber-600 font-bold "
                  : ""
              }>
              HOME
            </NavLink>
          </li>
          <li className="hover:text-amber-600 hover:ease-in-out hover:transition-all hover:scale-110 duration-150 hover:font-bold">
            <NavLink
              to="/projects"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-amber-600 font-bold "
                  : ""
              }>
              OUR SHOP
            </NavLink>
          </li>
          <li className="hover:text-amber-600 hover:ease-in-out hover:transition-all hover:scale-110 duration-150 hover:font-bold">
            <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-amber-600 font-bold "
                  : ""
              }>
              DASHBOARD
            </NavLink>
          </li>
          <li className="hover:text-amber-600 hover:ease-in-out hover:transition-all hover:scale-110 duration-150 hover:font-bold">
            <NavLink
              to="/contactus"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-amber-600 font-bold "
                  : ""
              }>
              CONTACT US
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <div className="px-5 bg-amber-200 fixed w-full z-10 border-b-2 border-black">
      <div className="navbar flex justify-between items-center">
        <div className="flex items-center gap-5">
          <img
            className="w-52"
            src="https://i.ibb.co/v4BMCzL/BCM9-150ppp-removebg-preview.png"
            alt=""
          />
          <h1 className="text-3xl font-extrabold tracking-wide">
            <span className="text-amber-600">Restaura</span>Hub
          </h1>
        </div>
        <div className="flex-1 flex justify-center">{links}</div>
        <div className="flex items-center">
          {/* Notification dropdown */}
          <div className="dropdown dropdown-end relative">
            <button
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle relative"
              onClick={toggleNotificationDropdown}>
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cartItemCount}
                </span>
              </div>
            </button>
            {/* Notification dropdown content */}
            {showNotificationDropdown && (
              <div className="dropdown-content mt-2 z-10 absolute right-0 w-52 bg-white shadow-xl rounded-lg p-4">
                <div className="p-2">
                  <span className="font-bold text-lg">8 Items</span>
                  <span className="text-info block">Subtotal: $999</span>
                  <button className="btn bg-pink-600 w-full text-white text-lg mt-2">
                    View cart
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User profile dropdown */}
          <div className="dropdown dropdown-end ml-4 relative">
            <button
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle relative"
              onClick={toggleProfileDropdown}>
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img
                  alt="Profile"
                  src="https://i.ibb.co/4Rdgv5m/0684456b-aa2b-4631-86f7-93ceaf33303c.png"
                />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-transform duration-300 ease-in-out ${
                  showProfileDropdown ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/* User profile dropdown content */}
            {showProfileDropdown && (
              <ul className="menu menu-sm dropdown-content mt-2 z-10 absolute right-0 w-52 bg-white shadow-xl rounded-lg p-4 font-medium">
                <li className="p-2 hover:scale-110 duration-300 ease-in-out transition-all">
                  <a className="flex items-center justify-between text-lg">
                    <span>Profile</span>
                    <span className="badge bg-pink-600 text-white">New</span>
                  </a>
                </li>
                <hr />
                <li className="p-2 hover:scale-110 duration-300 ease-in-out transition-all">
                  <a className="block text-lg">Settings</a>
                </li>
                <hr />
                <li className="p-2 hover:scale-110 duration-300 ease-in-out transition-all">
                  <a className="block text-lg">Logout</a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
