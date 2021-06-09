import React from "react";
import { Logo } from "../Logo";
import { Modal } from "../Modal";
import { Portal } from "../Portal";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { Container, Box, Search, Button } from "./styles";

export const Header: React.FC = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const isSearch: boolean = window.location.pathname.includes("/search");

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setShowModal(!showModal);
  };

  return (
    <Container>
      <Box>
        <Logo />
        {showModal ? (
          <Portal>
            <Modal closeModal={() => setShowModal(false)} />
          </Portal>
        ) : isSearch ? (
          <Button onClick={openModal}>+ add movie</Button>
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
