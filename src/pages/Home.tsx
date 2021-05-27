import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { InfoSection } from "../components/InfoSection";
import ListSection from "../components/ListSection/ListSection";
import { MovieDescription } from "../components/Description";
import { GlobalStyle } from "./styles";
import { movies } from "./data";

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <InfoSection>
        <MovieDescription pickedMovie={movies[0]} /> {/*movies[0] temp solution*/}
      </InfoSection>
      <ListSection movies={movies} />
      <Footer />
    </React.Fragment>
  );
};
