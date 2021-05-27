import styled from "styled-components";

export const Container = styled.div`
  padding-top: 90px;
  margin: 0 auto;
  max-width: 1080px;
  width: 100%;
  display: flex;
`;

export const FilmInfo = styled.div`
  padding: 30px 0 0 60px;
  color: ${props => props.theme.textColors.main};
`;

export const FilmSubTitle = styled.div`
  padding-top: 5px;
`;

export const FilmTitleRate = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const FilmCover = styled.img`
  width: 280px;
  height: 400px;
`;

export const FilmRating = styled.div`
  margin-left: 20px;
  border: 1px solid ${props => props.theme.textColors.main};
  width: 65px;
  height: 65px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  color: ${props => props.theme.textColors.green};
`;

export const FilmYearDuration = styled.div`
  margin-top: 30px;
  display: flex;
  color: ${props => props.theme.textColors.red};
  font-size: 1.7rem;
`;

export const FilmDescription = styled.div`
  margin-top: 20px;
  padding-right: 100px;
  font-family: ${props => props.theme.fonts.description};
`;

export const FilmDuration = styled.div`
  margin-left: 40px;
`;