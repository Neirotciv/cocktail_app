import { Link } from "react-router-dom";

export default function Card({ cocktail }) {
  return <>
    <Link to={`cocktail/${cocktail.idDrink}`}>
      <article>
        <img src={cocktail.strDrinkThumb} alt="" />
        <h1>{cocktail.strDrink}</h1>
      </article>
    </Link>
  </>;
}
