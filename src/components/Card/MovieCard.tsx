import React from "react";

import {
  Card,
  FilmCover,
  FilmInfo,
  FilmTitleGenre,
  FilmTitle,
  FilmGenre,
  FilmYear,
} from "./styles";

interface MovieCardProps {
  cover: string;
  title: string;
  genre: string;
  year: number;
}

export const MovieCard = ({ cover, title, genre, year }: MovieCardProps) => {
  return (
    <Card>
      <FilmCover src={cover} alt="cover" />
      <FilmInfo>
        <FilmTitleGenre>
          <FilmTitle>{title}</FilmTitle>
          <FilmGenre>{genre}</FilmGenre>
        </FilmTitleGenre>
        <FilmYear>{year}</FilmYear>
      </FilmInfo>
    </Card>
  );
};
