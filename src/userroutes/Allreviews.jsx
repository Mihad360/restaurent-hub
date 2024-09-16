import useAuth from "../hooks/useAuth";
import useReview from "../hooks/useReview";

const Allreviews = () => {

    const [userReviews] = useReview()
    const {user} = useAuth()

    return (
        <div>
            <div>
        <h1 className="text-center text-3xl font-bold text-amber-600 pt-5">
          All Users
        </h1>
        <div className="bg-gray-200 rounded-lg p-5 mt-6">
          <div className="flex items-center justify-between pb-5">
            <h1 className="text-2xl font-semibold text-black">
              Total Reviews: {userReviews.length}
            </h1>
          </div>
          <div>
            <div className="overflow-x-auto">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-base">
                    <th>Sl no.</th>
                    <th>Name</th>
                    <th>Reviews</th>
                    <th>Ratings</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {userReviews.map((item, index) => (
                    <tr key={item._id}>
                      <th>{index + 1}</th>
                      <td className="text-base font-bold">{item.name}</td>
                      <td  className="text-base font-semibold">{item.review}</td>
                      <td className="text-base font-bold text-amber-600">
                        {item.rating}
                      </td>
                      <td>
                        {item.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
        </div>
    );
};

export default Allreviews;