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

  return (
    <FavoriteContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
