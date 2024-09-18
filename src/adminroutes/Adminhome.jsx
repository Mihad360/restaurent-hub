import { FaCaravan, FaSitemap, FaUsers } from "react-icons/fa6";
import { SiFuturelearn } from "react-icons/si";
import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "../hooks/useAxiossecure";
import useAuth from "../hooks/useAuth";

const Adminhome = () => {

  const axiosSecure = useAxiossecure();
  const { user } = useAuth();

  const { data: adminStats = [] } = useQuery({
    queryKey: ['admin-stats'],
    queryFn: async () => {
      const res = await axiosSecure.get('/admin-stats');
      console.log(res.data);
      return res.data;
    }
  });

  return (
    <div className="lg:px-4 py-5">
      <h1 className="text-lg lg:text-2xl font-bold text-amber-600 pt-5">
        Hi, Welcome Back! {user.displayName}
      </h1>

      <div className="flex flex-wrap items-center gap-5 p-5 mt-6">
        <div className="bg-gradient-to-r from-green-500 to-green-200 flex items-center flex-col lg:flex-row gap-4 text-white p-4 md:p-5 rounded-lg w-full md:w-52">
          <SiFuturelearn className="text-4xl md:text-5xl font-bold" />
          <p className="text-2xl md:text-3xl font-semibold">
            {adminStats.revenue}
            <br />
            <span className="text-lg md:text-xl">Revenue</span>
          </p>
        </div>
        <div className="bg-gradient-to-r from-amber-500 to-amber-200 flex items-center flex-col lg:flex-row gap-4 text-white p-4 md:p-5 rounded-lg w-full md:w-52">
          <FaUsers className="text-4xl md:text-5xl font-bold" />
          <p className="text-2xl md:text-3xl font-semibold">
            {adminStats.users}
            <br />
            <span className="text-lg md:text-xl">Customers</span>
          </p>
        </div>
        <div className="bg-gradient-to-r from-violet-500 to-violet-200 flex items-center flex-col lg:flex-row gap-4 text-white p-4 md:p-5 rounded-lg w-full md:w-52">
          <FaSitemap className="text-4xl md:text-5xl font-bold" />
          <p className="text-2xl md:text-3xl font-semibold">
            {adminStats.menuItems}
            <br />
            <span className="text-lg md:text-xl">Items</span>
          </p>
        </div>
        <div className="bg-gradient-to-r from-pink-500 to-pink-200 flex items-center flex-col lg:flex-row gap-4 text-white p-4 md:p-5 rounded-lg w-full md:w-52">
          <FaCaravan className="text-4xl md:text-5xl font-bold" />
          <p className="text-2xl md:text-3xl font-semibold">
            {adminStats.orders}
            <br />
            <span className="text-lg md:text-xl">Orders</span>
          </p>
        </div>
      </div>

      <div className="p-5 w-full md:w-80 text-center mt-5">
        <img className="mx-auto w-40 md:w-60 rounded-full border-2 border-gray-300" src={user?.photoURL} alt="" />
        <h1 className="pt-3 md:pt-5 text-2xl md:text-3xl font-bold text-pink-600">{user?.displayName}</h1>
      </div>
    </div>
  );
};

export default Adminhome;
