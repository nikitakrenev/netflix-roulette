import React from "react";
import { MoviesFilter } from "./Filter";
import { MoviesList } from "./List";
import { Container, MoviesCount } from "./styles";
import { IMovie } from "../../entities/movie";

const ListSection: React.FC = () => {
  //test data, until API will be set
  const movies: IMovie[] = [
    {
      title: "Pulp Fiction",
      subTitle: "Oscar winning Movie",
      rating: 4.3,
      year: 1994,
      duration: 154,
      cover: "https://ananasposter.ru/image/catalog/poster/film/99/1506.jpg",
      description:
        "Pulp Fiction is a 1994 American neo-noir black comedy crime film\n" +
        "          written and directed by Quentin Tarantino, who conceived it with Roger\n" +
        "          Avary. Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim\n" +
        "          Roth, Ving Rhames, and Uma Thurman, it tells several stories of\n" +
        "          criminal Los Angeles. The title refers to the pulp magazines and\n" +
        "          hardboiled crime novels popular during the mid-20th century, known for\n" +
        "          their graphic violence and punchy dialogue.",
      genre: "Action & Adventure",
    },
  ];

  return (
    <Container>
      <MoviesFilter />
      <MoviesCount>
        <b>{movies.length}</b> movies found
      </MoviesCount>
      <MoviesList movies={movies} />
    </Container>
  );
};

export default ListSection;
