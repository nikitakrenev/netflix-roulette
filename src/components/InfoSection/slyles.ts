import styled from "styled-components";

export const Container = styled.div<{ bg: string }>`
  background-image: url(${(props) => props.bg});
  background-repeat: repeat;
  background-size: contain;
`;

export const Blur = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.theme.bgColors.header};
  border-bottom: 10px solid ${props => props.theme.bgColors.border};
  box-sizing: border-box;
`;
