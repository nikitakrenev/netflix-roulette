import React from "react";
import {
  Container,
  FilmCover,
  FilmInfo,
  FilmTitleRate,
  FilmRating,
  FilmYearDuration,
  FilmDescription,
  FilmDuration,
} from "./styles";
import { Movie } from "../../entities/movie";

interface MovieDescriptionProps {
  pickedMovie: Movie;
}

export const MovieDescription = ({
  pickedMovie: { cover, title, subTitle, year, description, duration, rating },
}: MovieDescriptionProps) => {
  return (
    <Container>
      <FilmCover src={cover} />
      <FilmInfo>
        <FilmTitleRate>
          <div>
            <h1>{title}</h1>
            <div>{subTitle}</div>
          </div>
          <FilmRating>{rating}</FilmRating>
        </FilmTitleRate>
        <FilmYearDuration>
          <div>{year}</div>
          <FilmDuration>{duration} min</FilmDuration>
        </FilmYearDuration>
        <FilmDescription>
          <p>{description}</p>
        </FilmDescription>
      </FilmInfo>
    </Container>
  );
};
