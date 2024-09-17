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


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
        console.log(data);

        // 1. Upload the image
        const imagefile = { image: data.image[0] };
        const resimage = await axiosPublic.post(image_hosting_url, imagefile, {
            headers: {
                "content-type": "multipart/form-data",
            },
        });
        const photo = resimage.data.data.display_url;

        // 2. Create user in Firebase
        const result = await createuser(data.email, data.password);
        
        // 3. Update Firebase profile with name and photo
        await updateProfile(result.user, {
            displayName: data.name,
            photoURL: photo,
        });

        console.log("User profile updated successfully");

        // 4. Save user information to your backend
        const userInfo = {
            name: data.name,
            email: data.email,
        };

        // Send a request to your backend to check if the user already exists or to add them
        const res = await axiosPublic.post("/users", userInfo);

        if (res.data.alreadyExists) {
            console.log("User already exists, logging in...");
            
            // Success message if the user already exists and redirect
            Swal.fire({
                position: "top-end",
                icon: "info",
                title: "User already exists. Redirecting...",
                showConfirmButton: false,
                timer: 1500,
            });

            // Redirect to homepage or login page
            navigate("/");
        } else if (res.data.insertedId) {
            console.log("User added to the database", res.data);

            // Reset form only after everything is done
            reset();

            // Success notification
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "SignUp successfully",
                showConfirmButton: false,
                timer: 1500,
            });

            // Navigate user to the home or another page
            navigate("/");
        } else {
            console.error("Error saving user to the database");
        }
    } catch (error) {
        console.error("Error during signup:", error);

        // Handle specific error for user already exists
        if (error.response && error.response.data.message === 'Email already exists') {
            Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Email already exists. Redirecting to login...",
                showConfirmButton: false,
                timer: 1500,
            });

            navigate("/login");
        }
    }
};



  return (
    <div>
      <div className="pt-12 lg:pt-16">
        <div className="hero shapedividers_com-332 bg-gradient-to-r from-amber-100 via-gray-100 to-amber-100 min-h-screen">
          <div className="hero-content flex-col md:flex-row-reverse max-w-7xl mx-auto gap-16">
            <div className="hidden md:block">
              <img
                src="https://i.ibb.co/KhN4KHK/10973590-removebg-preview.png"
                alt=""
              />
            </div>
            <div className="card shrink-0 border-2 border-amber-400 w-64 md:w-80 lg:w-[450px]">
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
                    className="outline-none px-3 py-2 rounded-lg border-2 border-amber-300 lg:w-96"
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
                    className="outline-none px-3 py-2 rounded-lg border-2 border-amber-300 lg:w-96"
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
                    className="outline-none px-3 py-2 rounded-lg border-2 border-amber-300 lg:w-96"
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
                    className="outline-none px-3 py-2 rounded-lg border-2 border-amber-300 lg:w-96"
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
                    <p className="text-sm lg:text-base">
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
                  className="text-lg lg:text-3xl btn bg-gray-300 hover:bg-gray-100 mx-auto text-white flex items-center"
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
