import styled from "styled-components";
import { Field, Form } from "formik";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(35, 35, 35, 0.8);
  backdrop-filter: blur(8px);
  text-transform: uppercase;
`;

export const Box = styled.div`
  margin: 128px auto;
  max-width: 685px;
  background-color: ${(props) => props.theme.bgColors.main};
`;

export const Close = styled.div`
  padding: 20px 20px 8px;
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

export const Title = styled.div`
  padding: 0 80px;
  font-size: 2.8rem;
  color: ${(props) => props.theme.textColors.main};
`;

export const NewForm = styled(Form)`
  padding: 30px 80px 100px;
`;

export const Label = styled.label`
  margin-bottom: 12px;
  display: block;
  font-size: 1.2rem;
  font-family: ${(props) => props.theme.fonts.regular};
  letter-spacing: 0.1rem;
  color: ${(props) => props.theme.textColors.red};
`;

export const Input = styled(Field)`
  margin-bottom: 30px;
  padding: 0 20px;
  width: 485px;
  height: 55px;
  border: none;
  outline: none;
  background-color: #2e2e2e;
  border-radius: 5px;
  font-size: 1.3rem;
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.textColors.main};
`;

export const MovieId = styled.div`
  margin-bottom: 30px;
  font-size: 1.3rem;
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.textColors.main};
`;

export const IconFiled = styled.div`
  position: relative;
`;

export const IconButton = styled.div`
  position: absolute;
  top: 45px;
  right: 20px;
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.textColors.red};
  cursor: pointer;
`;

export const Actions = styled.div`
  margin-top: 75px;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button<{ submit?: boolean }>`
  margin-left: 15px;
  width: 180px;
  height: 57px;
  outline: none;
  border: 2px solid ${(props) => props.theme.textColors.red};
  border-radius: 5px;
  background-color: ${(props) =>
    props.submit ? props.theme.textColors.red : props.theme.bgColors.main};
  color: ${(props) =>
    props.submit ? props.theme.textColors.main : props.theme.textColors.red};
  font-size: 1.3rem;
  font-family: ${(props) => props.theme.fonts.regular};
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  cursor: pointer;

  :hover {
    background-color: rgba(246, 82, 97, 0.5);
    border: 2px solid rgba(246, 82, 97, 0);
    color: ${(props) => props.theme.textColors.main};
  }
`;

export const GenresSelect = styled.div`
  position: absolute;
  right: 0;
  top: 91px;
  border-radius: 5px;
  background-color: #2e2e2e;
`;

export const Genre = styled.div`
  width: 230px;
  padding: 10px 20px;
  font-size: 1.2rem;
  font-family: ${(props) => props.theme.fonts.main};
  color: ${(props) => props.theme.textColors.primary};
  text-transform: capitalize;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.textColors.red};
    color: ${(props) => props.theme.textColors.main};
  }
`;
