import { useState } from "react";

export default function Dishcard({item}) {

  const {name,id,image,recipe,price} = item
  const [loading, setLoading] = useState(true);
  

  return (
    <div>
      <div className="card card-compact">
        <figure>
          <img className="h-80 w-full"
            src={image}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text-amber-600 font-bold">{name}</h2>
          <p className="text-black text-left pb-3">{recipe}</p>
          <div className="card-actions justify-between flex items-center">
            <h1 className="text-lg text-amber-600 font-semibold">${price}</h1>
            <button className="btn bg-amber-600 hover:bg-amber-400 w-40 mx-auto text-white text-base mr-3">Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}
