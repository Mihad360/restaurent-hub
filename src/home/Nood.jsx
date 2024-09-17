/* eslint-disable react/no-unescaped-entities */

export default function Nood() {
  return (
    <div className="bg-gradient-to-b from-gray-100 via-amber-100 to-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl text-amber-600 font-semibold text-center pb-16">
          Special Dish
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <div className="">
            <img
              className="h-[250px] w-[250px] lg:h-full lg:w-full object-cover rounded-full shadow-lg"
              src="https://i.ibb.co/yqPxD3p/honey-chicken-meal-prep-5-1024x683-1.jpg"
              alt="Delicious Chicken Meal"
            />
          </div>
          <div className="max-w-lg text-center md:text-left">
            <h1 className="text-2xl lg:text-3xl font-bold pb-4 uppercase">
              Elevating the most delicious{" "}
              <span className="text-amber-600">chicken meal</span>
            </h1>
            <p className="text-base lg:text-lg text-black leading-relaxed">
              Love noodles? We do too! At RestauraHub, we serve seriously
              delicious noodle dishes. Made with fresh ingredients and
              exciting recipes, our noodles are anything but boring. Big
              flavors, fun textures, all in one amazing bite. We don't just do
              noodles, we make them incredible! Come try them for yourself!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
