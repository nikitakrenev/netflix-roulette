import React from "react";
import { Logo } from "../Logo";
import { Modal } from "../Modal";
import { Portal } from "../Portal";
import { Link } from "react-router-dom";
import { Container, Box, Search, Button } from "./styles";
import SearchIcon from "@material-ui/icons/Search";

export const Header: React.FC = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const isSearch: boolean = window.location.pathname.includes("/search");

  return (
    <Container>
      <Box>
        <Logo />
        {showModal ? (
          <Portal>
            <Modal closeModal={() => setShowModal(false)} />
          </Portal>
        ) : isSearch ? (
          <Button onClick={() => setShowModal(!showModal)}>+ add movie</Button>
        ) : (
          <Link to="/search">
            <Search>
              <SearchIcon fontSize="large" />
            </Search>
          </Link>
        )}
      </Box>
    </Container>
  );
};
