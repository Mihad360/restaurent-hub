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
import Allusers from "../adminroutes/Allusers";
import Additems from "../adminroutes/Additems";
import Adminroute from "./Adminroute";

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
    element: <Privateroute><Dashboard></Dashboard></Privateroute>,
    children: [
      {
        path: 'carts',
        element: <Carts></Carts>
      },
      {
        path: 'allusers',
        element: <Adminroute><Allusers></Allusers></Adminroute>
      },
      {
        path: 'additems',
        element: <Adminroute><Additems></Additems></Adminroute>
      }
    ]
  }
]);

export default router;