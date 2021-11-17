import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../context";

export default function Basket() {
  const [yazı, setYazı] = useState("");
  const BasketContext = useContext(AppContext);
  useEffect(() => {
    setYazı(BasketContext.basketMovies);
  }, [BasketContext.baketMovies]);
  return <div>{yazı}</div>;
}
