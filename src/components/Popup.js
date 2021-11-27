import React, { useEffect } from "react";
import "../style/popup.scss";

export default function Popup({ children, onClose, show }) {
  const popupOnClick = (event) => {
    if (event.target.className === "popup") {
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
      <div>
        <div className="popup" onClick={popupOnClick}>
          {children}
        </div>
      </div>
    )
  );
}
