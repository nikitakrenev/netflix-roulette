import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { Formik } from "formik";
import {
  Container,
  Box,
  Close,
  Title,
  Form,
  Label,
  Input,
  Genre,
  IconButton,
  Actions,
  Button,
} from "./styles";
import { Movie } from "../../entities/movie";

interface ModalProps {
  closeModal: Function;
  editMovie?: Movie;
}

export const Modal = ({ closeModal, editMovie }: ModalProps) => {
  const movieInitialValue: Movie = {
    id: 0,
    title: "",
    subTitle: "",
    year: 0,
    duration: 0,
    rating: 0,
    description: "",
    genre: "",
    cover: "",
  };
  const item: Movie = editMovie || movieInitialValue;

  const onSubmit = () => {};

  const onClose = () => closeModal();

  return (
    <Container>
      <Box>
        <Close onClick={onClose}>
          <CloseIcon fontSize="large" />
        </Close>
        <Title>{!!editMovie ? "edit movie" : "add movie"}</Title>
        <Formik
          initialValues={item}
          onSubmit={onSubmit}
          render={() => (
            <Form>
              <Label htmlFor="fTitle">title</Label>
              <Input name="title" id="fTitle" type="text" placeholder="Select Title" />

              <Label htmlFor="fDate">release date</Label>
              <Input name="year" id="fDate" type="text" placeholder="Select Date" />

              <Label htmlFor="fURL">movie url</Label>
              <Input name="cover" id="fURL" type="text" placeholder="Movie URL here" />

              <Genre>
                <Label htmlFor="fGenre">genre</Label>
                <Input name="genre" id="fGenre" placeholder="Select Genre" />
                <IconButton>
                  <ArrowDropDownIcon fontSize="large" />
                </IconButton>
              </Genre>

              <Label htmlFor="fOverview">overview</Label>
              <Input name="description" id="fOverview" type="text" placeholder="Overview here" />

              <Label htmlFor="fRuntime">runtime</Label>
              <Input name="duration" id="fRuntime" type="text" placeholder="Runtime here" />

              <Actions>
                <Button onClick={onClose}>reset</Button>
                <Button submit type="submit">
                  submit
                </Button>
              </Actions>
            </Form>
          )}
        />
      </Box>
    </Container>
  );
};
