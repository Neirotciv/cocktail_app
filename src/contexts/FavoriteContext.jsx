import { createContext, useState } from "react";

export const FavoriteContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    const found = favorites.find((favorite) => favorite === id);
    if (found) {
      removeFavorite(id);
      return;
    }
    setFavorites((favorites) => [...favorites, id]);
  };

  const removeFavorite = (id) => {
    setFavorites((favorites) => favorites.filter((favId) => favId !== id));
  };

  const checkIfFavorite = (id) => {
    const found = favorites.find((favorite) => favorite === id);
    if (found !== undefined) {
      return true;
    }
    return false;
  };

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite, checkIfFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
