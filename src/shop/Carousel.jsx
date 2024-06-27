/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

export default function Carousel({ slides, autoplayInterval = 3000 }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  let nextSlide = () => {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [current, autoplayInterval]);

  return (
    <div className="overflow-hidden relative h-[750px]">
      <div
        className={`flex mt-[92px] transition ease-out duration-300`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}>
        {slides.map((s) => {
          return <img className="w-full h-full object-cover" src={s} alt="" />;
        })}
      </div>

      <div className="absolute flex justify-between items-center top-0 w-full h-full px-10 pt-20">
        <button
          onClick={previousSlide}
          className="text-white text-2xl opacity-50">
          <FaCircleArrowLeft />
        </button>
        <button onClick={nextSlide} className="text-white text-2xl opacity-50">
          <FaCircleArrowRight />
        </button>
      </div>

      <div className="absolute bottom-0 py-7 flex justify-center gap-5 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-4 h-4 cursor-pointer ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}></div>
          );
        })}
      </div>
    </div>
  );
}
