import { FaFacebook, FaSquareInstagram } from "react-icons/fa6";

export default function Followus() {
  return (
    <div className="bg-gray-50">
      <div className=" pt-20 pb-16 max-w-7xl mx-auto">
        <h1 className="text-center text-3xl text-black font-bold uppercase">
          Follow us on <br />
          <span className="text-amber-600">Social media</span>
        </h1>
        <div className="flex items-center justify-center gap-5 pt-6">
          <div>
            <a
              target="_blank"
              className="border-2 border-gray-700 flex items-center text-xl font-semibold gap-3 px-8 rounded-full py-2 hover:bg-amber-600 hover:text-white hover:scale-110 transition-all ease-in-out duration-200"
              href="https://www.facebook.com/MontasirMihad360">
              <span className="text-2xl">
                <FaFacebook />
              </span>
              Facebook
            </a>
          </div>
          <div>
            <a
              target="_blank"
              className="border-2 border-gray-700 flex items-center text-xl font-semibold gap-3 px-8 rounded-full py-2 hover:bg-amber-600 hover:text-white hover:scale-110 transition-all ease-in-out duration-200"
              href="https://www.instagram.com/muffin_lis_s/">
              <FaSquareInstagram className="text-2xl" />
              Instagram
            </a>
          </div>
        </div>
        <div className="pt-8 pb-8 mt-10 relative w-[1100px] mx-auto h-[600px] transition-all hover:scale-105 ease-in-out duration-200 ">
          <img
            className="w-full h-full rounded-full transition-transform duration-500 hover:rotate-6 object-cover"
            src="https://i.ibb.co/F75tfbQ/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface.jpg"
            alt=""
          />
          <div className="absolute inset-0 bg-black hover:bg-zinc-600 hover:bg-opacity-30 bg-opacity-30 rounded-full flex items-center justify-center">
            <p className="text-white text-3xl font-bold">Delicious Meals</p>
          </div>
        </div>
      </div>
    </div>
  );
}
