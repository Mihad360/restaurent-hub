import { useEffect, useState } from "react";
import Food from "./Food";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useaxiospublic from "../hooks/useaxiospublic";

export default function Foods() {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(false);
  const axiosPublic = useaxiospublic();

  useEffect(() => {
    // Simulate delayed data fetching after component mounts
    const delay = setTimeout(() => {
      setLoading(true); // Show skeleton loading state after delay

      axiosPublic.get('/food')
        .then((response) => {
          setFood(response.data);
          setLoading(false); // Hide skeleton loading state once data is fetched
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false); // Set loading to false on error to ensure skeleton UI disappears
        });
    }, 1500); // Simulated delay of 1.5 seconds (1500 milliseconds)

    // Cleanup function to clear timeout
    return () => clearTimeout(delay);
  }, [axiosPublic]);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl text-amber-600 font-semibold text-center pt-16 pb-3">
        Our Categories
      </h1>
      <p className="text-lg text-center pb-16 font-medium text-black">
        All cravings catered. Explore <span className="text-amber-600">RestauraHub</span> restaurants. Every bite an
        adventure.
      </p>

      <div className="flex items-center justify-center gap-6">
        <div>
          <img
            className="h-[800px] w-[500px] rounded-lg"
            src="https://i.ibb.co/F8zDQVP/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface-140725-14554.jpg"
            alt=""
          />
        </div>
        <div>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-300 rounded-lg shadow-lg p-5 w-[300px] h-[300px]"> {/* Adjusted width and height */}
                  <SkeletonTheme color="#bbb" highlightColor="#ccc">
                    <Skeleton width="100%" height="100%" /> {/* Adjusted Skeleton size */}
                  </SkeletonTheme>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center">
              <div className="grid grid-cols-3 gap-6">
                {food.map((item) => (
                  <Food key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
