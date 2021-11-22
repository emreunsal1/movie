import React, { useContext } from "react";
import { AppContext } from "../context";
import MovieCard from "../components/MovieCard";

export default function BasketPage() {
  const context = useContext(AppContext);
  context.totalPrice();

  const basketItems = context.movieData.movies.filter((item) =>
    context.basket.items.includes(item.id)
  );

  return (
    <div className="basket-list-container">
      {context.totalPrice()}
      {basketItems.map((movie) => (
        <MovieCard key={movie.id} type="basket" movie={movie} />
      ))}
    </div>
  );
}
