import Swal from "sweetalert2";
import useCart from "../hooks/useCart";
import useAxiossecure from "../hooks/useAxiossecure";
import { Link } from "react-router-dom";

const Carts = () => {
  const axiosSecure = useAxiossecure();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce(
    (total, nextPrice) => total + nextPrice.price,
    0
  );

  const handledelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this cart?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "This cart has been deleted.",
              icon: "success",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="">
      <div>
        <h1 className="text-center text-3xl font-bold text-amber-600 pt-5">
          Your Carts
        </h1>
        <div className="bg-gray-200 rounded-lg p-5 mt-6">
          <div className="flex items-center justify-between pb-5">
            <h1 className="text-2xl font-semibold text-black">
              Total carts: {cart.length}
            </h1>
            <p className="text-2xl font-semibold text-black">
              Total Price: <span className="text-amber-600">${totalPrice}</span>
            </p>
            <div>
              {
                cart.length ? <Link to="/dashboard/payment"><button className="btn bg-amber-600 hover:bg-amber-400 w-32 mx-auto text-white text-base mr-3">
                Pay
              </button></Link> : <button disabled className="btn bg-amber-600 hover:bg-amber-400 w-32 mx-auto text-white text-base mr-3">
                Pay
              </button>
              }
              {/* <Link to="/dashboard/payment"><button className="btn bg-amber-600 hover:bg-amber-400 w-32 mx-auto text-white text-base mr-3">
                Pay
              </button></Link> */}
            </div>
          </div>
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-base">
                    <th>Sl no.</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {cart.map((item, index) => (
                    <tr key={item._id}>
                      <th>{index + 1}</th>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-16 w-16">
                              <img
                                className=""
                                src={item.image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="text-lg font-bold">{item.name}</td>
                      <td className="text-base font-bold text-amber-600">
                        BDT {item.price}
                      </td>
                      <th>
                        <button
                          onClick={() => handledelete(item._id)}
                          className="btn bg-red-600 hover:bg-amber-400 btn-sm mx-auto text-white text-base mr-3"
                        >
                          delete
                        </button>
                      </th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carts;
