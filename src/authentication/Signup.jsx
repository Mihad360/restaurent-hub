import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../providers/Authprovider";
import Swal from "sweetalert2";
import useaxiospublic from "../hooks/useaxiospublic";

const Signup = () => {

  const { createuser,updateprofile } = useContext(Authcontext);
  const navigate = useNavigate()
  const location = useLocation()
  const axiosPublic = useaxiospublic()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createuser(data.email, data.password)
      .then(result => {
        const signup = result.user;
        console.log(signup);
        reset()
        updateprofile(data.name, data.photoURL)
        .then(()=>{
          console.log("User profile updated successfully")
          const userInfo = {
            name: data.name,
            email: data.email,
          }
          axiosPublic.post('/users', userInfo)
          .then(res => {
            if(res.data.insertedId){
              console.log('user added to the database')
              reset()
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "SignUp successfully",
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')
            }
          })
        })
        .catch(error => {
          console.log(error)
        })
      })
      .catch(error => {
        console.log("Error during signup:", error);
      });
  };

  return (
    <div>
      <div className="pt-10">
        <div className="hero shapedividers_com-332 bg-gradient-to-r from-amber-100 via-gray-100 to-amber-100 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse max-w-7xl mx-auto gap-16">
            <div>
              <img
                src="https://i.ibb.co/KhN4KHK/10973590-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="card shrink-0 border-2 border-amber-400">
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black text-base">
                      Photo URL
                    </span>
                  </label>
                  <input
                    type="file"
                    {...register("photo")}
                    placeholder="Photo URL"
                    className="outline-none px-3 py-2 rounded-lg border-2 border-amber-300 w-96"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black text-base">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Your Name"
                    className="outline-none px-3 py-2 rounded-lg border-2 border-amber-300 w-96"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black text-base">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="Email"
                    className="outline-none px-3 py-2 rounded-lg border-2 border-amber-300 w-96"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black text-base">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      pattern: /^(?=.*[A-Z]).{6,}$/,
                    })}
                    placeholder="Password"
                    className="outline-none px-3 py-2 rounded-lg border-2 border-amber-300 w-96"
                    required
                  />
                  <div className="py-1">
                    {errors.password?.type === "pattern" && (
                      <p className="text-red-600">
                        Password must have 6 characters with one uppercase word
                      </p>
                    )}
                  </div>
                  <label className="label">
                    <p className="text-base">
                      Already Have An Account? Please{" "}
                      <Link
                        to="/login"
                        className="text-rose-600 font-bold cursor-pointer"
                      >
                        Login...
                      </Link>
                    </p>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-amber-600 hover:bg-amber-400 w-40 mx-auto text-white text-base">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
