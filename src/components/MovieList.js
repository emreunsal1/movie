import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { fetchMovies } from "../utils";

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const response = await fetchMovies();
    setMovies(response.data.results);
  };
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
}
