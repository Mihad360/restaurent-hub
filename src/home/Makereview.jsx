import { useState } from "react";

export default function MakeReview() {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your submit logic here
    console.log("Review:", review);
    console.log("Rating:", rating);
    // You can send review and rating to your backend here
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 via-amber-100 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-amber-600 text-3xl text-center uppercase font-semibold pt-16 pb-12">
          Leave us a review
        </h1>
        <div className="max-w-3xl mx-auto p-6 rounded-lg ">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="review"
                className="block text-lg font-medium text-black mb-2">
                Review
              </label>
              <textarea
                id="review"
                name="review"
                rows="4"
                className="w-full resize-none p-3 border-2 border-amber-500 rounded-lg shadow-sm focus:outline-none "
                placeholder="Write your review here..."
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="rating"
                className="block text-lg font-medium text-black mb-2">
                Rating
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                className="w-full p-3 border-2 border-amber-500 rounded-lg shadow-sm focus:outline-none"
                placeholder="Rate out of 5"
                step="0.1"
                min="0"
                max="5"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="btn bg-amber-600 hover:bg-amber-400 w-40 text-white text-base ">
                Submit Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
