import React from "react";
import { MoviesFilter } from "./Filter";
import { MoviesList } from "./List";
import { Container, MoviesCount } from "./styles";
import { Movie } from "../../entities/movie";

interface ListSectionProps {
  movies: Movie[];
}

const ListSection = ({ movies }: ListSectionProps) => {
  return (
    <Container>
      <MoviesFilter />
      <MoviesCount>
        <b>{movies.length}</b> movies found
      </MoviesCount>
      <MoviesList movies={movies} />
    </Container>
  );
};

export default ListSection;
