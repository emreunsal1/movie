import React, { useContext } from "react";
import { AppContext } from "../context";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

export default function BasketPage() {
  const context = useContext(AppContext);
  context.totalPrice();

  const basketItems = context.movieData.movies.filter((item) =>
    context.basket.items.includes(item.id)
  );

  return context.basket.items.length > 0 ? (
    <>
      <button type="submit">Sepeti Onayla</button>
      <div className="basket-list-container">
        {`\$${context.totalPrice()}`}
        {basketItems.map((movie) => (
          <MovieCard key={movie.id} type="basket" movie={movie} />
        ))}
      </div>
    </>
  ) : (
    <div className="nullBasket">
      Sepetinizde Hiç Ürün bulunmamaktadır :({" "}
      {<Link to="/">Alışverişe devam et</Link>}
    </div>
  );
}
