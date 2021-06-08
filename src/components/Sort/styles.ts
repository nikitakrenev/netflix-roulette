import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SortBy = styled.div`
  margin-right: 30px;
`;

export const SortSelect = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const SortOption = styled.div`
  margin-right: 10px;
  color: ${props => props.theme.textColors.main};
`;

export const IconButton = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.textColors.red};
`;

export const Box = styled.div`
  position: absolute;
  right: 0;
  top: 50px;
  z-index: 1;
`;