import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { ContextMenu } from "../ContextMenu";
import { Container, Options } from "./styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { Item } from "../../entities/item";
import { useMovies } from "../../hooks/movies";
import { Modal } from "../Modal";
import { Portal } from "../Portal";
import {Movie} from "../../entities/movie";

interface FilmOptionsProps {
  movie: Movie;
  hideOptions: Function;
  showOptions: boolean;
}

export const MovieOptions = ({ movie, hideOptions, showOptions }: FilmOptionsProps) => {
  const [showContext, setShowContext] = React.useState<boolean>(false);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const { removeMovieFromList } = useMovies();

  const onHide = () => {
    setShowContext(false);
    hideOptions();
  }

  const items: Item[] = [
    {
      id: 1,
      name: "Edit",
      action: () => {
        setShowModal(true)
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
