import React from "react";
import { Movie } from "../../entities/movie";
import { movies } from "./data";

export const useMovies = () => {
  const [list, setList] = React.useState<Movie[]>(movies);
  const [searchList, setSearchList] = React.useState<Movie[]>([]);

  const getMovie = (movieId: number) => {
    return list.filter(item => item.id === movieId);
  }

  const add = (item: Movie) => {
    setList([...list, item]);
  }

  const remove = (movieId: number) => {
    setList(list.filter(item => item.id !== movieId));
  }

  const search = (input: string) => {
    setSearchList(list.filter((item) => {
      const filmName: string = item.title.toLowerCase();
      const searchName: string = input.toLowerCase();

      return filmName.includes(searchName);
    }));
  }

  const filter = () => {

  }

  const sort = () => {

  }

  return {
    moviesList: searchList.length ? searchList : list,
    addMovieToList: add,
    removeMovieFromList: remove,
    searchInList: search,
    getMovie,
  }
};