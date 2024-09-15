import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <footer className="flex justify-between text-base-content">
        <nav>
          <img
            className="w-32"
            src="https://i.ibb.co/rmm66vd/360-F-553007886-vpg-BDlw-Ay-Aa-CTABowv-Ia-PMPg437ha-VKR-removebg-preview.png"
            alt=""
          />
          <h1 className="text-3xl font-extrabold tracking-wide pt-3 pl-7">
            <span className="text-amber-600">Restaura</span>Hub
          </h1>
        </nav>
        <div className="flex-col flex gap-2">
          <h1 className="text-xl font-bold text-black pb-2">Pages</h1>
          <Link to="/shop">Shop</Link>
          <Link to="/contactus">Contact Us</Link>
          <Link>01621257820 & 01979053892</Link>
          <Link></Link>
        </div>
        <div>
        <h1 className="text-xl font-bold text-black pb-2">Social</h1>
          <div className="flex items-center gap-4 text-2xl">
            <a href=""><FaFacebook />
            </a>
            <a href=""><FaInstagramSquare />
            </a>
            <a href=""><FaTwitter />
            </a>
          </div>
        </div>
      </footer>
      <footer className="footer footer-center text-base-content pt-10">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
