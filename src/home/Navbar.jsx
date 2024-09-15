import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FaCartPlus } from "react-icons/fa6";
import 'react-toastify/dist/ReactToastify.css';
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import { useState } from "react";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate()
  const [cart] = useCart()
  const [isAdmin] = useAdmin()

  const handlelogout = () => {
    logout()
      .then(() => {
        Swal.fire({
          position: "top-left",
          icon: "success",
          title: "Login successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/')
      })
      .catch((error) => {
        toast.error("Log Out failed, Please try again", {
          theme: "dark",
          position: "top-center"
        });
        console.error("Error during Logout:", error);
      });
  };

  // const [showNotificationDropdown, setShowNotificationDropdown] =
    // useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  // const [cartItemCount, setCartItemCount] = useState(0); // Initial cart item count

  // const toggleNotificationDropdown = () => {
  //   setShowNotificationDropdown(!showNotificationDropdown);
  // };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  // const addToCart = () => {
  //   setCartItemCount(cartItemCount + 1); // Increment cart item count
  // };

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
              }
            >
              HOME
            </NavLink>
          </li>
          <li className="hover:text-amber-600 hover:ease-in-out hover:transition-all hover:scale-110 duration-150 hover:font-bold">
            <NavLink
              to="/shop"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-amber-600 font-bold "
                  : ""
              }
            >
              SHOP
            </NavLink>
          </li>
              {
                user && isAdmin && <li className="hover:text-amber-600 hover:ease-in-out hover:transition-all hover:scale-110 duration-150 hover:font-bold">
                <NavLink
                  to="/dashboard/adminhome"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-amber-600 font-bold "
                      : ""
                  }
                >
                  DASHBOARD
                </NavLink>
              </li> 
              }
              {
                user && !isAdmin && <li className="hover:text-amber-600 hover:ease-in-out hover:transition-all hover:scale-110 duration-150 hover:font-bold">
                <NavLink
                  to="/dashboard/userhome"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-amber-600 font-bold "
                      : ""
                  }
                >
                  DASHBOARD
                </NavLink>
              </li> 
              }
          <li className="hover:text-amber-600 hover:ease-in-out hover:transition-all hover:scale-110 duration-150 hover:font-bold">
            <NavLink
              to="/contactus"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-amber-600 font-bold "
                  : ""
              }
            >
              CONTACT US
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );

  return (
    <div className="bg-amber-200 fixed w-full z-30 border-b-2 border-black">
      <div className="px-5 max-w-7xl mx-auto">
        <div className="navbar flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              className="w-32"
              src="https://i.ibb.co/rmm66vd/360-F-553007886-vpg-BDlw-Ay-Aa-CTABowv-Ia-PMPg437ha-VKR-removebg-preview.png"
              alt=""
            />
            {/* <h1 className="text-5xl">
            <GiForkKnifeSpoon />
          </h1> */}
            <h1 className="text-3xl font-extrabold tracking-wide">
              <span className="text-amber-600">Restaura</span>Hub
            </h1>
          </div>
          <div className="flex-1 flex justify-center">{links}</div>
          <div className="flex items-center">
            {/* Notification dropdown */}
            <Link to="dashboard/carts">
            <button className="btn btn-ghost bg-gray-400">
              <span className="text-lg">Carts</span>
              <FaCartPlus />
              <div className="badge badge-secondary  text-lg">+{cart.length}</div>
            </button></Link>
            {/* fgagfg */}
            {user ? "" : (
              <Link to="/login">
                <button className="text-pink-600 text-lg font-semibold hover:underline ml-3">
                  Login
                </button>
              </Link>
            )}
            {/* User profile dropdown */}
            <div className="dropdown dropdown-end ml-2 relative">
              <button
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle relative"
                onClick={toggleProfileDropdown}
              >
                <div className="overflow-hidden">
                  {
                    user ? <img className="object-cover w-10 h-10 rounded-full"
                    alt="Profile"
                    src={user?.photoURL}
                  /> : <img className="object-cover w-10 h-10 rounded-full"
                  alt="Profile"
                  src="https://i.ibb.co/4Rdgv5m/0684456b-aa2b-4631-86f7-93ceaf33303c.png"
                />
                  }
                  
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-4 w-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-transform duration-300 ease-in-out ${
                    showProfileDropdown ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill={user ? "white" : "black"}
                >
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
                      <span className="badge bg-pink-600 text-white">
                        Login
                      </span>
                    </a>
                  </li>
                  <hr />
                  <li className="p-2 hover:scale-110 duration-300 ease-in-out transition-all">
                    <a className="block text-lg">Settings</a>
                  </li>
                  <hr />
                  <li className="p-2 hover:scale-110 duration-300 ease-in-out transition-all">
                    {user ? (
                      <Link onClick={handlelogout}>
                        <button className="block text-lg">
                          Log Out
                        </button>
                      </Link>
                    ) : (
                      <Link to="/login">
                        <button className="text-lg">
                          Login
                        </button>
                      </Link>
                    ) }
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Navbar;
