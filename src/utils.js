import { apikey, imageBaseUrl } from "./constants";
import axios from "axios";

export const fetchMovies = async () => {
  return await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
    params: {
      api_key: apikey,
    },
  });
};

export const generateRandomPrice = () => {
  const prices = ["44,50 TL", "60,99 TL", "35,00 TL", "85,00 TL", "40,99 TL"];
  return prices[Math.floor(Math.random() * prices.length)];
};

export const getImageUrl = (name, resolution) =>
  `${imageBaseUrl}${resolution}${name}`;
