import useAuth from "../hooks/useAuth";
import useReview from "../hooks/useReview";

export default function Reviews() {
  const { user } = useAuth();
  const [userReviews] = useReview();

  // Ensure userReviews is not empty and sort it by the most recent
  const recentReview = userReviews
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 1)[0];

  return (
    <div className="max-w-7xl mx-auto px-5 py-10">
      <div className="flex md:flex-row flex-col items-center justify-center gap-10">
        <div className="w-1/2">
          <img
            className="w-full object-cover"
            src="https://i.ibb.co/vx4Gbtz/overhead-view-pizza-wooden-board-with-spatula-removebg-preview.png"
            alt="Pizza"
          />
        </div>
        {recentReview ? (
          <div className="w-full md:w-[50%]">
            <h1 className="text-amber-600 font-semibold text-2xl pb-4">
              Customer Recent Review
            </h1>
            <p className="text-lg text-black pb-3">{recentReview.review}</p>
            <div className="flex items-center gap-6">
              <img
                className="w-16 h-16 rounded-full"
                src={user ? recentReview.image : "https://i.ibb.co/4Rdgv5m/0684456b-aa2b-4631-86f7-93ceaf33303c.png"}
                alt="Reviewer"
              />
              <div>
                <h1 className="text-lg font-semibold">{user ? recentReview.name : 'Anonymous'}</h1>
                <p className="text-amber-600 font-bold">{recentReview.rating}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-1/2">
            <p className="text-lg text-center text-black">No reviews available.</p>
          </div>
        )}
      </div>
    </div>
  );
}
