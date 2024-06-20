/* eslint-disable react/no-unescaped-entities */

export default function Nood() {
  return (
    <div>
      <h1 className="text-3xl text-amber-600 font-semibold text-center pt-16 pb-16">
        Special dish
      </h1>
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center gap-20">
          <div className="w-[500px] h-[500px]">
            <img
              className="w-full h-full object-cover rounded-full"
              src="https://i.ibb.co/gtgdVZW/close-up-delicious-chicken-meal.jpg"
              alt="Delicious Chicken Meal"
            />
          </div>
          <div className="max-w-lg">
            <h1 className="text-3xl font-bold pb-4 uppercase">
              Elevating the most delicious{" "}
              <span className="text-amber-600">chicken meal</span>
            </h1>
            <p className="text-lg text-black">
              Love noodles? We do too! At RestauraHub, we serve seriously
              delicious noodle dishes. Made with fresh ingredients and exciting
              recipes, our noodles are anything but boring. Big flavors, fun
              textures, all in one amazing bite. We don't just do noodles, we
              make them incredible! Come try them for yourself!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
