import styled from "styled-components";

export const theme = {
    bg: "https://i.insider.com/5e721af9c48540088f66f3a3?width=1200&format=jpeg",
}

export const Container = styled.div`
  height: 600px;
  flex: 1;
  overflow: auto;
  width: 100%;
  background-image: url(${props => props.theme.bg});
  background-repeat: repeat;
  background-size: contain;
`;

export const Blur = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.95);
  border-bottom: 10px solid rgba(255, 255, 255, 0.5);
  box-sizing: border-box;
`;