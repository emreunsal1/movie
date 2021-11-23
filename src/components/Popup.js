import React from "react";
import { useAppContext } from "../context";

export default function Popup({ children, onClose }) {
  const context = useAppContext();
  const popupOnClick = (event) => {
    if (event.target.className === "popup") {
      onClose();
    }
  };
  return (
    <div>
      <div className="popup" onClick={popupOnClick}>
        {children}
      </div>
    </div>
  );
}
