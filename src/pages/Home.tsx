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
      <div>
        <InfoSection>
          {/*movies[0] temp solution*/}
          <MovieDescription pickedMovie={movies[0]} />
        </InfoSection>
        <ListSection movies={movies} />
      </div>
      <Footer />
    </React.Fragment>
  );
};
