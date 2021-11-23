import React from "react";
import { useAppContext } from "../context";

export default function BasketPopup() {
  const context = useAppContext();

  return (
    <form>
      Total Price : {context.basket.getTotalPrice()}
      Name: <input type="text" />
      Adress: <input type="text" />
      tel: <input type="tel" />
      <div className="credit-card">
        <h3>Credit Card</h3>
        Card Number : <input type="text" />
        Expiration date: <input type="number" min="1" max="12" />
        <input type="number" min="21" max="35" />
      </div>
    </form>
  );
}
