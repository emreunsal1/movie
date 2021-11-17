import { useContext } from "react";
import { getImageUrl } from "../utils";
import { imageResolution } from "../constants";
import "../style/movie-card.scss";
import { AppContext } from "../context";
export default function MovieCard({ movie }) {
  const movieCardContext = useContext(AppContext);

  return (
    <div className="movie-item">
      <div className="image">
        <img src={getImageUrl(movie.poster_path, imageResolution.SMALL)} />
      </div>
      <div className="content">
        <div>Movie Name: {movie.title}</div>
        <div>Movie Date: {movie.release_date}</div>
        <div>Overview: {movie.overview}</div>
        <div className="button-group">
          <button>Sepete Ekle</button>
        </div>
      </div>
    </div>
  );
}
