import React from "react";
import { Movie } from "../../entities/movie";
import { movies } from "../../hooks/movies/data";

type ContextType = {
  moviesList: Movie[];
  removeMovieFromList: Function;
  searchInList: Function;
  getMovie: Function;
  filters: string[];
  addMovieToList: Function;
  editMovieInList: Function;
  sortMovies: Function;
  filterMovies: Function;
};

const MoviesContext = React.createContext<ContextType>({
  moviesList: movies,
  removeMovieFromList: () => {},
  searchInList: () => {},
  getMovie: () => {},
  filters: [""],
  addMovieToList: () => {},
  editMovieInList: () => {},
  sortMovies: () => {},
  filterMovies: () => {},
});

export default MoviesContext;
