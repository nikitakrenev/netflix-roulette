import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
  z-index: 1;
`;

export const Box = styled.div`
  position: absolute;
  top: 1.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Search = styled.div`
  width: 35px;
  height: 35px;
  transform: scale(-1, 1);
  color: ${props => props.theme.textColors.red};
  cursor: pointer;
`;

export const Button = styled.button`
  height: 45px;
  width: 180px;
  border: none;
  border-radius: 5px;
  background-color: rgba(85, 85, 85, 0.8);;
  font-size: 1.3rem;
  font-family: ${props => props.theme.fonts.regular};
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: ${props => props.theme.textColors.red};
  cursor: pointer;
  :hover {
    background-color: #555555;
  }
`;