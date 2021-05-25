import React from "react";
import { Container, Blur } from "./slyles";

export const InfoSection: React.FC = (props) => {
  return (
    <Container>
      <Blur>{props.children}</Blur>
    </Container>
  );
};
