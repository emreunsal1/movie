import React, { useContext } from "react";
import { AppContext } from "../context";
import { getImageUrl } from "../utils";
import { imageResolution } from "../constants";

import "../style/movie-detail.scss";

import { Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MovieDetail() {
  const context = useContext(AppContext);
  const movie = context.popup.movieDetail;

  let adult = "None";
  let fragman = "None";

  if (movie.adult) {
    adult = "+18";
  }

  if (movie.video) {
    fragman = "Available";
  }

  return (
    movie && (
      <div className="movie-detail">
        <div className="delete-button">x</div>
        <Grid container className="popup-container">
          <Grid className="image-grid" xs={12} md={6} item>
            <div className="image">
              <img
                src={getImageUrl(movie.poster_path, imageResolution.SMALL)}
              />
            </div>
          </Grid>
          <Grid className="content-grid" item xs={12} md={6}>
            <div className="content">
              <Typography className="movie-title" variant="h3">
                {movie.title}
              </Typography>
              <Typography variant="caption" color="darkgrey">
                Movie Date: {movie.release_date}
              </Typography>
              <Typography sx={{ my: 1 }} variant="body2" color="lightgrey">
                {movie.overview}
              </Typography>
              <Typography sx={{ my: 1 }} variant="body2" color="lightgrey">
                IMBD: {movie.vote_average}
              </Typography>
              <Typography sx={{ my: 1 }} variant="body2" color="lightgrey">
                Adult: {adult}
              </Typography>
              <Typography sx={{ my: 1 }} variant="body2" color="lightgrey">
                Language: {movie.original_language}
              </Typography>
              <Typography sx={{ my: 1 }} variant="body2" color="lightgrey">
                Fragman: {fragman}
              </Typography>
              <Typography sx={{ my: 1 }} variant="body2" color="lightgrey">
                Views: {movie.vote_count}
              </Typography>

              <Typography variant="h5" textAlign="right" sx={{ my: 1 }}>
                {movie.priceText}
              </Typography>
              <Button
                fullWidth
                onClick={() => {
                  context.basket.addToBasket(movie.id);
                  context.popup.setStatus(false);
                }}
                color="inherit"
                variant="outlined"
              >
                Add to Basket
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  );
}
