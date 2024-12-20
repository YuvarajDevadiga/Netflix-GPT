import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTopratedMovies } from "../utils/movieSlice";

const useTopratedMovies = () => {
  const dispatch = useDispatch();
  const topratedMovies = useSelector((store) => store.movies.topratedMovies);

  const getTopratedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTopratedMovies(json.results));
  };
  useEffect(() => {
    if (!topratedMovies) getTopratedMovies();
  }, []);
};

export default useTopratedMovies;
