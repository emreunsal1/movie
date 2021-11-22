import { useContext } from "react";
import { getImageUrl } from "../utils";
import { imageResolution } from "../constants";
import "../style/movie-card.scss";
import { AppContext } from "../context";
export default function MovieCard({ type, movie }) {
  const context = useContext(AppContext);

  const addToBasket = (id) => {
    context.basket.setItems([...context.basket.items, id]);
  };
  const moviePrice = () => {
    const price = movie.price * itemCount;
    return price;
  };

  const isBasket = type === "basket";

  const itemCount = context.basket.items.filter((id) => id === movie.id).length;

  return (
    <div className="movie-item">
      <div className="image">
        <img src={getImageUrl(movie.poster_path, imageResolution.SMALL)} />
      </div>
      <div className="content">
        <div>Movie id : {movie.id}</div>
        <div>Movie Name: {movie.title}</div>
        <div>Movie Date: {movie.release_date}</div>
        <div>Overview: {movie.overview}</div>
        <div>price: {movie.price}</div>
        {isBasket && "total Price :$" + moviePrice()}
        <div className="button-group">
          {itemCount > 0 ? (
            <div className="item-counter">
              <button onClick={() => context.removeBasketItems(movie.id)}>
                -
              </button>
              <span>{itemCount}</span>
              <button onClick={() => addToBasket(movie.id)}>+</button>
            </div>
          ) : (
            <button onClick={() => addToBasket(movie.id)}>
              Sepete Ekle {context.totalPrice}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
