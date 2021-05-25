import React from "react";
import { IMovie } from "../../entities/movie";
import {
  Card,
  FilmCover,
  FilmInfo,
  FilmTitleGenre,
  FilmTitle,
  FilmGenre,
  FilmYear,
} from "./styles";

interface IMovieCardProps {
  item: IMovie;
}

export const MovieCard: React.FC<IMovieCardProps> = ({ item }) => {
  return (
    <Card>
      <FilmCover src={item.cover} alt="cover"/>
      <FilmInfo>
        <FilmTitleGenre>
          <FilmTitle>{item.title}</FilmTitle>
          <FilmGenre>{item.genre}</FilmGenre>
        </FilmTitleGenre>
        <FilmYear>{item.year}</FilmYear>
      </FilmInfo>
    </Card>
  );
};
