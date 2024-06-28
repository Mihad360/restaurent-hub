import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useFood from "../hooks/useFood";

export default function Dishes() {

  const [tabindex, setTabindex] = useState(0)
  const [food] = useFood()
  console.log(food)

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div>
          <Tabs
            className="text-center pb-16 pt-16"
            defaultIndex={tabindex}
            onSelect={(index) => setTabindex(index)}>
            <TabList>
              <Tab>Desserts</Tab>
              <Tab>Soups</Tab>
              <Tab>Pizzas</Tab>
              <Tab>Chickens</Tab>
              <Tab>Drinks</Tab>
              <Tab>Burgers</Tab>
              <Tab>Salads</Tab>
            </TabList>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
