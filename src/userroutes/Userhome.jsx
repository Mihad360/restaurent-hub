import { useQuery } from "@tanstack/react-query";
import useAuth from "../hooks/useAuth";
import { FaSitemap } from "react-icons/fa6";
import useAxiossecure from "../hooks/useAxiossecure";
import { MdBorderColor, MdPayments } from "react-icons/md";

const Userhome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiossecure();

  const { data: userStats = [] } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user-stats");
      console.log(res.data);
      return res.data;
    },
  });

  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold text-amber-600 pt-5">
          Hi, Welcome Back! {user.displayName}
        </h1>
        <div className="flex items-center gap-5 p-5 mt-6">
          <div className="bg-gradient-to-r from-amber-500 to-amber-200 flex items-center gap-4 text-white p-5 rounded-lg w-72">
            <FaSitemap className="text-5xl font-bold " />
            <p className="text-3xl font-semibold">
              {userStats.menuItems}
              <br />
              <span className="text-xl">Items available</span>
            </p>
          </div>
          <div className="bg-gradient-to-r from-violet-500 to-violet-200 flex items-center gap-4 text-white p-5 rounded-lg w-72">
            <MdBorderColor className="text-5xl font-bold " />
            <p className="text-3xl font-semibold">
              {userStats.orders}
              <br />
              <span className="text-xl">orders pending</span>
            </p>
          </div>
          <div className="bg-gradient-to-r from-pink-500 to-pink-200 flex items-center gap-4 text-white p-5 rounded-lg w-72">
            <MdPayments className="text-5xl font-bold " />
            <p className="text-3xl font-semibold">
              {userStats.payments}
              <br />
              <span className="text-xl">Payment done</span>
            </p>
          </div>
        </div>
        <div className="p-5 w-80 text-center mt-5">
            <img className="mx-auto w-60 rounded-full border-2 border-gray-300" src={user?.photoURL} alt="" />
            <h1 className="pt-5 text-3xl font-bold text-pink-600">{user?.displayName}</h1>
        </div>
      </div>
    </div>
  );
};

export default Userhome;
