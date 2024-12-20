import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    movies && (
      <div className="px-8 py-2 ">
        <h1 className="md:text-3xl text-xl text-white font-semibold mb-8">
          {title}
        </h1>
        <div className=" flex overflow-x-scroll snap-none scrollbar-hide">
          <div className="flex flex-shrink-0 flex-nowrap gap-4">
            {movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default MovieList;
