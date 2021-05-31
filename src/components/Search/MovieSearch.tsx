import React from "react";
import { useMovies } from "../../hooks/movies";
import { Container, Title, SearchInput, Input, Button } from "./styles";

export const MovieSearch: React.FC = () => {
  const [searchInput, setSearchInput] = React.useState<string>("");
  const { searchInList } = useMovies();

  const onSearch = () => {
    searchInList(searchInput);
    setSearchInput("");
  };

  return (
    <Container>
      <Title>find your movie</Title>
      <SearchInput>
        <Input
          value={searchInput}
          placeholder="What do you want to watch?"
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <Button onClick={onSearch}>Search</Button>
      </SearchInput>
    </Container>
  );
};
