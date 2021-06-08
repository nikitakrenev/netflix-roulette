import React from "react";
import { MoviesFilter } from "./Filter";
import { MoviesList } from "./List";
import { Container, MoviesCount, MoviesEmpty } from "./styles";
import { Movie } from "../../entities/movie";

interface ListSectionProps {
  movies: Movie[];
}

const ListSection = ({ movies }: ListSectionProps) => {
  const empty: boolean = !movies.length;

  return (
    <Container>
      <MoviesFilter />
      {empty ? (
        <MoviesEmpty>No Movie Found</MoviesEmpty>
      ) : (
        <React.Fragment>
          <MoviesCount>
            <b>{movies.length}</b> movies found
          </MoviesCount>
          <MoviesList movies={movies} />
        </React.Fragment>
      )}
    </Container>
  );
};

export default ListSection;
