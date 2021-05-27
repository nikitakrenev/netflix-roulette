import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { ContextMenu } from "../ContextMenu";
import { Container, Options } from "./styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { items } from "../../pages/data";

interface FilmOptionsProps {
  showOptions: boolean;
}

export const MovieOptions = ({ showOptions }: FilmOptionsProps) => {
  const [showContext, setShowContext] = React.useState<boolean>(false);

  return (
    <ClickAwayListener onClickAway={() => setShowContext(false)}>
      <Container>
        {!showContext && showOptions && (
          <Options>
            <MoreVertIcon onClick={() => setShowContext(true)} />
          </Options>
        )}
        {showContext && <ContextMenu items={items} closeContext={setShowContext} closeIcon />}
      </Container>
    </ClickAwayListener>
  );
};
