import { useFetchCocktail } from "../hooks/useFetchCocktail";
import {useIngredients} from "../hooks/useIngredients";
import { useParams } from "react-router-dom";
import IngredientCard from "../components/IngredientCard";
import NavBar from "../components/NavBar";

export default function Cocktail() {
  const { id } = useParams();
  const [cocktail, loading] = useFetchCocktail(id);
  const ingredients = useIngredients(cocktail);

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <NavBar />
      <h1>{cocktail.strDrink}</h1>
      <p>{cocktail.strInstructions}</p>
      <img src={cocktail.strDrinkThumb} alt="" />
      <p>Category: {cocktail.strCategory}</p>
      <p>Glass: {cocktail.strGlass}</p>
      <p>Alcoholic filter: {cocktail.strAlcoholic}</p>
      <h2>Ingredients</h2>
      <ul>
        {ingredients.map((ingredient, index) => (
          <IngredientCard key={index} ingredient={ingredient} />
        ))}
      </ul>
    </>
  );
}