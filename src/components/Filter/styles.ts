import styled from "styled-components";

export const FilterItem = styled.li<{ border: string }>`
  padding-bottom: 17px;
  display: inline;
  margin-right: 30px;
  border-bottom: ${(props) => props.border};
  text-transform: uppercase;
  color: ${props => props.theme.textColors.main};
  cursor: pointer;
`;