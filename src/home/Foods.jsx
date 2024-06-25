import { useEffect, useState } from "react";
import Food from "./Food";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function Foods() {
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(false); // Start with loading false

  useEffect(() => {
    // Simulate delayed data fetching after component mounts
    const delay = setTimeout(() => {
      setLoading(true); // Show skeleton loading state after delay

      fetch("/foods.json")
        .then((res) => res.json())
        .then((data) => {
          setFood(data);
          setLoading(false); // Hide skeleton loading state once data is fetched
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false); // Set loading to false on error to ensure skeleton UI disappears
        });
    }, 1500); // Simulated delay of 1.5 seconds (1500 milliseconds)

    // Cleanup function to clear timeout
    return () => clearTimeout(delay);
  }, []);

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
            src="https://i.ibb.co/NZTWmCj/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface.jpg"
            alt=""
          />
        </div>
        <div>
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-300 rounded-lg shadow-lg p-5">
                  <Skeleton height={300} />
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
