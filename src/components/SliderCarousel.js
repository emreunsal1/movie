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
    dots: true,
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 10,
    cssEase: "linear",
  };
  return (
    <div className="slider-movie">
      <div>
        <h2> Single Item</h2>
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
