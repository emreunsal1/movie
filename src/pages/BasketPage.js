import React, { useContext, useState } from "react";
import { AppContext } from "../context";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";
import Popup from "../components/Popup";
import BasketPopup from "../components/BasketPopup";

export default function BasketPage() {
  const [basketPopup, setBasketPopup] = useState(false);

  const context = useContext(AppContext);

  const basketItems = context.movieData.movies.filter((item) =>
    context.basket.items.includes(item.id)
  );

  return context.basket.items.length > 0 ? (
    <>
      <button type="submit" onClick={() => setBasketPopup(true)}>
        Sepeti Onayla
      </button>
      <div className="basket-list-container">
        {context.basket.getTotalPrice()}
        {basketPopup && (
          <Popup onClose={() => setBasketPopup(false)}>
            <BasketPopup />
          </Popup>
        )}
        {basketItems.map((movie) => (
          <MovieCard key={movie.id} type="basket" movie={movie} />
        ))}
      </div>
    </>
  ) : (
    <div className="null-basket">
      Sepetinizde Hiç Ürün bulunmamaktadır :(
      <Link to="/">Alışverişe devam et</Link>
    </div>
  );
}
