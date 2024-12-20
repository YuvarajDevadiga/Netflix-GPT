import React, { useRef } from "react";
import { lang } from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovieResult } from "../utils/gptSlice";
import mockDataGpt, { mockMovieNames } from "../utils/mockData";
const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //search movie in TMDB
  // const searchMovieTMDB = async (movie) => {
  //   const data = await fetch(
  //     "https://api.themoviedb.org/3/search/movie?query=" +
  //       movie +
  //       "&include_adult=false&language=en-US&page=1",
  //     API_OPTIONS
  //   );
  //   const json = await data.json();
  //   return json.results;
  // };

  const handleGptSearchClick = async () => {
    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query" +
    //   searchText.current.value +
    //   ". only give me names of 5 movies, comma seperated like the example result given ahead. example Result:Gadar, Sholay, Don, KGF chapter 1, Koi Mil Gaya";

    // const gptResults = await client.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // if (!gptResults.choices) {
    //   //write error Handling
    // }
    // const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");
    // const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    // const tmdbResults = await Promise.all(promiseArray);

    const gptMovies = mockMovieNames;
    const tmdbResults = mockDataGpt;

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="p-8 pt-[8%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" md:w-1/2 bg-black grid grid-cols-12 w-full "
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9  "
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
          name=""
          id=""
        />
        <button
          onClick={handleGptSearchClick}
          className="md:py-2    px-4 md:m-4 m-2 col-span-3 bg-red-800 rounded-lg text-white"
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
