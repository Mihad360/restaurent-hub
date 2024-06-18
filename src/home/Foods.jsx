import { useEffect, useState } from "react";
import Food from "./Food";

export default function Foods() {

    const [food, setFood] = useState([])

    useEffect(()=> {
        fetch('/foods.json')
        .then(res => res.json())
        .then(data => {
            setFood(data)
        })
    },[])
console.log(food);
  return (
    <div>
        <h1 className="text-3xl text-amber-600 font-semibold text-center pt-12 pb-10">Our Categories</h1>
      <div className="flex items-center justify-center gap-6">
        <div>
          <img className="w-[%] h-[800px] object-cover"
            src="https://i.ibb.co/NZTWmCj/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface.jpg"
            alt=""
          />
        </div>
        <div>
            <div>
                <div className="grid grid-cols-3 gap-6">
                    {
                        food.map(item => <Food key={item.id} item={item}></Food>)
                    }
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
