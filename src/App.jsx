import { useFetchCocktails } from "./hooks/useFetchCocktails";
import CocktailCard from "./components/CocktailCard";
import NavBar from "./components/NavBar";

function App() {
  const [cocktailsData, loading] = useFetchCocktails("a");

  return (
    <>
      <NavBar />
      {!loading &&
        cocktailsData.map((cocktail) => (
          <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
        ))}
    </>
  );
}

export default App;
