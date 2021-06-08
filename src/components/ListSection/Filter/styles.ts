import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  padding: 20px 0 15px;
  width: 100%;
  max-width: 1080px;
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid ${props => props.theme.bgColors.divider};
  font-size: 1.1rem;
`;
