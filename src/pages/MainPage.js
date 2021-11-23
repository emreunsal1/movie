import React, { useContext } from "react";
import MovieList from "../components/MovieList";
import "../style/main-page.scss";
import { AppContext } from "../context";
import MovieDetail from "../components/MovieDetail";
export default function MainPage() {
  const context = useContext(AppContext);
  const popup = context.popup;

  return (
    <div className="main-page">
      {popup.popupStatus && (
        <div className="popup" onClick={() => popup.setPopupStatus(false)}>
          <MovieDetail />
        </div>
      )}
      <MovieList />
    </div>
  );
}
