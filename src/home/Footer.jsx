import { FaInstagramSquare, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <footer className="flex flex-col md:flex-row justify-between items-start md:items-center text-base-content">
        <nav className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <img
            className="w-32 mb-2"
            src="https://i.ibb.co/rmm66vd/360-F-553007886-vpg-BDlw-Ay-Aa-CTABowv-Ia-PMPg437ha-VKR-removebg-preview.png"
            alt="RestauraHub Logo"
          />
          <h1 className="text-3xl font-extrabold tracking-wide">
            <span className="text-amber-600">Restaura</span>Hub
          </h1>
        </nav>
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <h1 className="text-xl font-bold text-black pb-2">Pages</h1>
          <Link className="hover:text-amber-600" to="/shop">Shop</Link>
          <Link className="hover:text-amber-600" to="/contactus">Contact Us</Link>
          <Link className="hover:text-amber-600">01621257820 & 01979053892</Link>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-xl font-bold text-black pb-2">Social</h1>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <FaFacebook />
            </a>
            <a href="#" className="text-red-600 hover:text-red-800">
              <FaInstagramSquare />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              <FaTwitter />
            </a>
          </div>
        </div>
      </footer>
      <footer className="text-base-content pt-10 text-center">
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved by ACME Industries Ltd
        </p>
      </footer>
    </div>
  );
};

export default Footer;
