import { useContext } from "react";
import { getImageUrl } from "../utils";
import { imageResolution } from "../constants";
import { AppContext } from "../context";

import "../style/movie-card.scss";

import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Grid } from "@mui/material";

export default function MovieCard({ type, movie }) {
  const context = useContext(AppContext);
  const isBasket = type === "basket";

  const itemCount = context.basket.items?.filter(
    (id) => id === movie.id
  ).length;

  const movieDetailsShow = () => {
    const clickedMovie = context.movieData.movies.find(
      (item) => item.id === movie.id
    );
    context.popup.setMovieDetail(clickedMovie);
    context.popup.setStatus(true);
  };

  const moviePrice = Number(movie.price * itemCount).toFixed(2);

  return (
    <div className={`movie-item ${isBasket ? "basket" : ""}`}>
      <Grid container>
        <Grid item xs={12} md={isBasket ? 3 : 6}>
          <div className="image" onClick={() => movieDetailsShow()}>
            <img src={getImageUrl(movie.poster_path, imageResolution.SMALL)} />
          </div>
        </Grid>
        <Grid item xs={12} md={isBasket ? 9 : 6}>
          <div className="content">
            <div className="content-wrapper">
              <Typography
                sx={{ margin: "10px 5px" }}
                component="div"
                variant="h5"
              >
                {movie.title}
              </Typography>
              <div className="item">
                <Rating
                  name="half-rating-read"
                  value={movie.vote_average / 2}
                  readOnly
                  precision={0.5}
                />
              </div>
              <div className="item">Movie Date: {movie.release_date}</div>
              <div className="item">Price: {movie.priceText}</div>
              {!isBasket && (
                <Button
                  variant="text"
                  sx={{ color: "#ff55a5" }}
                  onClick={() => movieDetailsShow()}
                >
                  Details
                  <ArrowRightIcon />
                </Button>
              )}
            </div>
            <div className="button-group">
              {itemCount > 0 ? (
                <>
                  <div className="item-counter">
                    <IconButton
                      aria-label="delete"
                      color="primary"
                      onClick={() => context.basket.removeBasketItem(movie.id)}
                    >
                      <RemoveIcon sx={{ color: "#ff55a5" }} />
                    </IconButton>
                    <span>{itemCount}</span>
                    <IconButton
                      color="primary"
                      aria-label="add to shopping cart"
                      onClick={() => context.basket.addToBasket(movie.id)}
                    >
                      <AddIcon sx={{ color: "#ff55a5" }} />
                    </IconButton>
                  </div>
                  {isBasket && (
                    <div className="movie-total-price">${moviePrice}</div>
                  )}
                </>
              ) : (
                <Button
                  color="inherit"
                  onClick={() => context.basket.addToBasket(movie.id)}
                  variant="outlined"
                >
                  Sepete Ekle
                </Button>
              )}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
