import { useFetchCocktail } from "../hooks/useFetchCocktail";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Cocktail() {
  const { id } = useParams();
  const [cocktail, loading] = useFetchCocktail(id);

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <Link to="/">Back to home</Link>
      <h1>{cocktail.strDrink}</h1>
      <p>{cocktail.strInstructions}</p>
      <img src={cocktail.strDrinkThumb} alt="" />
      <p>Category: {cocktail.strCategory}</p>
      <p>Glass: {cocktail.strGlass}</p>
      <p>Alcoholic filter: {cocktail.strAlcoholic}</p>
    </>
  );
}
