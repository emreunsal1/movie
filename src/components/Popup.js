import React from "react";
import "../style/popup.scss";

export default function Popup({ children, onClose }) {
  const popupOnClick = (event) => {
    if (event.target.className === "popup") {
      onClose();
      document.body.style = "";
    }
  };
  const disableScroll = () => {
    document.body.style = "overflow-y: hidden";
  };
  disableScroll();

  return (
    <div>
      <div className="popup" onClick={popupOnClick}>
        {children}
      </div>
    </div>
  );
}
