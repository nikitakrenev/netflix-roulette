import React from "react";
import MoviesContext from "../../contexts/movies/MoviesContext";
import CloseIcon from '@material-ui/icons/Close';
import { Container, Title, SearchInput, Input, Button, IconButton, IconFiled } from "./styles";

export const MovieSearch: React.FC = () => {
  const [searchInput, setSearchInput] = React.useState<string>("");
  const { searchInList } = React.useContext(MoviesContext);

  const onSearch = () => {
    searchInList(searchInput);
  };

  return (
    <Container>
      <Title>find your movie</Title>
      <SearchInput>
        <IconFiled>
          <Input
            value={searchInput}
            placeholder="What do you want to watch?"
            onChange={(event) => setSearchInput(event.target.value)}
          />
          <IconButton onClick={() => setSearchInput("")}>
            <CloseIcon />
          </IconButton>
        </IconFiled>
        <Button onClick={onSearch}>Search</Button>
      </SearchInput>
    </Container>
  );
};
