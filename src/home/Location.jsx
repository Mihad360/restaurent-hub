/* eslint-disable react/no-unescaped-entities */

import {
  FaLocationArrow,
  FaLocationCrosshairs,
  FaLocationDot,
  FaMapLocationDot,
} from "react-icons/fa6";

export default function Location() {
  const redirectToLocation = (location) => {
    const url = `https://www.google.com/maps?q=${location}`;
    window.open(url, "_blank");
  };

  return (
    <div className="bg-amber-50 bg-gradient-to-b from-amber-100 to-gray-50">
      <div className="pt-16">
        <h1 className="text-3xl font-semibold text-center tracking-wide pb-3">
          FROM THE OUTLET YOU CAN FIND OUR BEST <br />{" "}
          <span className="text-amber-600">FOODS</span> FROM YOUR CLOSEST{" "}
          <span className="text-amber-600">LOCATION</span>
        </h1>
        <p className="text-lg mx-auto text-center tracking-wide text-black max-w-[750px]">
          Our restaurant is conveniently located in those places, offering a
          comfortable and welcoming space for you to relax and enjoy a delicious
          meal. Whether you're catching up with friends or celebrating a special
          occasion, our (describe the style - casual, elegant, etc.) atmosphere
          is perfect for any gathering.
        </p>
      </div>
      <div className="pt-16">
        <div className="flex items-center justify-center gap-6">
          <div className="border-amber-600 border-2 p-8 space-y-2 rounded-tr-3xl rounded-bl-3xl hover:bg-amber-600 hover:text-white duration-300">
            <h1>
              <FaLocationDot className="mx-auto text-4xl" />
            </h1>
            <p className="text-black text-xl font-semibold text-center">
              NARAYANGONJ
            </p>
            <button
              className="btn bg-amber-600 hover:bg-amber-400 w-40 mx-auto text-white text-base"
              onClick={() => redirectToLocation("Chashara, Narayanganj")}>
              View location
            </button>
          </div>
          <div className="border-amber-600 border-2 p-8 space-y-2 rounded-tr-3xl rounded-bl-3xl hover:bg-amber-600 hover:text-white duration-300">
            <h1>
              <FaLocationCrosshairs className="mx-auto text-4xl" />
            </h1>
            <p className="text-black text-xl font-semibold text-center">
              DHAKA
            </p>
            <button
              className="btn bg-amber-600 hover:bg-amber-400 w-40 mx-auto text-white text-base"
              onClick={() => redirectToLocation("Bailey Rd, Dhaka")}>
              View location
            </button>
          </div>
          <div className="border-amber-600 border-2 p-8 space-y-2 rounded-tr-3xl rounded-bl-3xl hover:bg-amber-600 hover:text-white duration-300">
            <h1>
              <FaMapLocationDot className="mx-auto text-4xl" />
            </h1>
            <p className="text-black text-xl font-semibold text-center">
              CHITTAGONG
            </p>
            <button
              className="btn bg-amber-600 hover:bg-amber-400 w-40 mx-auto text-white text-base"
              onClick={() =>
                redirectToLocation(
                  "Chattogram Medical College Hospital, 57 K.B. Fazlul Kader Rd, Chattogram 4203"
                )
              }>
              View location
            </button>
          </div>
          <div className="border-amber-600 border-2 p-8 space-y-2 rounded-tr-3xl rounded-bl-3xl hover:bg-amber-600 hover:text-white duration-300">
            <h1>
              <FaLocationArrow className="mx-auto text-4xl" />
            </h1>
            <p className="text-black text-xl font-semibold text-center">
              DHAKA
            </p>
            <button
              className="btn bg-amber-600 hover:bg-amber-400 w-40 mx-auto text-white text-base"
              onClick={() => redirectToLocation("Gulshan 1, Dhaka 1212")}>
              View location
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
