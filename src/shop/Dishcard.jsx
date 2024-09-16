import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiossecure from "../hooks/useAxiossecure";
import useCart from "../hooks/useCart";


export default function Dishcard({item}) {

  const {name,_id,image,recipe,price,category} = item
  const {user} = useAuth()
  const axiosSecure = useAxiossecure()
  const navigate = useNavigate()
  const location = useLocation()
  const [, refetch] = useCart()
  
  const addtocart = () => {
    if(user && user.email){
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,image,price,recipe,category
      }
      axiosSecure.post("/carts", cartItem)
      .then(res => {
        console.log(res.data)
        if(res.data.insertedId){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to the cart`,
            showConfirmButton: false,
            timer: 1500
          });
          refetch();
        }
      })
    }else{
      Swal.fire({
        title: "You are not logged in!!",
        text: "Please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', {from: location})
        }
      });
    }
  }

  return (
    <div>
      <div className="card card-compact">
        <figure>
          <img className="h-80 w-full"
            src={image}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text-amber-600 font-bold">{name}</h2>
          <p className="text-black text-left pb-3">{recipe}</p>
          <div className="card-actions justify-between flex items-center">
            <h1 className="text-lg text-amber-600 font-semibold">$ {price}</h1>
            <button onClick={addtocart} className="btn bg-amber-600 hover:bg-amber-400 w-40 mx-auto text-white text-base mr-3">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
