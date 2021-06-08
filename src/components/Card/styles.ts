import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 28px;
  padding-bottom: 50px;
  color: ${props => props.theme.textColors.primary};
`;

export const FilmCover = styled.img`
  width: 324px;
  height: 454px;
  cursor: pointer;
`;

export const FilmInfo = styled.div`
  padding-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const FilmTitle = styled.div`
  font-size: 1.3rem;
`;

export const FilmGenre = styled.div`
  margin-top: 5px;
  font-size: 1rem;
  color: ${props => props.theme.textColors.secondary};
`;

export const FilmYear = styled.div`
  padding: 3px 14px 1px;
  border: 1px solid ${props => props.theme.textColors.secondary};
  border-radius: 5px;
`;