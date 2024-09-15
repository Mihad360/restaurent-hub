import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useaxiospublic from "../hooks/useaxiospublic";
import { FcGoogle } from "react-icons/fc";
import { updateProfile } from "firebase/auth";
import useAuth from "../hooks/useAuth";

const image_hosting_key = import.meta.env.VITE_IMAGE_UPLOAD_KEY;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Signup = () => {
  const { createuser, googlelogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosPublic = useaxiospublic();
  const from = location.state?.from?.pathname || "/";

  const handlegoogle = () => {
    googlelogin()
      .then((result) => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
        });
        console.log("google login success");

        navigate(from, {replace: true})
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const imagefile = { image: data.image[0] };
    const resimage = await axiosPublic.post(image_hosting_url, imagefile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const photo = resimage.data.data.display_url;
    createuser(data.email, data.password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: data.name,
          photoURL: photo,
        })
          .then(() => {
            console.log("User profile updated successfully");
            const userInfo = {
              name: data.name,
              email: data.email,
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data.insertedId) {
                console.log("user added to the database", res.data);
                reset();
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "SignUp successfully",
                  showConfirmButton: false,
                  timer: 1500,
                });
                reset();
                navigate("/");
              }
            });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
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
                    {...register("image", { required: true })}
                    className="outline-none px-3 py-2 rounded-lg border-2 border-amber-300 w-96"
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
              <div className="mx-auto pb-7">
                <button
                  onClick={handlegoogle}
                  className="text-3xl btn bg-gray-300 hover:bg-gray-100 mx-auto text-white flex items-center"
                >
                  <FcGoogle />{" "}
                  <p className="text-lg text-black">SignUp with Google</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
