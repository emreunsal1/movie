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
  const prices = [44.5, 60.99, 35.0, 85.0, 40.99];
  return prices[Math.floor(Math.random() * prices.length)];
};

export const getImageUrl = (name, resolution) =>
  `${imageBaseUrl}${resolution}${name}`;
