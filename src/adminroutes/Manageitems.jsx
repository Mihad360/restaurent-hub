import useFood from "../hooks/useFood";
import { FaEdit } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiossecure from "../hooks/useAxiossecure";
import { Link } from "react-router-dom";

const Manageitems = () => {

    const [menu, loading ,refetch] = useFood()
    const axiosSecure = useAxiossecure()

    const handledelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to remove this recipe?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, remove it!",
          }).then(async(result) => {
            if (result.isConfirmed) {
              const res = await axiosSecure.delete(`/menus/${id}`)
              if(res.data.deletedCount > 0){
                Swal.fire({
                    title: "Removed!",
                    text: "This Recipe has been removed.",
                    icon: "success",
                  });
                  refetch();
              }
            }
          });
    }

  return (
    <div>
      <div>
        <h1 className="text-center text-3xl font-bold text-amber-600 pt-5">
          Manage Your Items
        </h1>
        <div className="bg-gray-200 rounded-lg p-5 mt-6 mb-10">
          <div className="flex items-center justify-between pb-5">
            <h1 className="text-2xl font-semibold text-black">
              Total Users: {menu.length}
            </h1>
          </div>
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-base">
                    <th>Sl no.</th>
                    <th>Recipe Image</th>
                    <th>Recipe Name</th>
                    <th>Price</th>
                    <th>Action</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {menu.map((item, index) => (
                    <tr key={item._id}>
                      <th>{index + 1}</th>
                      <td><div className="avatar">
                            <div className="mask mask-squircle h-16 w-16">
                              <img
                                className=""
                                src={item.image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div></td>
                      <td className="text-base font-bold text-amber-600">
                        {item.name}
                      </td>
                      <td className="text-base font-bold text-amber-600">
                        BDT {item.price}
                      </td>
                      <th>
                      <Link to={`/dashboard/manageitems/updateitem/${item._id}`}><button className="btn bg-amber-600 hover:bg-amber-400 btn-md mx-auto text-black text-2xl mr-3">
                          <FaEdit />

                        </button></Link>
                      </th>
                      <th>
                        <button onClick={()=>handledelete(item._id)}
                          className="btn bg-red-600 hover:bg-amber-400 btn-sm mx-auto text-white text-base mr-3"
                        >
                          Remove
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

export default Manageitems;
