import { RiAdminFill } from "react-icons/ri";
import useUsers from "../hooks/useUsers";
import Swal from "sweetalert2";
import useAxiossecure from "../hooks/useAxiossecure";
import useAuth from "../hooks/useAuth";

const Allusers = () => {
    const {user} = useAuth()
  const [users,refetch] = useUsers();
  const axiosSecure = useAxiossecure()
  
  const makeAdmin = (id) => {
    axiosSecure.patch(`/users/admin/${id}`)
    .then(res => {
        console.log(res.data, user.email)
        if(res.data.modifiedCount > 0){
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.email} is now an Admin`,
                showConfirmButton: false,
                timer: 1500
              });
              refetch()
        }
    })
  }

  const handledelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to remove this user?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`)
        .then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "This User has been removed.",
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
          All Users
        </h1>
        <div className="bg-gray-200 rounded-lg p-5 mt-6">
          <div className="flex items-center justify-between pb-5">
            <h1 className="text-2xl font-semibold text-black">
              Total Users: {users.length}
            </h1>
          </div>
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-base">
                    <th>Sl no.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {users.map((item, index) => (
                    <tr key={item._id}>
                      <th>{index + 1}</th>
                      <td className="text-lg font-bold">{item.name}</td>
                      <td className="text-base font-bold text-amber-600">
                        {item.email}
                      </td>
                      <th>
                        {
                            item.role === "admin" ? <button className="btn bg-amber-600 hover:bg-amber-400 btn-sm mx-auto text-black text-base mr-3">
                            Admin
                          </button> : <button onClick={()=>makeAdmin(item._id)} className="btn bg-amber-600 hover:bg-amber-400 btn-md mx-auto text-black text-2xl mr-3">
                          <RiAdminFill />
                        </button>
                        }
                      </th>
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

export default Allusers;
