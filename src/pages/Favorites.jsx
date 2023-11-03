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
      <h1>Favorites</h1>
      {!loading &&
        favoriteCocktails.map((cocktail, index) => (
          <CocktailCard
            key={cocktail.drinks[0].idDrink}
            cocktail={cocktail.drinks[0]}
          />
        ))}
    </>
  );
}
