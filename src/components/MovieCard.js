import { useContext } from "react";
import { getImageUrl } from "../utils";
import { imageResolution } from "../constants";
import "../style/movie-card.scss";
import { AppContext } from "../context";
export default function MovieCard({ type, movie }) {
  const context = useContext(AppContext);

  const moviePrice = () => movie.price * itemCount;

  const isBasket = type === "basket";

  const itemCount = context.basket.items.filter((id) => id === movie.id).length;

  const movieDetailsShow = (id) => {
    const movie = context.movieData.movies.filter((item) => item.id === id);
    context.popup.setMovieDetail(movie);
    context.popup.setStatus(true);
  };

  return (
    <div className="movie-item">
      <div className="image" onClick={() => movieDetailsShow(movie.id)}>
        <img src={getImageUrl(movie.poster_path, imageResolution.SMALL)} />
      </div>
      <div className="content">
        <div>Movie id : {movie.id}</div>
        <div>Movie Name: {movie.title}</div>
        <div>Movie Date: {movie.release_date}</div>
        <div>Overview: {movie.overview}</div>
        <div>price: {movie.priceText}</div>
        <div className="button-group">
          {itemCount > 0 ? (
            <div className="item-counter">
              <button onClick={() => context.basket.removeBasketItem(movie.id)}>
                -
              </button>
              <span>{itemCount}</span>
              <button onClick={() => context.basket.addToBasket(movie.id)}>
                +
              </button>
            </div>
          ) : (
            <button onClick={() => context.basket.addToBasket(movie.id)}>
              Sepete Ekle
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
