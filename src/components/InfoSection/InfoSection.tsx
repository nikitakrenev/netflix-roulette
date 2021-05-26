import React from "react";
import { Container, Blur, theme } from "./slyles";
import {ThemeProvider} from "styled-components";

export const InfoSection: React.FC = (props) => {
  return (
      <ThemeProvider theme={theme}>
          <Container>
              <Blur>{props.children}</Blur>
          </Container>
      </ThemeProvider>
  );
};
