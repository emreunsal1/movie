import React, { useContext } from "react";
import MovieList from "../components/MovieList";
import "../style/main-page.scss";
import { AppContext } from "../context";
import MovieDetail from "../components/MovieDetail";
import Popup from "../components/Popup";
export default function MainPage() {
  const context = useContext(AppContext);
  const popup = context.popup;

  return (
    <div className="main-page">
      {popup.popupStatus && (
        <Popup onClose={() => context.popup.setPopupStatus(false)}>
          <MovieDetail />
        </Popup>
      )}
      <MovieList />
    </div>
  );
}
