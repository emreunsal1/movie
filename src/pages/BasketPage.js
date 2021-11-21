import React, { useContext } from "react";
import { AppContext } from "../context";
import MovieCard from "../components/MovieCard";

export default function BasketPage() {
  const context = useContext(AppContext);

  const basketItems = context.movieData.movies.filter((item) =>
    context.basket.items.includes(item.id)
  );

  return (
    <div className="basket-list-container">
      {basketItems.map((movie) => (
        <MovieCard type="basket" movie={movie} />
      ))}
    </div>
  );
}
