import { createContext, useState } from "react";

const AppContext = createContext();

export default function ContextProvider({ children }) {
  const [items, setItems] = useState([]);
  const [movies, setMovies] = useState([]);

  const removeBasketItems = (id) => {};

  const contextItem = {
    basket: {
      items,
      setItems,
    },
    movieData: {
      movies,
      setMovies,
    },
  };
  return (
    <AppContext.Provider value={contextItem}>{children}</AppContext.Provider>
  );
}

export { AppContext, ContextProvider };
