import { FaCaravan, FaSitemap, FaUsers } from "react-icons/fa6";
import { SiFuturelearn } from "react-icons/si";
import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "../hooks/useAxiossecure";
import useAuth from "../hooks/useAuth";

const Adminhome = () => {

  const axiosSecure = useAxiossecure()
  const {user} = useAuth()

  const {data: adminStats = []} = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin-stats')
      console.log(res.data)
      return res.data    
    }
  })

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-amber-600 pt-5">
          Hi, Welcome Back! {user.displayName}
        </h1>
        <div className="flex items-center gap-5 p-5 mt-6">
          <div className="bg-gradient-to-r from-green-500 to-green-200 flex items-center gap-4 text-white p-5 rounded-lg w-52">
          <SiFuturelearn className="text-5xl font-bold " />
            <p className="text-3xl font-semibold">
              {adminStats.revenue}
              <br />
              <span className="text-xl">Revenue</span>
            </p>
          </div>
          <div className="bg-gradient-to-r from-amber-500 to-amber-200 flex items-center gap-4 text-white p-5 rounded-lg w-52">
            <FaUsers className="text-5xl font-bold " />
            <p className="text-3xl font-semibold">
              {adminStats.users}
              <br />
              <span className="text-xl">Customers</span>
            </p>
          </div>
          <div className="bg-gradient-to-r from-violet-500 to-violet-200 flex items-center gap-4 text-white p-5 rounded-lg w-52">
            <FaSitemap className="text-5xl font-bold " />
            <p className="text-3xl font-semibold">
              {adminStats.menuItems}
              <br />
              <span className="text-xl">Items</span>
            </p>
          </div>
          <div className="bg-gradient-to-r from-pink-500 to-pink-200 flex items-center gap-4 text-white p-5 rounded-lg w-52">
            <FaCaravan className="text-5xl font-bold " />
            <p className="text-3xl font-semibold">
              {adminStats.orders}
              <br />
              <span className="text-xl">Orders</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminhome;
