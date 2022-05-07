import { Props } from "../calendar/calendar.types";
import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorLabel = styled.p`
  color: red;
`;

export const Form = styled.form`
  position: relative;
  width: 500px;
  padding: 15px 10px;
  border: 1px solid white;
  border-radius: 5px;
`;

export const Button = styled.button`
  border: 1px solid white;
  width: 80px;
  height: 45px;
  background-color: black;
  cursor: pointer;
  border-radius: 5px;
  margin: 0px auto;
  display: block;
  text-transform: uppercase;
  :hover {
  }
`;

export const Input = styled.input<{ error: boolean }>`
  width: 100%;
  height: 50px;
  display: inline-block;
  padding: 0px 5px;
  outline: none;
  border-bottom: 1px solid white;
  background-color: black;
  margin: 0px 0px 20px 0px;
  border-color: ${({ error }) => error && `red`};
`;
