import { useForm } from "react-hook-form";
import { FaEdit } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import useAxiossecure from "../hooks/useAxiossecure";
import Swal from "sweetalert2";

const Updateitem = () => {

    const axiosSecure = useAxiossecure()
    const {name, category, recipe, price, _id} = useLoaderData()

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
      }
      const menudata = await axiosSecure.patch(`/menus/${_id}`, menuItem)
      console.log(menudata.data)
      if(menudata.data.modifiedCount > 0){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "New Recipe added successfully",
          showConfirmButton: false,
          timer: 1500
        });
        reset()
      }
  };

  return (
    <div>
      <div>
        <h1 className="text-center text-3xl font-bold text-amber-600 pt-5">
          Update a specefic Item
        </h1>
        <div className="bg-gray-200 rounded-lg p-10 mt-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div>
                <label className="text-lg font-medium text-black">
                  Recipe Name
                </label>
              </div>
              <input
              defaultValue={name}
                type="text"
                placeholder="item name"
                className="outline-none px-3 py-2 rounded-lg border border-amber-600 w-full mt-2"
                {...register("name")}
              />
            </div>
            <div className="flex items-center gap-10 pt-3">
              <div>
                <div>
                  <label className="text-lg font-medium text-black">
                    Category
                  </label>
                </div>
                <select
                  defaultValue={category}
                  className="outline-none px-3 py-2 rounded-lg border border-amber-600 w-[400px] mt-2"
                  {...register("category")}
                >
                  {/* <option disabled value="default">
                    Select a category{" "}
                  </option> */}
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
                  <label className="text-lg font-medium text-black">
                    Price
                  </label>
                </div>
                <input
                defaultValue={price}
                  type="number"
                  placeholder="item price"
                  className="outline-none px-3 py-2 rounded-lg border border-amber-600 w-[400px] mt-2"
                  {...register("price")}
                />
              </div>
            </div>
            <div className="pt-3">
              <div>
                <label className="text-lg font-medium text-black">
                  Recipe Details
                </label>
              </div>
              <textarea
              defaultValue={recipe}
                type="text"
                placeholder="recipe details or description"
                rows={4}
                className="outline-none px-3 py-2 rounded-lg border border-amber-600 w-full mt-2"
                {...register("recipe")}
              />
            </div>
            <div className="mt-7 text-center form-control">
              <button
                type="submit"
                className="btn bg-amber-600 hover:bg-amber-400 btn-md mx-auto text-white text-lg"
              >
                Update Item <FaEdit />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Updateitem;
