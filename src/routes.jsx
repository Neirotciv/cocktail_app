import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Cocktail from "./pages/Cocktail";
import Categories from "./pages/Categories";
import Favorites from "./pages/Favorites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/cocktail/:id",
    element: <Cocktail />,
  },
  {
    path: "/categories",
    element: <Categories />,
  },
  {
    path: "/favorites",
    element: <Favorites />,
  },
]);

export { router };
