import React, { useContext } from "react";
import MovieList from "../components/MovieList";
import "../style/main-page.scss";
import { AppContext } from "../context";
import MovieDetail from "../components/MovieDetail";
import Popup from "../components/Popup";
import SliderCarousel from "../components/SliderCarousel";

export default function MainPage() {
  const context = useContext(AppContext);

  const popup = context.popup;

  return (
    <div className="main-page">
      {context.popup.status && (
        <Popup
          show={popup.status}
          onClose={() => context.popup.setStatus(false)}
        >
          <MovieDetail />
        </Popup>
      )}

      <SliderCarousel />
      <MovieList />
    </div>
  );
}
