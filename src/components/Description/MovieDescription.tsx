import React from "react";
import {
  Container,
  FilmCover,
  FilmInfo,
  FilmTitleRate,
  FilmSubTitle,
  FilmTitle,
  FilmRating,
  FilmYearDuration,
  FilmYear,
  FilmDuration,
  FilmDescription,
} from "./styles";

export const MovieDescription: React.FC = () => {
  return (
    <Container>
      <FilmCover src="https://ananasposter.ru/image/catalog/poster/film/99/1506.jpg" />
      <FilmInfo>
        <FilmTitleRate>
          <div>
            <FilmTitle>Pulp Fiction</FilmTitle>
            <FilmSubTitle>Oscar winning Movie</FilmSubTitle>
          </div>
          <FilmRating>4.3</FilmRating>
        </FilmTitleRate>
        <FilmYearDuration>
          <FilmYear>1994</FilmYear>
          <FilmDuration>154 min</FilmDuration>
        </FilmYearDuration>
        <FilmDescription>
          Pulp Fiction is a 1994 American neo-noir black comedy crime film
          written and directed by Quentin Tarantino, who conceived it with Roger
          Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim
          Roth, Ving Rhames, and Uma Thurman, it tells several stories of
          criminal Los Angeles. The title refers to the pulp magazines and
          hardboiled crime novels popular during the mid-20th century, known for
          their graphic violence and punchy dialogue.
        </FilmDescription>
      </FilmInfo>
    </Container>
  );
};
