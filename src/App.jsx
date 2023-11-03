import { useFetchCocktails } from "./hooks/useFetchCocktails";
import Card from "./components/Card";

function App() {
  const [ cocktailsData, loading ] = useFetchCocktails("a");

  return (
    <>
      <h1>Home</h1>
      {!loading &&
        cocktailsData.map((cocktail) => (
          <Card key={cocktail.idDrink} cocktail={cocktail} />
        ))}
    </>
  );
}

export default App;
