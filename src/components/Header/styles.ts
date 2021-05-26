import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  max-width: 1200px;
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
  font-weight: 600;
  font-size: 1.3rem;
  color: #f65261;
`;

export const Logo = styled.div`
  cursor: pointer;
`;

export const Bold = styled.span`
  font-weight: 900;
`;

export const Search = styled.div`
  width: 35px;
  height: 35px;
  transform: scale(-1, 1);
  cursor: pointer;
`;