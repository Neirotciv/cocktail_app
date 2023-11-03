import { Link } from "react-router-dom";

export default function IngredientCard({ ingredient }) {
  return (
    <div>
      <img src={ingredient.imgUrl} alt="" />
      <h1>{ingredient.ingredient}</h1>
      <span>{ingredient.measure}</span>
    </div>
  );
}
