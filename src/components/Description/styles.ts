import styled from "styled-components";

export const Container = styled.div`
  padding-top: 100px;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  display: flex;
`;

export const FilmInfo = styled.div`
  padding: 30px 0 0 60px;
  color: #ffffff;
`;

export const FilmTitleRate = styled.div`
  display: flex;
`;

export const FilmCover = styled.img`
  width: 300px;
  height: 400px;
`;

export const FilmTitle = styled.div`
  font-size: 56px;
  line-height: 60px;
`;

export const FilmSubTitle = styled.div`
  font-size: 18px;
  line-height: 36px;
`;

export const FilmRating = styled.div`
  margin-left: 30px;
  border: 1px solid #ffffff;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 28px;
  line-height: 60px;
  color: #80b859;
  text-align: center;
`;

export const FilmYearDuration = styled.div`
  margin-top: 20px;
  display: flex;
  color: #f65261;
  font-size: 24px;
`;

export const FilmYear = styled.div``;

export const FilmDuration = styled.div`
  margin-left: 50px;
`;

export const FilmDescription = styled.p`
  margin-top: 20px;
  padding-right: 100px;
  font-size: 18px;
`;