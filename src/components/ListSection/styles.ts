import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  flex: 1;
  overflow: auto;
  width: 100%;
  background: ${props => props.theme.bgColors.main};
`;

export const MoviesCount = styled.div`
  padding: 25px 0;
  margin: 0 auto;
  max-width: 1080px;
  font-size: 1.3rem;
  color: ${props => props.theme.textColors.main};
`;