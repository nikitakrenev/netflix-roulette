import React from "react";
import { Movie } from "../../../entities/movie";
import { MovieCard } from "../../Card";
import { Container } from "./styles";

interface MoviesListProps {
  movies: Movie[];
}

export const MoviesList = ({ movies }: MoviesListProps) => {
  return (
    <Container>
      {movies.map((item) => (
        <MovieCard
          item={item}
          key={item.id}
        />
      ))}
    </Container>
  );
};
