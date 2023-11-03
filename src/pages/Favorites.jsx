import { FavoriteContext } from "../contexts/FavoriteContext";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CocktailCard from "../components/CocktailCard";

export default function Favorites() {
  const { favorites } = useContext(FavoriteContext);
  const [loading, setLoading] = useState(true);
  const [favoriteCocktails, setFavoritesCocktails] = useState([]);

  // Je dois fetch le tableau de favoris
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const requests = favorites.map((id) =>
          fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
          )
        );
        const responses = await Promise.all(requests);
        const data = await Promise.all(
          responses.map((response) => response.json())
        );
        setFavoritesCocktails(data);
      } catch (error) {
        console.error("Error fetching favorites: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, [favorites]);

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <Link to="/">Back to home</Link>
      <h1>Favorites</h1>
      {!loading &&
        favoriteCocktails.map((cocktail, index) => 
          <CocktailCard key={cocktail.drinks[0].idDrink} cocktail={cocktail.drinks[0]} />
        )}
    </>
  );
}
