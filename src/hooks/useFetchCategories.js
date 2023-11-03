import { useState, useEffect } from "react";

export function useFetchCategories() {
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
      .then((response) => response.json())
      .then((categoriesData) => {
        const formattedCategories = categoriesData.drinks
          .map(categorie => categorie.strCategory)
          .filter(category => !category.includes('/'))
          .map(category => ({
            name: category,
            param: category.replace(/ /g, '_')
          }));

        setCategoriesData(formattedCategories);
        setLoading(false);
      });
  }, []);

  return { categoriesData, loading, error };
}