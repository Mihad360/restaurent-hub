import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import Contactus from "../contactus/Contactus";
import Shop from "../shop/Shop";
import Login from "../authentication/Login";
import Signup from "../authentication/Signup";
import Privateroute from "./Privateroute";


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
            element: <Privateroute><Shop></Shop></Privateroute>
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
]);

export default router;