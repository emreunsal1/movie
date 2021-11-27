import React, { useContext, useState } from "react";
import { AppContext } from "../context";
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";
import Popup from "../components/Popup";
import BasketPopup from "../components/BasketPopup";
import "../style/basket-page.scss";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export default function BasketPage() {
  const [basketPopup, setBasketPopup] = useState(false);
  const [alertOpened, setAlertOpened] = useState(false);

  const context = useContext(AppContext);

  const basketItems =
    context.basket.items &&
    context.movieData.movies.filter((item) =>
      context.basket.items.includes(item.id)
    );

  return context.basket.items?.length > 0 ? (
    <div className="basket-list-container">
      <Snackbar
        open={alertOpened}
        onClose={() => setAlertOpened(false)}
        autoHideDuration={1000}
        anchorOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
      >
        <MuiAlert variant="filled" severity="success">
          This is a success message!
        </MuiAlert>
      </Snackbar>

      {basketPopup && (
        <Popup
          show={basketPopup}
          onClose={() => {
            setBasketPopup(false);
          }}
        >
          <BasketPopup
            closePopup={() => {
              setAlertOpened(true);
              setBasketPopup(false);
            }}
          />
        </Popup>
      )}
      {basketItems &&
        basketItems.map((movie) => (
          <MovieCard key={movie.id} type="basket" movie={movie} />
        ))}
      <div className="basket-price-content">
        <Typography variant="h2" className="price">
          {context.basket.getTotalPrice()}
        </Typography>
        <Button
          color="inherit"
          variant="outlined"
          onClick={() => setBasketPopup(true)}
        >
          BUY NOW
        </Button>
      </div>
    </div>
  ) : (
    <div className="null-basket">
      Sepetinizde Hiç Ürün bulunmamaktadır :(
      <Link to="/">Alışverişe devam et</Link>
    </div>
  );
}
