import React, { useEffect } from "react";
import "../style/popup.scss";

export default function Popup({ children, onClose, show }) {
  const popupOnClick = (event) => {
    if (
      event.target.className === "popup" ||
      event.target.className == "delete-button"
    ) {
      document.body.style = "";
      onClose();
    }
  };

  useEffect(() => {
    document.body.style = "overflow-y: hidden";
    return () => {
      document.body.style = "";
      onClose();
    };
  }, []);

  return (
    show && (
      <div className="popup" onClick={popupOnClick}>
        {children}
      </div>
    )
  );
}
