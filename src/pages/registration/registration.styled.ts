import { Props } from "../calendar/calendar.types";
import styled from "styled-components";

export const Container = styled.div`
	height: 100vh;
	width: 100vw;
	background-color: ${(props) => props.theme.colors.background};
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ErrorLabel = styled.p`
	color: red;
`;
export const Input = styled.input<{ error: boolean }>`
	width: 100%;
	height: 50px;
	display: inline-block;
	padding: 0px 5px;
	outline: none;
	font-size: 1.4rem;
	color: inherit;
	border-bottom: 1px solid white;
	background-color: black;
	margin: 0px 0px 20px 0px;
	border-color: ${({ error }) => error && `red`};
`;

export const Form = styled.form`
	position: relative;
	width: 500px;
	padding: 3rem 2rem;
	border-radius: 5px;
`;

export const Button = styled.button`
	border: 1px solid ${(props) => props.theme.colors.base};
	width: 80px;
	height: 45px;
	background-color: ${(props) => props.theme.colors.background};
	cursor: pointer;
	border-radius: 5px;
	position: relative;
	margin: 0px auto;
	display: block;
	color: inherit;
	text-transform: uppercase;
	transition: all 0.3s ease 0s;
	:hover {
		transform: scale(1.4);
		border: none;
	}
	&:active {
		transform: scale(1);
	}
`;
