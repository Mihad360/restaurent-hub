import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Dishcard from "./Dishcard";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import useaxiospublic from "../hooks/useaxiospublic";

export default function Dishes() {
  
  const [tabindex, setTabindex] = useState(0);
  const [food, setFood] = useState([]);
  const [loading, setLoading] = useState(false);
  const axiosPublic = useaxiospublic(); // Assuming useaxiospublic hook is correctly implemented

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(true); // Show skeleton loading state after delay

      axiosPublic.get('/menus')
        .then((response) => {
          setFood(response.data);
          setLoading(false); // Hide skeleton loading state once data is fetched
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
          setLoading(false); // Set loading to false on error to ensure skeleton UI disappears
        });
    }, 2000); // Simulated delay of 1.5 seconds (1500 milliseconds)

    return () => clearTimeout(delay); // Cleanup function to clear timeout
  }, [axiosPublic]);

  const desserts = food.filter((item) => item.category === "Dessert");
  const soups = food.filter((item) => item.category === "Soups");
  const pizzas = food.filter((item) => item.category === "Pizza");
  const chickens = food.filter((item) => item.category === "Chicken");
  const drinks = food.filter((item) => item.category === "Drinks");
  const burgers = food.filter((item) => item.category === "Burger");
  const salads = food.filter((item) => item.category === "Salad");

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div>
          <Tabs
            className="text-center pb-16 pt-16"
            defaultIndex={tabindex}
            onSelect={(index) => setTabindex(index)}
          >
            <TabList className="flex justify-center space-x-4 border-b border-gray-300">
              <Tab className="px-4 py-2 cursor-pointer" selectedClassName="bg-gray-100 text-amber-600 font-bold border-b-2 border-b-amber-600">
                Desserts
              </Tab>
              <Tab className="px-4 py-2 cursor-pointer" selectedClassName="bg-gray-100 text-amber-600 font-bold border-b-2 border-b-amber-600">
                Soups
              </Tab>
              <Tab className="px-4 py-2 cursor-pointer" selectedClassName="bg-gray-100 text-amber-600 font-bold border-b-2 border-b-amber-600">
                Pizzas
              </Tab>
              <Tab className="px-4 py-2 cursor-pointer" selectedClassName="bg-gray-100 text-amber-600 font-bold border-b-2 border-b-amber-600">
                Chickens
              </Tab>
              <Tab className="px-4 py-2 cursor-pointer" selectedClassName="bg-gray-100 text-amber-600 font-bold border-b-2 border-b-amber-600">
                Drinks
              </Tab>
              <Tab className="px-4 py-2 cursor-pointer" selectedClassName="bg-gray-100 text-amber-600 font-bold border-b-2 border-b-amber-600">
                Burgers
              </Tab>
              <Tab className="px-4 py-2 cursor-pointer" selectedClassName="bg-gray-100 text-amber-600 font-bold border-b-2 border-b-amber-600">
                Salads
              </Tab>
            </TabList>
            <TabPanel>
              {
                loading ? (
            <div className="flex justify-center my-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(9)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-300 rounded-lg shadow-lg p-5 w-[400px] h-[400px]"> {/* Adjusted width and height */}
                  <SkeletonTheme color="#bbb" highlightColor="#ccc">
                    <Skeleton width="100%" height="100%" /> {/* Adjusted Skeleton size */}
                  </SkeletonTheme>
                </div>
              ))}
            </div>
            </div>
          )  : <div className="flex justify-center pt-16">
                <div className="grid grid-cols-3 gap-10">
                  {desserts.map((item) => (
                    <Dishcard key={item.id} item={item}></Dishcard>
                  ))}
                </div>
              </div>
              }
            </TabPanel>
            <TabPanel>
              {
                loading ? (
            <div className="flex justify-center my-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(9)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-300 rounded-lg shadow-lg p-5 w-[400px] h-[400px]"> {/* Adjusted width and height */}
                  <SkeletonTheme color="#bbb" highlightColor="#ccc">
                    <Skeleton width="100%" height="100%" /> {/* Adjusted Skeleton size */}
                  </SkeletonTheme>
                </div>
              ))}
            </div>
            </div>
          )  : <div className="flex justify-center pt-16">
                <div className="grid grid-cols-3 gap-10">
                  {soups.map((item) => (
                    <Dishcard key={item.id} item={item}></Dishcard>
                  ))}
                </div>
              </div>
              }
            </TabPanel>
            <TabPanel>
              {
                loading ? (
            <div className="flex justify-center my-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(9)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-300 rounded-lg shadow-lg p-5 w-[400px] h-[400px]"> {/* Adjusted width and height */}
                  <SkeletonTheme color="#bbb" highlightColor="#ccc">
                    <Skeleton width="100%" height="100%" /> {/* Adjusted Skeleton size */}
                  </SkeletonTheme>
                </div>
              ))}
            </div>
            </div>
          )  : <div className="flex justify-center pt-16">
                <div className="grid grid-cols-3 gap-10">
                  {pizzas.map((item) => (
                    <Dishcard key={item.id} item={item}></Dishcard>
                  ))}
                </div>
              </div>
              }
            </TabPanel>
            <TabPanel>
              {
                loading ? (
            <div className="flex justify-center my-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(9)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-300 rounded-lg shadow-lg p-5 w-[400px] h-[400px]"> {/* Adjusted width and height */}
                  <SkeletonTheme color="#bbb" highlightColor="#ccc">
                    <Skeleton width="100%" height="100%" /> {/* Adjusted Skeleton size */}
                  </SkeletonTheme>
                </div>
              ))}
            </div>
            </div>
          )  : <div className="flex justify-center pt-16">
                <div className="grid grid-cols-3 gap-10">
                  {chickens.map((item) => (
                    <Dishcard key={item.id} item={item}></Dishcard>
                  ))}
                </div>
              </div>
              }
            </TabPanel>
            <TabPanel>
              {
                loading ? (
            <div className="flex justify-center my-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(9)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-300 rounded-lg shadow-lg p-5 w-[400px] h-[400px]"> {/* Adjusted width and height */}
                  <SkeletonTheme color="#bbb" highlightColor="#ccc">
                    <Skeleton width="100%" height="100%" /> {/* Adjusted Skeleton size */}
                  </SkeletonTheme>
                </div>
              ))}
            </div>
            </div>
          )  : <div className="flex justify-center pt-16">
                <div className="grid grid-cols-3 gap-10">
                  {drinks.map((item) => (
                    <Dishcard key={item.id} item={item}></Dishcard>
                  ))}
                </div>
              </div>
              }
            </TabPanel>
            <TabPanel>
              {
                loading ? (
            <div className="flex justify-center my-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(9)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-300 rounded-lg shadow-lg p-5 w-[400px] h-[400px]"> {/* Adjusted width and height */}
                  <SkeletonTheme color="#bbb" highlightColor="#ccc">
                    <Skeleton width="100%" height="100%" /> {/* Adjusted Skeleton size */}
                  </SkeletonTheme>
                </div>
              ))}
            </div>
            </div>
          )  : <div className="flex justify-center pt-16">
                <div className="grid grid-cols-3 gap-10">
                  {burgers.map((item) => (
                    <Dishcard key={item.id} item={item}></Dishcard>
                  ))}
                </div>
              </div>
              }
            </TabPanel>
            <TabPanel>
              {
                loading ? (
            <div className="flex justify-center my-16">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(9)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gray-300 rounded-lg shadow-lg p-5 w-[400px] h-[400px]"> {/* Adjusted width and height */}
                  <SkeletonTheme color="#bbb" highlightColor="#ccc">
                    <Skeleton width="100%" height="100%" /> {/* Adjusted Skeleton size */}
                  </SkeletonTheme>
                </div>
              ))}
            </div>
            </div>
          )  : <div className="flex justify-center pt-16">
                <div className="grid grid-cols-3 gap-10">
                  {salads.map((item) => (
                    <Dishcard key={item.id} item={item}></Dishcard>
                  ))}
                </div>
              </div>
              }
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
