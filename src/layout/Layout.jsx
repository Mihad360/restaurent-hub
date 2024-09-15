import { Outlet } from "react-router-dom";
import Navbar from "../home/Navbar";
import Footer from "../home/Footer";

export default function Layout() {
  return (
    <div className="font">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div className="pb-10 pt-16">
        <Footer></Footer>
      </div>
    </div>
  );
}
