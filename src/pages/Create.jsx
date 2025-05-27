import { useForm } from "react-hook-form"
import { useContext } from 'react';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { RecipeContext } from '../context/RecipeContext';


const Create = () => {
  const { data, setData } = useContext(RecipeContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    setData([...data, recipe]);
    toast.success("New recipe created!");
  }

  return (
    <form className="mt-5 p-5 shadow">
      <input className="mb-5 block border-b p-1 outline-0" {...register("image")} type="url" placeholder="Image url" />
      <input className="mb-5 block border-b p-1 outline-0" {...register("title")} type="text" placeholder="Title" />
      <input className="mb-5 block border-b p-1 outline-0" {...register("chef")} type="text" placeholder="Chef" />
      <textarea className="mb-5 block border-b p-1 outline-0" {...register("desc")} placeholder="recipe description..."></textarea>
      <textarea className="mb-5 block border-b p-1 outline-0" {...register("ingr")} placeholder="recipe ingredients, seperated by comma"></textarea>
      <textarea className="mb-5 block border-b p-1 outline-0" {...register("inst")} placeholder="recipe instructions, seperated by comma"></textarea>

      <select className="mb-5 block border-b p-1 outline-0" {...register("category")}>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="supper">Supper</option>
        <option value="dinner">Dinner</option>
      </select>

      <button>Create Recipe</button>
    </form>
  )
}

export default Create; 