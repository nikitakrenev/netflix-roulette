import styled from "styled-components";

export const Container = styled.div`
  padding: 110px 70px 150px;
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
`;

export const Title = styled.div`
  font-size: 2.8rem;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: ${props => props.theme.textColors.main}
`;

export const SearchInput = styled.div`
  margin-top: 33px;
  display: flex;
`;

export const Input = styled.input`
  padding-left: 20px;
  width: 705px;
  height: 55px;
  background-color: rgba(35, 35, 35, 0.8);
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 1.3rem;
  font-family: ${props => props.theme.fonts.main};
  color: ${props => props.theme.textColors.primary};
`;

export const Button = styled.button`
  height: 55px;
  width: 240px;
  margin-left: 10px;
  border: none;
  border-radius: 5px;
  background-color: ${props => props.theme.textColors.red};
  font-size: 1.3rem;
  font-family: ${props => props.theme.fonts.regular};
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  color: ${props => props.theme.textColors.main};
  cursor: pointer;
  :hover {
    background-color: rgba(246, 82, 97, 0.8);
  }
`;