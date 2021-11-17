import { apikey, imageBaseUrl } from "./constants";
import axios from "axios";

export const fetchMovies = async () => {
  return await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
    params: {
      api_key: apikey,
    },
  });
};

export const getImageUrl = (name, resolution) =>
  `${imageBaseUrl}${resolution}${name}`;
