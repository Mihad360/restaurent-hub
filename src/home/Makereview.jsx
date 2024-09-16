import { useForm } from "react-hook-form";
import useaxiospublic from "../hooks/useaxiospublic";
import useReview from "../hooks/useReview";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import moment from "moment";

export default function MakeReview() {
  const axiosPublic = useaxiospublic();
  const [userReviews, refetch] = useReview();
  const {user} = useAuth()

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const reviews = {
      review: data.review,
      rating: data.rating,
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
      date: moment().format('llll'),
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
        <div className="max-w-3xl mx-auto p-6 rounded-lg ">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-lg font-medium text-black mb-2">
                Review
              </label>
              <textarea
                id="review"
                {...register("review")}
                rows="4"
                maxLength='40'
                className="w-full resize-none p-3 border-2 border-amber-500 rounded-lg shadow-sm focus:outline-none "
                placeholder="Write your review here..."
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-lg font-medium text-black mb-2">
                Rating
              </label>
              <input
                type="number"
                id="rating"
                {...register("rating")}
                className="w-full p-3 border-2 border-amber-500 rounded-lg shadow-sm focus:outline-none"
                placeholder="Rate out of 5"
                step="0.1"
                min="0"
                max="5"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="btn bg-amber-600 hover:bg-amber-400 w-40 text-white text-base "
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
