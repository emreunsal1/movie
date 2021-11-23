import React from "react";
import { useAppContext } from "../context";
import { getImageUrl } from "../utils";
import { imageResolution } from "../constants";
export default function BasketPopup() {
  const context = useAppContext();

  return (
    <form>
      Name: <input type="text" />
      Adress: <input type="text" />
      tel:
      <input type="tel" />
      <div className="credit-card">
        <h3>Credit Card</h3>
        Card Number : <input type="text" />
        Expiration date: <input type="date" />
      </div>
    </form>
  );
}
