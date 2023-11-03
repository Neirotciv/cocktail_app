import { Link } from "react-router-dom";
import { FavoriteContext } from "../contexts/FavoriteContext";
import { useContext } from "react";

export default function CocktailCard({ cocktail }) {
  const { favorites, addFavorite } = useContext(FavoriteContext);

  return (
    <>
      <article>
        <img src={cocktail.strDrinkThumb + "/preview"} alt="" />
        <h1>{cocktail.strDrink}</h1>
        <Link to={`cocktail/${cocktail.idDrink}`}>Show</Link>
        <span className="ml-4" onClick={() => addFavorite(cocktail.idDrink)}>
          Fav
        </span>
      </article>
    </>
  );
}
