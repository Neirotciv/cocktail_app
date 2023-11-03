import { useContext } from "react";
import { FavoriteContext } from "../contexts/FavoriteContext";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { favorites } = useContext(FavoriteContext);

  return (
    <nav className="flex items-center justify-between h-12 px-2 text-xl font-bold bg-yellow-300 drop-shadow-md">
      <Link to="/">Cocktails</Link>
      <Link to="/favorites">
        My Favorites
        <span className="ml-2">{favorites.length}</span>
      </Link>
    </nav>
  );
}
