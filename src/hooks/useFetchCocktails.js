import { useState, useEffect } from "react";

export function useFetchCocktails(letter) {
  const [cocktailsData, setCocktailsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!letter) {
      setError("Missing character for search");
      setLoading(false);
      return;
    }

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      .then((response) => response.json())
      .then((cocktailsData) => {
        setCocktailsData(cocktailsData.drinks);
        setLoading(false);
      });
  }, [letter]);

  return [ cocktailsData, loading, error ];
}