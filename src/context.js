import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export default function ContextProvider({ children }) {
  const [items, setItems] = useState([]);
  const [movies, setMovies] = useState([]);
  const [popupStatus, setPopupStatus] = useState(false);
  const [movieDetail, setmovieDetail] = useState();

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

  const addToBasket = (id) => {
    setItems([...items, id]);
  };

  const totalPrice = () => {
    const basketMovies = items.map((item) =>
      movies.find((movie) => item === movie.id)
    );
    return Number(
      basketMovies.reduce((prev, current) => prev + current.price, 0)
    ).toFixed(2);
  };

  const movieDetailsShow = (id) => {
    const movie = movies.filter((item) => item.id === id);
    setmovieDetail(movie);
    setPopupStatus(true);
    return movie;
  };

  const contextItem = {
    basket: {
      items,
      setItems,
      addToBasket,
    },
    movieData: {
      movies,
      setMovies,
    },
    popup: {
      popupStatus,
      setPopupStatus,
    },

    removeBasketItems,
    totalPrice,
    movieDetail,
    movieDetailsShow,
  };

  return (
    <AppContext.Provider value={contextItem}>{children}</AppContext.Provider>
  );
}
const useAppContext = () => useContext(AppContext);

export { AppContext, ContextProvider, useAppContext };
