import { Link } from "react-router-dom";

export default function IngredientCard({ ingredient }) {
  return (
    <article className="flex flex-col items-center m-4">
      <div className="p-2 bg-yellow-200 rounded-full shadow-md w-28">
        <img src={ingredient.imgUrl} alt="" />
      </div>
      <h1 className="mt-2 font-bold">{ingredient.ingredient}</h1>
      <span>{ingredient.measure}</span>
    </article>
  );
}
