import React from "react";
import { Content } from "./styles";

export const PageContent: React.FC = (props) => {
  return <Content>{props.children}</Content>;
};