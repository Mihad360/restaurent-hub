import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import Contactus from "../contactus/Contactus";
import Shop from "../shop/Shop";


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
    ]
  },
]);

export default router;