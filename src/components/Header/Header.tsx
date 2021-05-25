import React from "react";
import { Container, Box, Logo, Bold, Search } from "./styles";
import SearchIcon from "@material-ui/icons/Search";

export const Header: React.FC = () => {
    return (
      <Container>
        <Box>
          <Logo>
            <Bold>netflix</Bold>roulette
          </Logo>
          <Search>
            <SearchIcon fontSize="large" />
          </Search>
        </Box>
      </Container>
    );
}
