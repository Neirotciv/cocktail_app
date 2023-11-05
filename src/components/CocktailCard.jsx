import { Link } from "react-router-dom";
import { FavoriteContext } from "../contexts/FavoriteContext";
import { useContext, useState, useEffect } from "react";
import {
  FavoriteIcon,
  FavoriteIconFilled,
} from "../components/icons/FavoriteIcon";

export default function CocktailCard({ cocktail }) {
  const { favorites, toggleFavorite, checkIfFavorite } =
    useContext(FavoriteContext);
  const [isFavorite, setIsFavorites] = useState(false);

  useEffect(() => {
    const isFavorite = checkIfFavorite(cocktail.idDrink);
    setIsFavorites(isFavorite);
  }, [favorites]);

  return (
    <article className="relative flex flex-col items-center m-2 border-2 shadow-xl w-96 rounded-xl">
      <img
        src={cocktail.strDrinkThumb + "/preview"}
        alt=""
        className="w-96 h-96 rounded-xl"
      />
      <div className="absolute flex flex-col w-full ml-4 bottom-4">
        <h1 className="my-2 text-xl font-bold text-white">{cocktail.strDrink}</h1>
        <div className="z-10 flex items-center justify-around w-1/3 py-2 rounded bg-black/60">
          <Link
            to={`/cocktail/${cocktail.idDrink}`}
            className="px-2 rounded bg-emerald-400 hover:bg-emerald-600"
          >
            Show
          </Link>
          <div>
            {isFavorite ? (
              <FavoriteIconFilled
                onClick={() => toggleFavorite(cocktail.idDrink)}
              />
            ) : (
              <FavoriteIcon onClick={() => toggleFavorite(cocktail.idDrink)} />
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
