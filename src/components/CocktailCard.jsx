import { Link } from "react-router-dom";
import { FavoriteContext } from "../contexts/FavoriteContext";
import { useContext } from "react";

export default function CocktailCard({ cocktail }) {
  const { favorites, toggleFavorite } = useContext(FavoriteContext);

  return (
    <>
      <article>
        <img src={cocktail.strDrinkThumb + "/preview"} alt="" />
        <h1>{cocktail.strDrink}</h1>
        <Link to={`/cocktail/${cocktail.idDrink}`}>Show</Link>
        <span className="ml-4" onClick={() => toggleFavorite(cocktail.idDrink)}>
          Fav
        </span>
      </article>
    </>
  );
}
