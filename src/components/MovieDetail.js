import React, { useContext } from "react";
import { AppContext } from "../context";
import { getImageUrl } from "../utils";
import { imageResolution } from "../constants";
import "../style/movie-detail.scss";

export default function MovieDetail() {
  const context = useContext(AppContext);

  return (
    <div className="popup-movie">
      {context.popup.movieDetail.map((movie) => (
        <>
          <div className="image">
            <img src={getImageUrl(movie.poster_path, imageResolution.SMALL)} />
          </div>
          <div className="content">
            <div>Movie Name: {movie.title}</div>
            <div>Movie Date: {movie.release_date}</div>
            <div>Overview: {movie.overview}</div>
            <div>price: {movie.price}</div>
          </div>
          <button
            onClick={() => {
              context.basket.addToBasket(movie.id);
              context.popup.setStatus(false);
            }}
          >
            Sepete Ekle
          </button>
        </>
      ))}
    </div>
  );
}
