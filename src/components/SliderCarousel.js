import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../style/slider.scss";
import { useAppContext } from "../context";
import { getImageUrl } from "../utils";
import { imageResolution } from "../constants";

export default function SliderCarousel() {
  const context = useAppContext();

  const { movies } = context.movieData;

  const settings = {
    infinite: true,
    slidesToShow: 4,
    autoplay: true,
    speed: 5000,
    slidesToScroll: 1,
    autoplaySpeed: 10,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div className="slider-movie">
      <div className="bg-wrapper">
        <h2>Emovie</h2>
        <Slider {...settings}>
          {movies.map((movie) => (
            <div className="inner-slider">
              <img
                src={getImageUrl(movie.poster_path, imageResolution.SMALL)}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
