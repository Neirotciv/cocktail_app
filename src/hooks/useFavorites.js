import { useState, useEffect, useContext } from "react";
import { FavoriteContext } from "../contexts/FavoriteContext";

export const useFavorites = () => {
  const { favorites } = useContext(FavoriteContext);

  const [favoriteCocktails, setFavoritesCocktails] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return [favoriteCocktails, loading];
};