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

  const removeFromBasket = (id) => {
    const index = context.basket.items.findIndex((item) => item === id);
    const a = context.basket.items;
    a.splice(index, 1);
    context.basket.setItems(a);
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
        <div className="button-group">
          {itemCount > 0 ? (
            <div className="item-counter">
              <button onClick={() => removeFromBasket(movie.id)}>-</button>
              <span>{itemCount}</span>
              <button onClick={() => addToBasket(movie.id)}>+</button>
            </div>
          ) : (
            <button onClick={() => addToBasket(movie.id)}>Sepete Ekle</button>
          )}
        </div>
      </div>
    </div>
  );
}
