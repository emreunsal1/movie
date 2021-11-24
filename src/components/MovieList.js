import React, { useContext } from "react";
import MovieCard from "./MovieCard";
import { AppContext } from "../context";
import { Grid, Box } from "@mui/material";

export default function MovieList() {
  const context = useContext(AppContext);

  return (
    <div className="movie-list">
      <Grid container>
        {context.movieData.movies.map((movie) => (
          <Box>
            <MovieCard key={movie.id} movie={movie} />
          </Box>
        ))}
      </Grid>
    </div>
  );
}
