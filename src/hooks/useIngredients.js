import { useState, useEffect } from "react";

export const useIngredients = (cocktail) => {
  const [ingredients, setIngredients] = useState([]);
  const MAX_INGREDIENTS = 15;

  useEffect(() => {
    if (cocktail) {
      const result = [];
      for (let i = 1; i <= MAX_INGREDIENTS; i++) {
        const ingredient = `strIngredient${i}`;
        const measure = `strMeasure${i}`;
        const urlIngredient = cocktail[ingredient];

        if (cocktail[ingredient] && cocktail[measure]) {
          result.push({
            ingredient: cocktail[ingredient],
            measure: cocktail[measure],
            imgUrl: `https://www.thecocktaildb.com/images/ingredients/${urlIngredient}-Small.png`,
          });
        }
      }
      setIngredients(result);
    }
  }, [cocktail]);

  return ingredients;
};