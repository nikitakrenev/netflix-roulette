import React from "react";
import { MovieOptions } from "../Options";
import {
  Card,
  FilmCover,
  FilmInfo,
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
  const [showOptions, setShowOptions] = React.useState<boolean>(false);

  return (
    <Card>
      <div
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
      >
        <MovieOptions showOptions={showOptions} />
        <FilmCover src={cover} alt="cover" />
      </div>
      <FilmInfo>
        <div>
          <FilmTitle>{title}</FilmTitle>
          <FilmGenre>{genre}</FilmGenre>
        </div>
        <FilmYear>{year}</FilmYear>
      </FilmInfo>
    </Card>
  );
};
