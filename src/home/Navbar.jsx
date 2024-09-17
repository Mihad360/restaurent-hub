import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FaCartPlus, FaBars, FaTimes, FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import useCart from "../hooks/useCart";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const [showMenu, setShowMenu] = useState(false);
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const handleLogout = () => {
    logout()
      .then(() => {
        Swal.fire({
          position: "top-left",
          icon: "success",
          title: "Logged Out successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');
      })
      .catch((error) => {
        toast.error("Log Out failed, Please try again", {
          theme: "dark",
          position: "top-center",
        });
        console.error("Error during Logout:", error);
      });
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(!showProfileDropdown);
  };

  const links = (
    <ul className="flex flex-col md:flex-row items-center gap-4 md:gap-5 lg:gap-10 text-xs lg:text-lg text-black font-semibold dark:text-white">
      <li className="hover:text-amber-600 transition-all duration-150">
        <NavLink to="/" className={({ isActive }) => (isActive ? "text-amber-600 font-bold" : "")}>
          HOME
        </NavLink>
      </li>
      <li className="hover:text-amber-600 transition-all duration-150">
        <NavLink to="/shop" className={({ isActive }) => (isActive ? "text-amber-600 font-bold" : "")}>
          SHOP
        </NavLink>
      </li>
      {user && isAdmin && (
        <li className="hover:text-amber-600 transition-all duration-150">
          <NavLink to="/dashboard/adminhome" className={({ isActive }) => (isActive ? "text-amber-600 font-bold" : "")}>
            DASHBOARD
          </NavLink>
        </li>
      )}
      {user && !isAdmin && (
        <li className="hover:text-amber-600 transition-all duration-150">
          <NavLink to="/dashboard/userhome" className={({ isActive }) => (isActive ? "text-amber-600 font-bold" : "")}>
            DASHBOARD
          </NavLink>
        </li>
      )}
      <li className="hover:text-amber-600 transition-all duration-150">
        <NavLink to="/contactus" className={({ isActive }) => (isActive ? "text-amber-600 font-bold" : "")}>
          CONTACT US
        </NavLink>
      </li>
    </ul>
  );

  return (
    <div className="bg-amber-200 fixed w-full z-30 border-b-2 border-black">
      <div className="px-5 max-w-7xl mx-auto">
        <div className="flex justify-between items-center relative">
          {/* Hamburger Menu Icon */}
          <div className="md:hidden flex items-center z-40">
            <button onClick={toggleMenu} className="text-2xl">
              {showMenu ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Logo and Website Name */}
          <div className="flex-1 flex justify-center md:justify-start items-center">
            <img className="w-16 lg:w-32 hidden md:block" src="https://i.ibb.co/rmm66vd/360-F-553007886-vpg-BDlw-Ay-Aa-CTABowv-Ia-PMPg437ha-VKR-removebg-preview.png" alt="Logo" />
            <h1 className="text-xl lg:text-3xl font-extrabold tracking-wide">
              <span className="text-amber-600">Restaura</span>Hub
            </h1>
          </div>

          {/* Navigation Links */}
          <div className={`md:flex-1 flex ${showMenu ? "flex-col absolute left-0 top-full mt-2 w-36 py-2 bg-amber-200 z-30" : "hidden"} md:flex md:justify-center md:flex-row md:items-center gap-4 md:gap-10 text-sm md:text-lg text-black font-semibold dark:text-white`}>
            {links}
          </div>

          {/* Cart and Profile Section */}
          <div className="flex items-center gap-4">
            {/* Cart Button */}
            <Link className="hidden md:block ml-5" to="/dashboard/carts">
              <button className="btn-xs lg:btn-sm btn btn-ghost bg-gray-400 flex items-center gap-2">
                <span className="text-xs lg:text-lg">Carts</span>
                <FaCartPlus />
                <div className="badge badge-secondary text-xs lg:text-lg">+{cart.length}</div>
              </button>
            </Link>

            {/* User Profile Dropdown */}
            <div className="dropdown dropdown-end relative">
              <button tabIndex={0} role="button" className="btn btn-ghost btn-circle" onClick={toggleProfileDropdown}>
                <div className="overflow-hidden">
                  {user ? (
                    <img className="object-cover w-8 md:w-10 h-8 md:h-10 rounded-full" src={user?.photoURL} alt="Profile" />
                  ) : (
                    <img className="object-cover w-8 md:w-10 h-8 md:h-10 rounded-full" src="https://i.ibb.co/4Rdgv5m/0684456b-aa2b-4631-86f7-93ceaf33303c.png" alt="Default Profile" />
                  )}
                </div>
              </button>
              {showProfileDropdown && (
                <ul className="menu menu-sm dropdown-content mt-2 z-10 absolute right-0 w-52 bg-white shadow-xl rounded-lg p-4">
                  <li className="p-2">
                    <Link to="/profile" className="block text-lg">Profile</Link>
                  </li>
                  <hr />
                  <li className="p-2">
                    <Link to="/shop" className="block text-lg">Shop</Link>
                  </li>
                  <hr />
                  <li className="p-2">
                    <Link to="/contactus" className="block text-lg">Contact Us</Link>
                  </li>
                  <hr />
                  <li className="p-2">
                    {user ? (
                      <button onClick={handleLogout} className="block text-lg">Log Out</button>
                    ) : (
                      <Link to="/login" className="block text-lg">Login</Link>
                    )}
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
