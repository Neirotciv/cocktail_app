import { useFavorites } from "../hooks/useFavorites";
import CocktailCard from "../components/CocktailCard";
import NavBar from "../components/NavBar";

export default function Favorites() {
  const [favoriteCocktails, loading] = useFavorites();

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <NavBar />
      <h1 className="p-2 text-xl font-bold text-center">Favorites</h1>
      <main className="flex flex-col items-center md:justify-center md:flex-row md:flex-wrap">
        {!loading &&
          favoriteCocktails.map((cocktail, index) => (
            <CocktailCard
              key={cocktail.drinks[0].idDrink}
              cocktail={cocktail.drinks[0]}
            />
          ))}
      </main>
    </>
  );
}
