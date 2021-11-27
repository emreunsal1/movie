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

  return (
    movie && (
      <div className="movie-detail">
        <Grid container className="popup-container">
          <Grid xs={6} item>
            <div className="image">
              <img
                src={getImageUrl(movie.poster_path, imageResolution.SMALL)}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="content">
              <Typography variant="h3">{movie.title}</Typography>
              <Typography variant="caption" color="darkgrey">
                Movie Date: {movie.release_date}
              </Typography>
              <Typography sx={{ my: 1 }} variant="body2" color="lightgrey">
                {movie.overview}
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
                Sepete Ekle
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    )
  );
}
