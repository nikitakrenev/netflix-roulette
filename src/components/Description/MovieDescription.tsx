import React from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  FilmCover,
  FilmInfo,
  FilmTitleRate,
  FilmSubTitle,
  FilmRating,
  FilmYearDuration,
  FilmDescription,
  FilmDuration,
} from "./styles";
import MoviesContext from "../../contexts/movies/MoviesContext";

export const MovieDescription: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getMovie } = React.useContext(MoviesContext);
  const movie = getMovie(Number(id));

  if (!movie) document.location.href="/search";

  return (
    <Container>
      <FilmCover>
        <img src={movie.cover} alt="cover" width={280} height={400} />
      </FilmCover>
      <FilmInfo>
        <FilmTitleRate>
          <h1>{movie.title}</h1>
          <FilmRating>{movie.rating}</FilmRating>
        </FilmTitleRate>
        <FilmSubTitle>{movie.subTitle}</FilmSubTitle>
        <FilmYearDuration>
          <div>{movie.year.getFullYear()}</div>
          <FilmDuration>{movie.duration} min</FilmDuration>
        </FilmYearDuration>
        <FilmDescription>
          <p>{movie.description}</p>
        </FilmDescription>
      </FilmInfo>
    </Container>
  );
};
