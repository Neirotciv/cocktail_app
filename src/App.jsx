import { useFetchCocktails } from "./hooks/useFetchCocktails";
import CocktailCard from "./components/CocktailCard";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoriteContext } from "./contexts/FavoriteContext";

function App() {
  const [ cocktailsData, loading ] = useFetchCocktails("a");
  const {favorites} = useContext(FavoriteContext);

  return (
    <>
      <h1>Home</h1>
      <Link to="favorites">Favorites</Link>
      <p>total favorites : {favorites.length}</p>
      {!loading &&
        cocktailsData.map((cocktail) => (
          <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
        ))}
    </>
  );
}

export default App;
