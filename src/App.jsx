import { useFetchCocktails } from "./hooks/useFetchCocktails";
import CocktailCard from "./components/CocktailCard";
import NavBar from "./components/NavBar";

function App() {
  const [cocktailsData, loading] = useFetchCocktails("a");

  return (
    <>
      <NavBar />
      <main className="flex flex-col items-center md:justify-center md:flex-row md:flex-wrap">
        {!loading &&
          cocktailsData.map((cocktail) => (
            <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
          ))}
      </main>
    </>
  );
}

export default App;
