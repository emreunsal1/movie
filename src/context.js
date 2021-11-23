import { createContext, useState, useContext, useEffect } from "react";
import { localStorageBasketItemsKey } from "./constants";
import { fetchMovies, generateRandomPrice } from "./utils";

const AppContext = createContext();

export default function ContextProvider({ children }) {
  const [items, setItems] = useState([]);
  const [movies, setMovies] = useState([]);
  const [popupStatus, setPopupStatus] = useState(false);
  const [movieDetail, setMovieDetail] = useState();

  useEffect(() => {
    if (items.length !== 0) {
      window.localStorage.setItem(
        localStorageBasketItemsKey,
        JSON.stringify(items)
      );
    }
  }, [items]);

  useEffect(() => {
    getMovies();
    const localItems = JSON.parse(
      window.localStorage.getItem(localStorageBasketItemsKey)
    );
    setItems(localItems || []);
  }, []);

  const removeBasketItem = (id) => {
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

  const addToBasket = (id) => {
    setItems([...items, id]);
  };

  const getMovies = async () => {
    const response = await fetchMovies();
    const manipulatedData = response.data.results.map((item) => {
      const price = generateRandomPrice();
      return {
        ...item,
        price,
        priceText: "$" + price,
      };
    });
    setMovies(manipulatedData);
  };

  const getTotalPrice = () => {
    if (movies.length === 0) return 0;
    const basketMovies = items.map((item) =>
      movies.find((movie) => item === movie.id)
    );
    return (
      "$" +
      Number(
        basketMovies.reduce((prev, current) => prev + current.price, 0)
      ).toFixed(2)
    );
  };

  const contextItem = {
    basket: {
      items,
      setItems,
      addToBasket,
      removeBasketItem,
      getTotalPrice,
    },
    movieData: {
      movies,
      setMovies,
    },
    popup: {
      status: popupStatus,
      setStatus: setPopupStatus,
      movieDetail,
      setMovieDetail,
    },
  };

  return (
    <AppContext.Provider value={contextItem}>{children}</AppContext.Provider>
  );
}
const useAppContext = () => useContext(AppContext);

export { AppContext, ContextProvider, useAppContext };
