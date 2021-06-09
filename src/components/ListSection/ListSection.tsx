import React from "react";
import { MoviesFilter } from "./Filter";
import { MoviesList } from "./List";
import { Container, MoviesCount, MoviesEmpty } from "./styles";
import MoviesContext from "../../contexts/movies/MoviesContext";

const ListSection: React.FC = () => {
  const { moviesList } = React.useContext(MoviesContext);
  const empty: boolean = !moviesList.length;

  return (
    <Container>
      <MoviesFilter />
      {empty ? (
        <MoviesEmpty>No Movie Found</MoviesEmpty>
      ) : (
        <React.Fragment>
          <MoviesCount>
            <b>{moviesList.length}</b> movies found
          </MoviesCount>
          <MoviesList movies={moviesList} />
        </React.Fragment>
      )}
    </Container>
  );
};

export default ListSection;
