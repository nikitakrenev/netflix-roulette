import React from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { ContextMenu } from "../ContextMenu";
import { Modal } from "../Modal";
import { Portal } from "../Portal";
import {Movie} from "../../entities/movie";
import { Item } from "../../entities/item";
import MoviesContext from "../../contexts/movies/MoviesContext";
import { Container, Options } from "./styles";

interface FilmOptionsProps {
  movie: Movie;
  hideOptions: Function;
  showOptions: boolean;
}

export const MovieOptions = ({ movie, hideOptions, showOptions }: FilmOptionsProps) => {
  const [showContext, setShowContext] = React.useState<boolean>(false);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const { removeMovieFromList } = React.useContext(MoviesContext);

  const onHide = () => {
    setShowContext(false);
    hideOptions();
  }

  const openModal = () => {
    document.body.style.overflow = "hidden";
    setShowModal(true);
  };

  const items: Item[] = [
    {
      id: 1,
      name: "Edit",
      action: () => {
        openModal();
        onHide();
      },
    },
    {
      id: 2,
      name: "Delete",
      action: () => {
        removeMovieFromList(movie.id);
        onHide();
      },
    },
  ];

  return (
    <ClickAwayListener onClickAway={() => setShowContext(false)}>
      <Container>
        {showOptions && !showContext && (
          <Options>
            <MoreVertIcon onClick={() => setShowContext(true)} />
          </Options>
        )}
        {showContext && (
          <ContextMenu items={items} closeContext={setShowContext} closeIcon />
        )}
        {showModal && (
          <Portal>
            <Modal editMovie={movie} closeModal={() => setShowModal(false)} />
          </Portal>
        )}
      </Container>
    </ClickAwayListener>
  );
};
