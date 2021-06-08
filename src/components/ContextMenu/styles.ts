import styled from "styled-components";

export const Container = styled.div`
  width: 190px;
  padding-bottom: 5px;
  background-color: ${props => props.theme.bgColors.main};
  border-radius: 5px;
`;

export const Close = styled.div`
  padding: 3px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

export const Option = styled.div`
  padding: 10px 24px 10px; 
  cursor: pointer;
  :hover {
    background-color: ${props => props.theme.textColors.red};
    color: ${props => props.theme.textColors.main};
  }
`;