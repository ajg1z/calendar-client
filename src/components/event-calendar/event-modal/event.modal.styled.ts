import { flexCenter } from "./../../../styled.common";
import styled from "styled-components";
import { IContainerProps } from "./event-modal.types";
import { animated } from "react-spring";

export const Container = styled(animated.div)<IContainerProps>`
	width: ${(props) =>
		typeof props.width === "string" ? props.width : props.width + "px"};
	display: flex;
	padding: 0px 0px 15px;
	flex-direction: column;
	border: 1px solid white;
	left: 50%;
	background-color: ${(props) => props.theme.colors.background};
	z-index: 10;
	height: ${(props) =>
		typeof props.height === "string" ? props.height : props.height + "px"}; ;
`;

export const Text = styled.p``;

export const Background = styled(animated.div)`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	${flexCenter};
	transition: all 0.3s ease 0s;
	background-color: rgb(0, 0, 0, 0.8);
`;

export const Body = styled.main`
	${flexCenter};
	width: 100%;
	flex: 1;
	padding: 0px 0px;
`;

export const Top = styled.header`
	height: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px 5px;
	outline: 1px solid ${(props) => props.theme.colors.base}; ;
`;

export const Footer = styled.footer`
	${flexCenter};
	justify-content: flex-end;
	padding: 0px 10px;
	align-items: flex-end; ;
`;

export const Close = styled.p`
	cursor: pointer;
	line-height: 1;
	font-size: 20px;
	transition: color 0.3s ease 0s;
	:hover {
		color: red;
	}
`;

export const Button = styled.button`
	:disabled {
		opacity: 0.5;
	}
	padding: 0px 15px;
	height: 40px;
	color: ${(props) => props.theme.colors.font};
	background-color: ${(props) => props.theme.colors.background};
	cursor: pointer;
	margin: 0px 0px 0px 20px;
	outline: 1px solid ${(props) => props.theme.colors.base};
	:hover {
		outline-width: 2px;
	}
`;
