import { Link } from "react-router-dom";

export default function Food({ item }) {
  const { name, id, image } = item;
  return (
    <div>
      <div className="bg-gradient-to-b from-amber-300 to-amber-100 rounded-lg shadow-lg p-5">
        <img
          className="w-52 h-64 rounded-lg object-cover mb-4"
          src={image}
          alt={name}
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-4">{name}</h1>
          <Link to='/shop'>
            <button className="bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-white py-2 px-6 rounded-lg border-2 border-amber-700 shadow-md transform transition-transform duration-100 hover:scale-110 hover:shadow-lg">
              Visit Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
