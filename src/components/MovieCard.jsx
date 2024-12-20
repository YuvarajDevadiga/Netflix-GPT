import React from "react";
import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="md:w-48 w-36">
      <img src={IMG_CDN_URL + posterPath} alt="movie-poster" />
    </div>
  );
};

export default MovieCard;
