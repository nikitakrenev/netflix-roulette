import React from "react";
import { MovieOptions } from "../Options";
import { Link } from "react-router-dom";
import { Movie } from "../../entities/movie";
import {
  Container,
  FilmCover,
  FilmInfo,
  FilmTitle,
  FilmGenre,
  FilmYear,
} from "./styles";

interface MovieCardProps {
  item: Movie;
}

export const MovieCard = ({ item }: MovieCardProps) => {
  const [showOptions, setShowOptions] = React.useState<boolean>(false);
  const { title, cover, id: movieId, genre, year } = item;

  const goUp = () => window.scrollTo(0, 0);

  return (
    <Container>
      <div
        onMouseEnter={() => setShowOptions(true)}
        onMouseLeave={() => setShowOptions(false)}
      >
        <MovieOptions
          movie={item}
          showOptions={showOptions}
          hideOptions={() => setShowOptions(false)}
        />
        <Link to={`/film/${movieId}`}>
          <FilmCover src={cover} alt="cover" onClick={goUp} />
        </Link>
      </div>
      <FilmInfo>
        <div>
          <FilmTitle>{title}</FilmTitle>
          <FilmGenre>{genre}</FilmGenre>
        </div>
        <FilmYear>{year?.getFullYear()}</FilmYear>
      </FilmInfo>
    </Container>
  );
};
