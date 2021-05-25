import React from "react";
import { Container } from "./styles";

export const PageContainer: React.FC = (props) => {
  return <Container>{props.children}</Container>;
};
