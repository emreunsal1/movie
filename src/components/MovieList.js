import React, { useContext } from "react";
import MovieCard from "./MovieCard";
import { AppContext } from "../context";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function MovieList() {
  const context = useContext(AppContext);

  return (
    <div className="movie-list">
      <Typography className="title" variant="h2" color="white">
        P<span>opular</span> M<span>ovies</span>
      </Typography>
      <Grid container spacing={5}>
        {context.movieData.movies.map((movie) => (
          <Grid item xs={12} md={4}>
            <MovieCard key={movie.id} movie={movie} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
