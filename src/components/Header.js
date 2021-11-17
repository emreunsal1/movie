import React from "react";
import "../style/header.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/basket">
        <button>Sepetim</button>
      </Link>
    </div>
  );
}
