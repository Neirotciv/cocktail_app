import { useState } from "react";
import { useFetchCocktails } from "./hooks/useFetchCocktails";
import CocktailCard from "./components/CocktailCard";
import NavBar from "./components/NavBar";
import SearchList from "./components/SearchList";

function App() {
  const [letter, setLetter] = useState("a");
  const [cocktailsData, loading] = useFetchCocktails(letter);

  const handleLetterChange = (newLetter) => {
    setLetter(newLetter);
  };

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <NavBar />
      <SearchList onLetterClick={handleLetterChange} />
      <main className="flex flex-col items-center md:justify-center md:flex-row md:flex-wrap">
        {!loading &&
          cocktailsData.map((cocktail) => (
            <CocktailCard key={cocktail.idDrink} cocktail={cocktail} />
          ))}
        {!loading && cocktailsData.length == 0 && (
          <div>
            There are actually no cocktails starting with the letter {letter}
          </div>
        )}
      </main>
    </>
  );
}

export default App;
