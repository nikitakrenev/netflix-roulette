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
          key={item.id}
          cover={item.cover}
          title={item.title}
          genre={item.genre}
          year={item.year}
        />
      ))}
    </Container>
  );
};
