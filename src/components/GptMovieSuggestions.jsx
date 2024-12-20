import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className=" p-4 m-4 bg-black bg-opacity-80  text-white">
      <div className="">
        {movieNames.map((movieName, idx) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[idx].results}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
