import React from "react";
import { Container, Blur } from "./slyles";

export const InfoSection: React.FC = (props) => {
  const background: string = "https://i.insider.com/5e721af9c48540088f66f3a3?width=1200&format=jpeg";

  return (
    <Container bg={background}>
      <Blur>{props.children}</Blur>
    </Container>
  );
};
