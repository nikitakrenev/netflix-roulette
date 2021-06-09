import React from "react";
import { Movie } from "../../entities/movie";
import { movies } from "./data";

export const useMovies = () => {
  const [list, setList] = React.useState<Movie[]>(movies);
  const [modifiedList, setModifiedList] = React.useState<Movie[]>(movies);
  const [searchItem, setSearchItem] = React.useState<string>("");
  const [filterItem, setFilterItem] = React.useState<string>("");

  React.useEffect(() => {
    let movies: Movie[] = list;
    if (searchItem) movies = search(movies);
    if (filterItem) movies = filter(movies);
    setModifiedList(movies);
  }, [searchItem, filterItem]);

  const getMovie = (movieId: number) => {
    const [movie] = list.filter((item) => item.id === movieId);

    return movie;
  };

  const getFilters = () => {
    const genres: string[] = list.map((item) => item.genre);
    genres.unshift("all");
    const set = new Set(genres);

    return Array.from(set);
  };

  const add = (item: Movie) => {
    setList([...list, item]);
  };

  const edit = (item: Movie) => {
    setList(list.map((movie) => movie.id === item.id ? item : movie));
  };

  const remove = (movieId: number) => {
    setList(list.filter((item) => item.id !== movieId));
  };

  const search = (list: Movie[]) => {
    return list.filter((item) => {
      const filmName: string = item.title.toLowerCase();
      const searchName: string = searchItem.toLowerCase();

      return filmName.includes(searchName);
    });
  };

  const filter = (list: Movie[]) => {
    if (filterItem === "all") return list;

    return list.filter((item) => item.genre === filterItem);
  };

  const byField = (field: string) => {
    return (a: any, b: any) => (a[field] > b[field] ? 1 : -1);
  };

  const sort = (value: string) => {
    let movies: Movie[] = list;
    switch (value) {
      case "release date":
        movies.sort(byField("year"));
        break;
      case "rating":
        movies.sort(byField("rating"));
        break;
      default:
        movies.sort(byField("title"));
    }
    setList(movies);
  };

  return {
    moviesList: searchItem || filterItem ? modifiedList : list,
    addMovieToList: add,
    editMovieInList: edit,
    removeMovieFromList: remove,
    searchInList: setSearchItem,
    getMovie,
    filters: getFilters(),
    sortMovies: sort,
    filterMovies: setFilterItem,
  };
};
