import styled from "styled-components";

export const Card = styled.div`
  padding-bottom: 50px;
  color: #bdbdbd;
`;

export const FilmCover = styled.img`
  width: 350px;
  height: 500px;
  cursor: pointer;
`;

export const FilmInfo = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const FilmTitleGenre = styled.div``;

export const FilmTitle = styled.div`
  font-size: 1.3rem;
`;

export const FilmGenre = styled.div`
  color: #5c5c5c
`;

export const FilmYear = styled.div`
  line-height: 1.7;
  padding: 0 8px;
  border: 1px solid #5c5c5c;
  border-radius: 5px;
`;