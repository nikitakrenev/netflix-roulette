import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { ContextMenu } from "../ContextMenu";
import { Item } from "../../entities/item";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MoviesContext from "../../contexts/movies/MoviesContext";
import {
  Container,
  SortBy,
  SortSelect,
  SortOption,
  IconButton,
  Box,
} from "./styles";

export const Sort: React.FC = () => {
  const [showContext, setShowContext] = React.useState<boolean>(false);
  const [picked, setPicked] = React.useState<string>("RELEASE DATE");
  const { sortMovies } = React.useContext(MoviesContext);

  const sortType = (name: string) => {
    sortMovies(name);
    setPicked(name);
    setShowContext(false);
  };

  const items: Item[] = [
    {
      id: 1,
      name: "release date",
      action: () => sortType("release date"),
    },
    {
      id: 2,
      name: "rating",
      action: () => sortType("rating"),
    },
    {
      id: 3,
      name: "name",
      action: () => sortType("name"),
    },
  ];

  return (
    <Container>
      <SortBy>sort by</SortBy>
      <SortSelect onClick={() => setShowContext(!showContext)}>
        <SortOption>{picked}</SortOption>
        <IconButton>
          {showContext ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </IconButton>
      </SortSelect>
      {showContext && (
        <ClickAwayListener onClickAway={() => setShowContext(false)}>
          <Box>
            <ContextMenu items={items} />
          </Box>
        </ClickAwayListener>
      )}
    </Container>
  );
};
