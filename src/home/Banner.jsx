import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="pt-32 pb-20 shapedividers_com-3449">
      <div className="flex items-center justify-center gap-20">
        <div className="pt-32 w-[40%]">
          <h1 className="text-3xl uppercase font-bold text-black pb-3">
            A symphony of dishes we <br />
            <span className="text-amber-600">serve with passion</span>
          </h1>
          <p className="text-base text-black pb-4">
            Discover. Devour. Delight. Explore our finest restaurants on
            Restaurahub! <br /> pen_spark tune share more_vert
          </p>
          <Link>
            <button className="btn bg-amber-600 hover:bg-amber-400 w-40 mx-auto text-white text-base mr-3">
              View Shop
            </button>
          </Link>
          <Link>
            <button className="btn bg-amber-600 hover:bg-amber-400 w-40 mx-auto text-white text-base mr-3">
              Contact us
            </button>
          </Link>
          <Link>
            <button className="btn bg-pink-600 hover:bg-pink-400 w-40 mx-auto text-white text-base">
              Login
            </button>
          </Link>
          <div>
            <img
              className="w-36 mt-20"
              src="https://i.ibb.co/jZJCcBT/top-view-fresh-red-apples-mellow-fruits-dark-desk-ripe-fruit-red-fresh-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
        <div className="relative ml-20 mr-36">
          <div className="">
            <img
              className="rounded-full w-60"
              src="https://i.ibb.co/CH8rSZL/top-close-up-view-chicken-appetizing-chicken-with-herbs-lemon-onion-lavash-board-removebg-preview.png"
              alt=""
            />
          </div>
          <div className="absolute -right-52 top-32">
            <img
              className="rounded-full h- w-60"
              src="https://i.ibb.co/VL8TX0X/peach-juice-cups-with-fruit-slices-inside-removebg-preview.png"
              alt=""
            />
          </div>
          <div className="mt-32">
            <img
              className="rounded-full h-44 w-60"
              src="https://i.ibb.co/VTd6Nd4/beyti-kebab-served-with-ayran-pickles-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
