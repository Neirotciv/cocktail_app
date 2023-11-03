import { Link } from "react-router-dom";
import { FavoriteContext } from "../contexts/FavoriteContext";
import { useContext, useState, useEffect } from "react";
import { FavoriteIcon, FavoriteIconFilled } from "../components/icons/FavoriteIcon";

export default function CocktailCard({ cocktail }) {
  const { favorites, toggleFavorite, checkIfFavorite } = useContext(FavoriteContext);
  const [isFavorite, setIsFavorites] = useState(false);

  useEffect(() => {
    const isFavorite = checkIfFavorite(cocktail.idDrink)
    setIsFavorites(isFavorite);
  },[favorites])

  return (
    <>
      <article>
        <img src={cocktail.strDrinkThumb + "/preview"} alt="" />
        <h1>{cocktail.strDrink}</h1>
        <Link to={`/cocktail/${cocktail.idDrink}`}>Show</Link>
        {isFavorite ? (
          <FavoriteIconFilled onClick={() => toggleFavorite(cocktail.idDrink)} />
        ) : (
          <FavoriteIcon onClick={() => toggleFavorite(cocktail.idDrink)} />
        )}
      </article>
    </>
  );
}
