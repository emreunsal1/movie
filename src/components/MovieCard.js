import { useContext } from "react";
import { getImageUrl } from "../utils";
import { imageResolution } from "../constants";
import { AppContext } from "../context";

import "../style/movie-card.scss";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import Rating from "@mui/material/Rating";
import IconButton from "@mui/material/IconButton";

export default function MovieCard({ type, movie }) {
  const context = useContext(AppContext);

  const moviePrice = () => movie.price * itemCount;

  const isBasket = type === "basket";

  const itemCount = context.basket.items.filter((id) => id === movie.id).length;

  const movieDetailsShow = (id) => {
    const movie = context.movieData.movies.filter((item) => item.id === id);
    context.popup.setMovieDetail(movie);
    context.popup.setStatus(true);
  };

  return (
    <div className="movie-item">
      <Card
        sx={{
          display: "flex",
          bgcolor: "transparent",
          color: "rgba(255,255,255,0.7);",
          boxShadow:
            "1px 1px 20px 0px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);",
          minWidth: "33.33333%",
        }}
      >
        <Box>
          <div className="image" onClick={() => movieDetailsShow(movie.id)}>
            <img src={getImageUrl(movie.poster_path, imageResolution.SMALL)} />
          </div>
        </Box>
        <Box>
          <div className="content">
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
                value={movie.vote_average - 3}
                readOnly
                precision={0.5}
              />
            </div>
            <div className="item">Movie Date: {movie.release_date}</div>
            <div className="item">Price: {movie.priceText}</div>
            <div className="button-group">
              {itemCount > 0 ? (
                <div className="item-counter">
                  <IconButton
                    aria-label="delete"
                    onClick={() => context.basket.removeBasketItem(movie.id)}
                  >
                    <DeleteIcon fontSize="large" sx={{ color: "#ff55a5" }} />
                  </IconButton>
                  <span>{itemCount}</span>
                  <IconButton
                    color="primary"
                    aria-label="add to shopping cart"
                    onClick={() => context.basket.addToBasket(movie.id)}
                  >
                    <AddShoppingCartIcon
                      fontSize="large"
                      sx={{ color: "#ff55a5" }}
                    />
                  </IconButton>
                </div>
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
        </Box>
      </Card>
    </div>
  );
}
