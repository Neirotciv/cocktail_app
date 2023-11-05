import { useContext } from "react";
import { FavoriteContext } from "../contexts/FavoriteContext";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { favorites } = useContext(FavoriteContext);

  return (
    <header className="sticky top-0 z-20 flex justify-center bg-yellow-300 drop-shadow-md">
      <nav className="flex items-center justify-between w-full h-12 px-2 text-xl font-bold md:w-3/4">
        <Link to="/" className="hover:underline">Cocktails</Link>
        <Link to="/favorites" className="hover:underline">
          My Favorites
          <span className="ml-2">{favorites.length}</span>
        </Link>
      </nav>
    </header>
  );
}
