import { FaCaravan, FaSitemap, FaUsers } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import useFood from "../hooks/useFood";
import useUsers from "../hooks/useUsers";
import { SiFuturelearn } from "react-icons/si";

const Adminhome = () => {
  const { user } = useAuth();
  const [users] = useUsers();
  const [menus] = useFood();
  const [carts] = useCart();

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
              {users.length}
              <br />
              <span className="text-xl">Revenue</span>
            </p>
          </div>
          <div className="bg-gradient-to-r from-amber-500 to-amber-200 flex items-center gap-4 text-white p-5 rounded-lg w-52">
            <FaUsers className="text-5xl font-bold " />
            <p className="text-3xl font-semibold">
              {users.length}
              <br />
              <span className="text-xl">Customers</span>
            </p>
          </div>
          <div className="bg-gradient-to-r from-violet-500 to-violet-200 flex items-center gap-4 text-white p-5 rounded-lg w-52">
            <FaSitemap className="text-5xl font-bold " />
            <p className="text-3xl font-semibold">
              {menus.length}
              <br />
              <span className="text-xl">Items</span>
            </p>
          </div>
          <div className="bg-gradient-to-r from-pink-500 to-pink-200 flex items-center gap-4 text-white p-5 rounded-lg w-52">
            <FaCaravan className="text-5xl font-bold " />
            <p className="text-3xl font-semibold">
              {carts.length}
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
