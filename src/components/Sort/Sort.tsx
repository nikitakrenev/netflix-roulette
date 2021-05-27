import React from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import {
  Container,
  SortBy,
  SortSelect,
  SortOption,
  IconButton,
  Box,
} from "./styles";
import { ContextMenu } from "../ContextMenu";
import { Item } from "../../entities/item";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

export const Sort: React.FC = () => {
  const [showContext, setShowContext] = React.useState<boolean>(false);
  const [picked, setPicked] = React.useState<string>("RELEASE DATE");
  const items: Item[] = [
    {
      name: "RELEASE DATE",
      action: () => {
        setPicked("RELEASE DATE");
        setShowContext(false);
      },
    },
    {
      name: "RATING",
      action: () => {
        setPicked("RATING");
        setShowContext(false);
      },
    },
  ];

  return (
    <Container>
      <SortBy>SORT BY</SortBy>
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
