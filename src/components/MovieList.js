import React, { useContext } from "react";
import MovieCard from "./MovieCard";
import { AppContext } from "../context";

export default function MovieList() {
  const context = useContext(AppContext);

  return (
    <div className="movie-list">
      {context.movieData.movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
