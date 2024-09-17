import { useForm } from "react-hook-form";
import useaxiospublic from "../hooks/useaxiospublic";
import useReview from "../hooks/useReview";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import moment from "moment";

export default function MakeReview() {
  const axiosPublic = useaxiospublic();
  const [userReviews, refetch] = useReview();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const reviews = {
      review: data.review,
      rating: data.rating,
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
      date: moment().format("llll"),
    };

    const res = await axiosPublic.post("/reviews", reviews);
    if (res.data.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Reviewed successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      reset();
      refetch();
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 via-amber-100 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-amber-600 text-3xl text-center uppercase font-semibold pt-16 pb-12">
          Leave us a review
        </h1>
        <div className="max-w-3xl mx-auto p-6 rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="review"
                className="block text-lg font-medium text-black mb-2"
              >
                Review
              </label>
              <textarea
                id="review"
                {...register("review", {
                  required: "Review is required",
                  maxLength: {
                    value: 40,
                    message: "Review cannot exceed 40 characters",
                  },
                })}
                rows="4"
                className={`w-full resize-none p-3 border-2 ${
                  errors.review ? "border-red-500" : "border-amber-500"
                } rounded-lg shadow-sm focus:outline-none`}
                placeholder="Write your review here (max 40 characters)..."
                aria-invalid={errors.review ? "true" : "false"}
              ></textarea>
              {errors.review && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.review.message}
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="rating"
                className="block text-lg font-medium text-black mb-2"
              >
                Rating
              </label>
              <input
                type="number"
                id="rating"
                {...register("rating", {
                  required: "Rating is required",
                  min: {
                    value: 0,
                    message: "Rating must be at least 0",
                  },
                  max: {
                    value: 5,
                    message: "Rating cannot exceed 5",
                  },
                })}
                className={`w-full p-3 border-2 ${
                  errors.rating ? "border-red-500" : "border-amber-500"
                } rounded-lg shadow-sm focus:outline-none`}
                placeholder="Rate out of 5"
                step="0.1"
                aria-invalid={errors.rating ? "true" : "false"}
              />
              {errors.rating && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.rating.message}
                </p>
              )}
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="btn bg-amber-600 hover:bg-amber-400 w-40 text-white text-base"
              >
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
