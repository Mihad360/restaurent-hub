/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Authcontext } from "../providers/Authprovider";
import Swal from "sweetalert2";
import useaxiospublic from "../hooks/useaxiospublic";

const Login = () => {
  const { signin, googlelogin } = useContext(Authcontext);
  const navigate = useNavigate()
  const location = useLocation()
  const axiosPublic = useaxiospublic()

  const from = location.state?.from?.pathname || '/'

  const handlegoogle = async () => {
    try {
        // Perform Google login
        const result = await googlelogin();
        
        // Create user info object
        const userInfo = {
            email: result.user?.email,
            name: result.user?.displayName,
        };

        // Save user information to your backend
        const res = await axiosPublic.post('/users', userInfo);
        console.log(res.data);

        // Navigate to the desired route only after user info is saved
        navigate(from, { replace: true });
        console.log("Google login success");
        
    } catch (error) {
        console.log("Google login error:", error);
    }
};


  const handlesubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signin(email, password)
      .then((result) => {
        const user = result.user;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successfully",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(from, {replace: true})
      })
      .catch((error) => {
        console.error("Error during signup:", error);
      });
  };

  return (
    <div className="pt-10">
      <div className="hero shapedividers_com-332 bg-gradient-to-r from-amber-100 via-gray-100 to-amber-100 min-h-screen">
        <div className="hero-content flex-col lg:flex-row max-w-7xl mx-auto gap-16">
          <div>
            <img
              src="https://i.ibb.co/gTpBk6Q/10124049-removebg-preview.png"
              alt=""
            />
          </div>
          <div className="card shrink-0 border-2 border-amber-400">
            <form onSubmit={handlesubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base text-black">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="outline-none px-3 py-2 rounded-lg border-2 border-amber-300 w-96"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-base text-black">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="outline-none px-3 py-2 rounded-lg border-2 border-amber-300 w-96"
                  required
                />
                <label className="label">
                  <p className="text-base">
                    Don't Have An Account? Please{" "}
                    <Link
                      to="/signup"
                      className="text-rose-600 font-bold cursor-pointer"
                    >
                      Sign Up...
                    </Link>
                  </p>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-amber-600 hover:bg-amber-400 w-40 mx-auto text-white text-base">
                  Login
                </button>
              </div>
            </form>
            <div className="mx-auto pb-7">
              <button onClick={handlegoogle} className="text-3xl btn bg-gray-300 hover:bg-gray-100 mx-auto text-white flex items-center">
                <FcGoogle />{" "}
                <p className="text-lg text-black">Login with Google</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
