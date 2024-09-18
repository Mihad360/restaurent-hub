import { useForm } from "react-hook-form";
import { GiHotMeal } from "react-icons/gi";
import useaxiospublic from "../hooks/useaxiospublic";
import useAxiossecure from "../hooks/useAxiossecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_UPLOAD_KEY;
const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const Additems = () => {

  const axiosPublic = useaxiospublic()
  const axiosSecure = useAxiossecure()

  const generateUniqueId = () => {
    return `menu-${Date.now()}`;  // Simple unique ID based on timestamp
  }

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const imagefile = {image: data.image[0]}
    const res = await axiosPublic.post(image_hosting_url, imagefile, {
      headers: {
        "content-type": 'multipart/form-data'
      }
    })
    if(res.data.success){
      const menuItem = {
        _id: generateUniqueId(),
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url
      }
      const menudata = await axiosSecure.post('/menus', menuItem)
      console.log(menudata.data)
      if(menudata.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "New Recipe added successfully",
          showConfirmButton: false,
          timer: 1500
        });
        reset()
      }
    }
    console.log(res.data)
  };
  

  return (
    <div>
      <div>
        <h1 className="text-center text-lg lg:text-3xl font-bold text-amber-600 pt-5">
          Add Items
        </h1>
        <div className="bg-gray-200 rounded-lg p-3 lg:p-10 mt-6 mr-3 lg:mr-0">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div>
                <label className="text-base lg:text-lg font-medium text-black">Recipe Name</label>
              </div>
              <input type="text" placeholder="item name"
                className="outline-none px-3 py-2 rounded-lg border border-amber-600 w-36 md:w-full mt-2"
                {...register("name", {required: true})}
              />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 lg:gap-10 pt-3">
              <div>
                <div>
                  <label className="text-base lg:text-lg font-medium text-black">Category</label>
                </div>
                <select defaultValue="default"
                  className="outline-none px-3 py-2 rounded-lg border border-amber-600 w-36 md:w-52 lg:w-[400px] mt-2 w-"
                  {...register("category", {required: true})}
                >
                  <option disabled value="default">Select a category </option>
                  <option value="Dessert">Dessert</option>
                  <option value="Soups">Soups</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Chicken">Chicken</option>
                  <option value="Drinks">Drinks</option>
                  <option value="Burger">Burger</option>
                  <option value="Salad">Salad</option>
                </select>
              </div>
              <div>
                <div>
                  <label className="text-base lg:text-lg font-medium text-black">Price</label>
                </div>
                <input type="number" placeholder="item price"
                  className="outline-none px-3 py-2 rounded-lg border border-amber-600 w-36 md:w-full lg:w-[400px] mt-2"
                  {...register("price", {required: true})}
                />
              </div>
            </div>
            <div className="pt-3">
              <div>
                <label className="text-base lg:text-lg font-medium text-black">Recipe Details</label>
              </div>
              <textarea type="text" placeholder="recipe details or description" rows={4} 
                className="outline-none px-3 py-2 rounded-lg border border-amber-600 w-36 md:w-full mt-2"
                {...register("recipe", {required: true})}
              />
            </div>
            <div className="pt-3">
              <div>
                <label className="text-base lg:text-lg font-medium text-black">Recipe Image</label>
              </div>
              <input
                className="mt-2 file-input file-input-bordered w-36 md:w-full max-w-md"
                type="file"
                {...register("image", {required: true})}
              />
            </div>
            <div className="mt-7 text-center form-control">
              <button type="submit" className="btn bg-amber-600 hover:bg-amber-400 btn-md mx-auto text-white text-base lg:text-lg">Add Item <GiHotMeal /></button>
              
              </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Additems;
