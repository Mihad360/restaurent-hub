import useAuth from "../hooks/useAuth";
import useReview from "../hooks/useReview";

export default function Reviews() {

  const {user} = useAuth()
  const [userReviews] = useReview()

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-center gap-10 pt-10 px-5">
        <div>
          <img className=""
            src="https://i.ibb.co/vx4Gbtz/overhead-view-pizza-wooden-board-with-spatula-removebg-preview.png"
            alt=""
          />
        </div>
        {
          userReviews.sort().slice(0,1).map(item => <div key={item._id} className="">
            <div className="w-[600px]">
            <h1 className="text-amber-600 font-semibold text-2xl pb-4">Customer Recent Review</h1>
            <p className="text-lg text-black pb-3">{item.review}</p>
            <div className="flex items-center gap-6">
              {
                user ? <img className="w-16 h-16 rounded-full" src={item.image} alt="" /> : <img className="w-16" src="https://i.ibb.co/4Rdgv5m/0684456b-aa2b-4631-86f7-93ceaf33303c.png" alt="" />
              }
                <div>
                {
                user ? <h1>{item.name}</h1> : <img src="" alt="" />
              }
                    <p className="text-amber-600 font-bold">{item.rating}</p>
                </div>
            </div>
        </div>
          </div>)
        }
      </div>
    </div>
  );
}
