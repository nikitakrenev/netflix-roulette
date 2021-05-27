import React from "react";
import { Logo } from "../Logo";
import { Container, Box, Search } from "./styles";
import SearchIcon from "@material-ui/icons/Search";

export const Header: React.FC = () => {
  return (
    <Container>
      <Box>
        <Logo />
        <Search>
          <SearchIcon fontSize="large" />
        </Search>
      </Box>
    </Container>
  );
};
