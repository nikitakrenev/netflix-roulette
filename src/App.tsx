import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages";
import { DefaultTheme, ThemeProvider } from "styled-components";

const theme: DefaultTheme = {
  fonts: {
    main: "Volte-Light, sans-serif",
    bold: "Volte-Bold, sans-serif",
    regular: "Volte, sans-serif",
    description: "OpenSans-Light, sans-serif",
  },
  bgColors: {
    main: "#232323",
    header: "rgba(0,0,0,0.95)",
    footer: "#424242",
    border: "rgba(255, 255, 255, 0.5)",
    divider: "#555555",
  },
  textColors: {
    main: "#ffffff",
    primary: "#bdbdbd",
    secondary: "#5c5c5c",
    green: "#80b859",
    red: "#f65261",
  },
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route path={"/"} exact component={Home} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
