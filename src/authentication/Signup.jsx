import { Link } from "react-router-dom";

const Signup = () => {
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
            <div className="card  shrink-0 border-2 border-amber-400">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black text-base">
                      Name
                    </span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="your Name"
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
                    name="email"
                    placeholder="email"
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
                    name="password"
                    placeholder="password"
                    className="outline-none px-3 py-2 rounded-lg border-2 border-amber-300 w-96"
                    required
                  />
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
                {/* <div className="mx-auto ">
                    <button className="text-3xl btn bg-gray-300 hover:bg-gray-100  mx-auto text-white flex items-center">
                      <FcGoogle />{" "}
                      <p className="text-lg text-black">Login with Google</p>
                    </button>
                  </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
