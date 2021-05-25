import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { InfoSection } from "../components/InfoSection";
import ListSection from "../components/ListSection/ListSection";
import { MovieDescription } from "../components/Description";

export const Home: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <div>
        <InfoSection>
          <MovieDescription />
        </InfoSection>
        <ListSection />
      </div>
      <Footer />
    </React.Fragment>
  );
};
