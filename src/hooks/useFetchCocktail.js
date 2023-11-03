import { useState, useEffect } from "react";

export function useFetchCocktail(cocktailId) {
  const [cocktailData, setCocktailData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!cocktailId) {
      setError("Missing id for search");
      setLoading(false);
      return;
    }

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)
      .then((response) => response.json())
      .then((cocktailData) => {
        setCocktailData(cocktailData.drinks[0]);
        setLoading(false);
      });
  }, [cocktailId]);

  return [cocktailData, loading, error];
}