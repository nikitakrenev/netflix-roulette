import React from "react";
import { IMovie } from "../../../entities/movie";
import { MovieCard } from "../../Card";
import { Container } from "./styles";

interface IMoviesListProps {
  movies: IMovie[];
}

export const MoviesList = (props: IMoviesListProps) => {
  const { movies } = props;

  return (
    <Container>
      {movies.map((item, index) => (
        <MovieCard key={index} item={item} />
      ))}
    </Container>
  );
};
