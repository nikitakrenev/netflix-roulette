import React from "react";
import { Container, Close, Option } from "./styles";
import CloseIcon from "@material-ui/icons/Close";
import { Item } from "../../entities/item";

interface ContextMenuProps {
  items: Item[];
  closeContext?: Function;
  closeIcon?: boolean;
}

export const ContextMenu = ({
  items,
  closeContext,
  closeIcon,
}: ContextMenuProps) => {
  return (
    <Container>
      {closeIcon && (
        <Close
          onClick={() => {
            if (closeContext) closeContext(false);
          }}
        >
          <CloseIcon fontSize="small" />
        </Close>
      )}
      {items.map((item) => (
        <Option onClick={() => item.action()}>{item.name}</Option>
      ))}
    </Container>
  );
};
