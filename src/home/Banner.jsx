import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="shapedividers_com-3449 bg-gradient-to-r from-amber-200 via-gray-100 to-gray-100">
      <div className="pt-24 md:pt-32 lg:pt-44 pb-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-evenly md:gap-20 gap-10">
          <div className="w-full md:w-full lg:w-[40%] lg:mr-28 z-10 text-center lg:text-left">
            <h1 className="text-2xl lg:text-3xl uppercase font-bold text-black pb-3 ">
              A symphony of dishes we <br />
              <span className="text-amber-600">serve with passion</span>
            </h1>
            <p className="text-sm md:text-base text-black pb-4">
              Discover. Devour. Delight. Explore our finest restaurants on
              Restaurahub! <br /> pen_spark tune share more_vert
            </p>
            <div className="flex flex-col md:flex-row justify-center md:justify-center items-center gap-4 md:gap-3 mt-4">
              <Link to="/shop">
                <button className="btn bg-amber-600 hover:bg-amber-400 md:w-40 text-white text-base">
                  View Shop
                </button>
              </Link>
              <Link to="/contactus">
                <button className="btn bg-amber-600 hover:bg-amber-400 md:w-40 text-white text-base">
                  Contact us
                </button>
              </Link>
              <Link to="/login">
                <button className="btn bg-pink-600 hover:bg-pink-400 md:w-40 text-white text-base">
                  Login
                </button>
              </Link>
            </div>
            <div className="mt-8 flex justify-start lg:justify-start md:pl-20 lg:pl-0">
              <img
                className="w-28 md:w-36"
                src="https://i.ibb.co/jZJCcBT/top-view-fresh-red-apples-mellow-fruits-dark-desk-ripe-fruit-red-fresh-removebg-preview.png"
                alt="Fresh Apples"
              />
            </div>
          </div>

          <div className="hidden lg:block ">
          <div className="relative flex justify-center md:block mr-40">
            <div className="mb-8 md:mb-0">
              <img
                className="rounded-full w-40 md:w-60"
                src="https://i.ibb.co/CH8rSZL/top-close-up-view-chicken-appetizing-chicken-with-herbs-lemon-onion-lavash-board-removebg-preview.png"
                alt="Appetizing Chicken"
              />
            </div>
            <div className="absolute -right-32 md:-right-52 top-20 md:top-32">
              <img
                className="rounded-full w-40 md:w-60"
                src="https://i.ibb.co/VL8TX0X/peach-juice-cups-with-fruit-slices-inside-removebg-preview.png"
                alt="Peach Juice"
              />
            </div>
            <div className="mt-16 md:mt-32">
              <img
                className="rounded-full w-40 md:w-60"
                src="https://i.ibb.co/VTd6Nd4/beyti-kebab-served-with-ayran-pickles-removebg-preview.png"
                alt="Beyti Kebab"
              />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
