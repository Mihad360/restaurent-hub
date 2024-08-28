import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import Contactus from "../contactus/Contactus";
import Shop from "../shop/Shop";
import Login from "../authentication/Login";
import Signup from "../authentication/Signup";
import Privateroute from "./Privateroute";
import Dashboard from "../layout/Dashboard";
import Carts from "../dashboard/Carts";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/contactus',
            element: <Contactus></Contactus>
        },
        {
            path: '/shop',
            element: <Shop></Shop>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Signup></Signup>
        },
    ]
  },
  {
    path: 'dashboard',
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: 'carts',
        element: <Carts></Carts>
      }
    ]
  }
]);

export default router;