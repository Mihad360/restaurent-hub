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
    const delay = setTimeout(() => {
      setLoading(true);

      axiosPublic
        .get('/food')
        .then((response) => {
          setFood(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    }, 1500);

    return () => clearTimeout(delay);
  }, [axiosPublic]);

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-3xl text-amber-600 font-semibold text-center pt-16 pb-3">
        Our Categories
      </h1>
      <p className="text-lg text-center pb-16 font-medium text-black">
        All cravings catered. Explore{" "}
        <span className="text-amber-600">RestauraHub</span> restaurants. Every
        bite an adventure.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div>
          <img
            className="h-[300px] md:hidden lg:block lg:h-[800px] w-full lg:w-[500px] object-cover rounded-lg shadow-lg"
            src="https://i.ibb.co/F8zDQVP/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface-140725-14554.jpg"
            alt="Delicious Meals"
          />
        </div>
        <div className="flex-1">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-300 rounded-lg shadow-lg p-5 w-full h-[300px]">
                  <SkeletonTheme color="#bbb" highlightColor="#ccc">
                    <Skeleton width="100%" height="100%" />
                  </SkeletonTheme>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {food.map((item) => (
                <Food key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
