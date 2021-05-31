import React from "react";
import { PageContainer } from "../../components/PageContainer";
import { MovieSearch } from "../../components/Search";

export const Search: React.FC = () => {
  return (
    <PageContainer>
      <MovieSearch />
    </PageContainer>
  );
};