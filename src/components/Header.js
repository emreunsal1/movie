import React, { useContext } from "react";
import "../style/header.scss";
import { Link } from "react-router-dom";
import { AppContext } from "../context";

export default function Header() {
  const context = useContext(AppContext);
  const { items } = context.basket;

  return (
    <div className="header">
      <Link to="/basket">Sepetim {items.length}</Link>
    </div>
  );
}
