import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { Formik } from "formik";
import Calendar from "react-calendar";
import { Movie, Film } from "../../entities/movie";
import { movies } from "../../hooks/movies/data";
import "./Calendar.css";
import {
  Container,
  Box,
  Close,
  Title,
  NewForm,
  Label,
  Input,
  MovieId,
  IconFiled,
  IconButton,
  Actions,
  Button,
  GenresSelect,
  Genre,
} from "./styles";
import MoviesContext from "../../contexts/movies/MoviesContext";

interface ModalProps {
  closeModal: Function;
  editMovie?: Movie;
}

export const Modal = ({ closeModal, editMovie }: ModalProps) => {
  let movieInitialValue: Film = {
    id: editMovie ? editMovie.id : movies.length + 1,
    title: editMovie ? editMovie.title : "",
    date: editMovie ? dateToString(editMovie.year) : "",
    cover: editMovie ? editMovie.cover : "",
    genre: editMovie ? editMovie.genre : "",
    description: editMovie ? editMovie.description : "",
    duration: editMovie ? editMovie.duration : 0,
    rating: editMovie ? editMovie.rating : 0,
  };
  const [showCalendar, setShowCalendar] = React.useState<boolean>(false);
  const [showGenres, setShowGenres] = React.useState<boolean>(false);
  const [date, setDate] = React.useState<Date>(new Date());
  const { filters, addMovieToList, editMovieInList } =
    React.useContext(MoviesContext);

  function dateToString(date: Date) {
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
  }

  const submitHandler = (values: Film) => {
    const movie: Movie = {
      id: values.id,
      title: values.title,
      subTitle: "",
      year: date,
      duration: values.duration,
      rating: values.rating,
      description: values.description,
      genre: values.genre,
      cover: values.cover,
    };
    editMovie ? editMovieInList(movie) : addMovieToList(movie);
    closeHandler();
  };

  const closeHandler = () => {
    document.body.style.overflow = "auto";
    closeModal();
  };

  return (
    <Container>
      <Box>
        <Close onClick={closeHandler}>
          <CloseIcon fontSize="large" />
        </Close>
        <Title>{editMovie ? "edit movie" : "add movie"}</Title>
        <Formik
          initialValues={movieInitialValue}
          onSubmit={submitHandler}
          render={(form) => (
            <NewForm>
              {editMovie && (
                <React.Fragment>
                  <Label htmlFor="id">movie id</Label>
                  <MovieId>{form.values.id}</MovieId>
                </React.Fragment>
              )}

              <Label htmlFor="title">title</Label>
              <Input name="title" type="text" placeholder="Select Title" />

              <IconFiled>
                <Label htmlFor="date">release date</Label>
                <Input name="date" type="text" placeholder="Select Date" />
                <IconButton onClick={() => setShowCalendar(!showCalendar)}>
                  <DateRangeIcon fontSize="large" />
                </IconButton>
                {showCalendar && (
                  <Calendar
                    value={date}
                    onClickDay={(value) => {
                      form.setFieldValue("date", dateToString(value));
                      setDate(value);
                      setShowCalendar(false);
                    }}
                  />
                )}
              </IconFiled>

              <Label htmlFor="cover">movie url</Label>
              <Input name="cover" type="text" placeholder="Movie URL here" />

              <IconFiled>
                <Label htmlFor="genre">genre</Label>
                <Input name="genre" type="text" placeholder="Select Genre" />
                <IconButton onClick={() => setShowGenres(!showGenres)}>
                  {showGenres ? (
                    <ArrowDropUpIcon fontSize="large" />
                  ) : (
                    <ArrowDropDownIcon fontSize="large" />
                  )}
                </IconButton>
                {showGenres && (
                  <GenresSelect>
                    {filters
                      .filter((item) => item !== "all")
                      .map((item) => (
                        <Genre
                          key={item}
                          onClick={() => {
                            form.setFieldValue("genre", item);
                            setShowGenres(false);
                          }}
                        >
                          {item}
                        </Genre>
                      ))}
                  </GenresSelect>
                )}
              </IconFiled>

              <Label htmlFor="description">overview</Label>
              <Input
                name="description"
                type="text"
                placeholder="Overview here"
              />

              <Label htmlFor="duration">runtime</Label>
              <Input name="duration" type="text" placeholder="Runtime here" />

              <Label htmlFor="rating">rating</Label>
              <Input name="rating" type="text" placeholder="Rating here" />

              <Actions>
                <Button onClick={closeHandler}>reset</Button>
                <Button submit type="submit">
                  submit
                </Button>
              </Actions>
            </NewForm>
          )}
        />
      </Box>
    </Container>
  );
};
