import React from "react";
import { PageContainer } from "../../components/PageContainer";
import { MovieDescription } from "../../components/Description";

export const MovieSection: React.FC = () => {
  return (
    <PageContainer>
      <MovieDescription />
    </PageContainer>
  );
};
