import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { MovieSection } from "./pages/movie";
import { SearchSection } from "./pages/search";
import MoviesContext from "./contexts/movies/MoviesContext";
import { useMovies } from "./hooks/movies";
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
    header: "rgba(0,0,0,0.92)",
    footer: "#424242",
    border: "rgba(255, 255, 255, 0.3)",
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
  const {
    moviesList,
    removeMovieFromList,
    searchInList,
    getMovie,
    filters,
    addMovieToList,
    editMovieInList,
    sortMovies,
    filterMovies,
  } = useMovies();

  return (
    <MoviesContext.Provider
      value={{
        moviesList,
        removeMovieFromList,
        searchInList,
        getMovie,
        filters,
        addMovieToList,
        editMovieInList,
        sortMovies,
        filterMovies,
      }}
    >
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path={"/"} exact>
              <Redirect to={"/search"} />
            </Route>
            <Route path={"/search"} exact>
              <SearchSection />
            </Route>
            <Route path={"/film/:id"}>
              <MovieSection />
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </MoviesContext.Provider>
  );
};

export default App;
