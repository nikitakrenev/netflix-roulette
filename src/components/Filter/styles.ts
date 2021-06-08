import styled from "styled-components";

export const FilterItem = styled.li<{ border: boolean }>`
  padding-bottom: 17px;
  display: inline;
  margin-right: 30px;
  border-bottom: ${(props) => props.border ? "3px solid #f65261" : ""};
  text-transform: uppercase;
  color: ${props => props.theme.textColors.main};
  cursor: pointer;
`;