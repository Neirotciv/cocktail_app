import { useFetchCocktail } from "../hooks/useFetchCocktail";
import { useIngredients } from "../hooks/useIngredients";
import { useParams } from "react-router-dom";
import IngredientCard from "../components/IngredientCard";
import NavBar from "../components/NavBar";

export default function Cocktail() {
  const { id } = useParams();
  const [cocktail, loading] = useFetchCocktail(id);
  const ingredients = useIngredients(cocktail);

  if (loading) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <NavBar />
      <div className="container mx-auto">
        <h1 className="my-4 text-2xl font-bold text-center">{cocktail.strDrink}</h1>
        <div className="flex flex-col md:flex-row">
          <img src={cocktail.strDrinkThumb} alt="" className="w-3/4 mx-auto md:w-1/2" />
          <div>
            <div className="m-4">
              <p className="my-2">{cocktail.strInstructions}</p>
              <p className="my-2"><span className="font-bold">Category:</span> {cocktail.strCategory}</p>
              <p className="my-2"><span className="font-bold">Glass:</span> {cocktail.strGlass}</p>
              <p className="my-2"><span className="font-bold">Alcoholic filter:</span> {cocktail.strAlcoholic}</p>
            </div>
            <div className="m-4">
              <h2 className="text-xl underline">Ingredients</h2>
              <ul className="flex flex-wrap">
                {ingredients.map((ingredient, index) => (
                  <IngredientCard key={index} ingredient={ingredient} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
