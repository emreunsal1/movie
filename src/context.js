import { createContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";

const AppContext = createContext();

export default function ContextProvider({ children }) {
  const [items, setItems] = useState([]);
  const [movies, setMovies] = useState([]);

  const removeBasketItems = (id) => {
    let count = false;
    const deleteMovie = items.filter((item) => {
      if (count === false && item === id) {
        count = true;
        return false;
      }
      return true;
    });
    setItems(deleteMovie);
  };

  const totalPrice = () => {
    const basketMovies = items.map((item) =>
      movies.find((movie) => item === movie.id)
    );
    return Number(
      basketMovies.reduce((prev, current) => prev + current.price, 0)
    ).toFixed(2);
  };

  const contextItem = {
    basket: {
      items,
      setItems,
    },
    movieData: {
      movies,
      setMovies,
    },
    removeBasketItems,
    totalPrice,
  };
  return (
    <AppContext.Provider value={contextItem}>{children}</AppContext.Provider>
  );
}

export { AppContext, ContextProvider };
