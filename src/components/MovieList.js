import React, { useContext } from "react";
import MovieCard from "./MovieCard";
import { AppContext } from "../context";
import Grid from "@mui/material/Grid";
import { spacing } from "@mui/system";

export default function MovieList() {
  const context = useContext(AppContext);

  return (
    <div className="movie-list">
      <Grid container spacing={5}>
        {context.movieData.movies.map((movie) => (
          <Grid item xs={4}>
            <MovieCard key={movie.id} movie={movie} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
