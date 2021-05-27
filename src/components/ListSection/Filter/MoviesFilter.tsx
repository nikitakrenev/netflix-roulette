import React from "react";
import { Filter } from "../../Filter";
import { Sort } from "../../Sort";
import { Container } from "./styles";

export const MoviesFilter: React.FC = () => {
  return (
    <Container>
      <Filter />
      <Sort />
    </Container>
  );
};
