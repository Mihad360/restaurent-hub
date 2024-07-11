import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
// import "../styles/custom-react-tabs.css";  // Adjust the path as necessary
import useFood from "../hooks/useFood";
import Dishcard from "./Dishcard";

export default function Dishes() {
  const [tabindex, setTabindex] = useState(0);
  const [food] = useFood();
  console.log(food);

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
              <div className="flex justify-center pt-16">
                <div className="grid grid-cols-3 gap-10">
                  {desserts.map((item) => (
                    <Dishcard key={item.id} item={item}></Dishcard>
                  ))}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex justify-center pt-16">
                <div className="grid grid-cols-3 gap-10">
                  {soups.map((item) => (
                    <Dishcard key={item.id} item={item}></Dishcard>
                  ))}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex justify-center pt-16">
                <div className="grid grid-cols-3 gap-10">
                  {pizzas.map((item) => (
                    <Dishcard key={item.id} item={item}></Dishcard>
                  ))}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex justify-center pt-16">
                <div className="grid grid-cols-3 gap-10">
                  {chickens.map((item) => (
                    <Dishcard key={item.id} item={item}></Dishcard>
                  ))}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex justify-center pt-16">
                <div className="grid grid-cols-3 gap-10">
                  {drinks.map((item) => (
                    <Dishcard key={item.id} item={item}></Dishcard>
                  ))}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex justify-center pt-16">
                <div className="grid grid-cols-3 gap-10">
                  {burgers.map((item) => (
                    <Dishcard key={item.id} item={item}></Dishcard>
                  ))}
                </div>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="flex justify-center pt-16">
                <div className="grid grid-cols-3 gap-10">
                  {salads.map((item) => (
                    <Dishcard key={item.id} item={item}></Dishcard>
                  ))}
                </div>
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
