import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Login = () => {

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
          <div className="card  shrink-0 border-2 border-amber-400">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered w-96"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered w-96"
                  required
                />
                <label className="label">
                  <p className="text-base">
                    Don't Have An Account? Please{" "}
                    <Link className="text-amber-600 font-bold cursor-pointer">
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
              <div className="mx-auto ">
                <button className="text-3xl btn bg-gray-300 hover:bg-gray-100  mx-auto text-white flex items-center">
                  <FcGoogle />{" "}
                  <p className="text-lg text-black">Login with Google</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
