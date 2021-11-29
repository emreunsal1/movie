import React, { useContext } from "react";
import "../style/header.scss";
import { Link } from "react-router-dom";
import { AppContext } from "../context";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

export default function Header() {
  const context = useContext(AppContext);
  const { items } = context.basket;

  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          E<span>movie</span>
        </Link>
      </div>
      <div className="basket-button">
        <ShoppingBasketIcon fontSize="large" sx={{ color: "#ff55a5" }} />
        <Link to="/basket">
          <p>
            My Basket <span>{items && items.length}</span>
          </p>
        </Link>
      </div>
    </div>
  );
}
