import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../home/Home";
import Contactus from "../contactus/Contactus";
import Shop from "../shop/Shop";
import Login from "../authentication/Login";
import Signup from "../authentication/Signup";
import Privateroute from "./Privateroute";
import Dashboard from "../layout/Dashboard";
import Carts from "../userroutes/Carts";
import Allusers from "../adminroutes/Allusers";
import Additems from "../adminroutes/Additems";
import Adminroute from "./Adminroute";
import Manageitems from "../adminroutes/Manageitems";
import Updateitem from "../adminroutes/Updateitem";
import Error from "../error/Error";
import Payment from "../userroutes/Payment";
import Paymenthistory from "../userroutes/Paymenthistory";
import Adminhome from "../adminroutes/Adminhome";
import Userhome from "../userroutes/Userhome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
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
    errorElement: <Error></Error>,
    children: [
      {
        path: 'carts',
        element: <Carts></Carts>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'paymenthistory',
        element: <Paymenthistory></Paymenthistory>
      },
      {
        path: 'userhome',
        element: <Userhome></Userhome>
      },
      {
        path: 'adminhome',
        element: <Adminhome></Adminhome>
      },
      {
        path: 'allusers',
        element: <Adminroute><Allusers></Allusers></Adminroute>
      },
      {
        path: 'additems',
        element: <Adminroute><Additems></Additems></Adminroute>
      },
      {
        path: 'manageitems',
        element: <Adminroute><Manageitems></Manageitems></Adminroute>
      },
      {
        path: 'manageitems/updateitem/:id',
        element: <Updateitem></Updateitem>,
        loader: ({params}) => fetch(`http://localhost:5000/menus/${params.id}`)
      }
    ]
  }
]);

export default router;