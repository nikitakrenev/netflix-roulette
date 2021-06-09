import React from "react";
import { Header } from "../Header";
import { InfoSection } from "../InfoSection";
import ListSection from "../ListSection/ListSection";
import { Footer } from "../Footer";
import { GlobalStyle } from "./styles";

export const PageContainer: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Header />
      <InfoSection>{children}</InfoSection>
      <ListSection />
      <Footer />
    </React.Fragment>
  );
};
