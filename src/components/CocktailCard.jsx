import { Link } from "react-router-dom";
import { FavoriteContext } from "../contexts/FavoriteContext";
import { useContext, useState, useEffect } from "react";
import {
  FavoriteIcon,
  FavoriteIconFilled,
} from "../components/icons/FavoriteIcon";

export default function CocktailCard({ cocktail }) {
  const { favorites, toggleFavorite, checkIfFavorite } = useContext(FavoriteContext);
  const [isFavorite, setIsFavorites] = useState(false);

  useEffect(() => {
    const isFavorite = checkIfFavorite(cocktail.idDrink);
    setIsFavorites(isFavorite);
  }, [favorites]);

  return (
    <article className="flex flex-col items-center m-2 border w-96 rounded-xl">
      <img src={cocktail.strDrinkThumb + "/preview"} 
        alt="" 
        className="w-96 h-96 rounded-t-xl"
      />
      <h1 className="text-xl font-bold">{cocktail.strDrink}</h1>
      <div className="flex items-center justify-around w-full py-2">
        <Link to={`/cocktail/${cocktail.idDrink}`} className="px-8 py-2 rounded bg-emerald-400 hover:bg-emerald-600">Show</Link>
        <div>
          {isFavorite ? (
            <FavoriteIconFilled onClick={() => toggleFavorite(cocktail.idDrink)} />
          ) : (
            <FavoriteIcon onClick={() => toggleFavorite(cocktail.idDrink)} />
          )}
        </div>
      </div>
    </article>
  );
}
