import React, { useEffect, useContext } from "react";
import MovieCard from "./MovieCard";
import { fetchMovies, generateRandomPrice } from "../utils";
import { AppContext } from "../context";

export default function MovieList() {
  const context = useContext(AppContext);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const response = await fetchMovies();
    const manipulatedData = response.data.results.map((item) => {
      return {
        ...item,
        price: generateRandomPrice(),
      };
    });
    await context.movieData.setMovies(manipulatedData);
  };

  return (
    <div className="movie-list">
      {context.movieData.movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
