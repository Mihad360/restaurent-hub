import { Outlet } from "react-router-dom";
import Navbar from "../home/Navbar";

export default function Layout() {
  return (
    <div className="font">
      <div className="">
        <Navbar></Navbar>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
      <div></div>
    </div>
  );
}
