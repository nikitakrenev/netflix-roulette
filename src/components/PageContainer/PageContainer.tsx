import React from "react";
import { GlobalStyle } from "./styles";
import { Header } from "../Header";
import { InfoSection } from "../InfoSection";
import ListSection from "../ListSection/ListSection";
import { Footer } from "../Footer";
import { useMovies } from "../../hooks/movies";

export const PageContainer: React.FC = ({ children }) => {
  const { moviesList } = useMovies();

  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <InfoSection>{children}</InfoSection>
      <ListSection movies={moviesList} />
      <Footer />
    </React.Fragment>
  );
};
