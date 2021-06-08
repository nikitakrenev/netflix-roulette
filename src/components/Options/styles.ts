import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 10px;
  right: 17px;
`;

export const Options = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.bgColors.main};
  cursor: pointer;
`;