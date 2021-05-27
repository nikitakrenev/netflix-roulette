import React from "react";
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
          <h1>{title}</h1>
          <FilmRating>{rating}</FilmRating>
        </FilmTitleRate>
        <FilmSubTitle>{subTitle}</FilmSubTitle>
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
