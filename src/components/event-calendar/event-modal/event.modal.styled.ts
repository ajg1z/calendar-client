import { flexCenter } from "./../../../styled.common";
import styled from "styled-components";
import { IContainerProps } from "./event-modal.types";

export const Container = styled.div<IContainerProps>`
	width: ${(props) =>
		typeof props.width === "string" ? props.width : props.width + "px"};
	position: fixed;
	top: 50%;
	display: flex;
	padding: 0px 0px 15px;
	flex-direction: column;
	border: 1px solid white;
	left: 50%;
	background-color: black;
	z-index: 10;
	transform: translate(-50%, -50%);
	height: ${(props) =>
		typeof props.height === "string" ? props.height : props.height + "px"}; ;
`;

export const Background = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
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
	align-items: center;

	padding: 0px 0px 5px 5px;
	border-bottom: 1px solid white;
`;

export const Footer = styled.footer`
	${flexCenter};
	justify-content: flex-end;
	padding: 0px 5px;
	align-items: flex-end; ;
`;

export const Close = styled.p`
	position: absolute;
	top: 0px;
	cursor: pointer;
	line-height: 1;
	font-size: 30px;
	right: 5px;
`;

export const Button = styled.button`
	:disabled {
		opacity: 0.5;
	}
	padding: 0px 15px;
	height: 40px;
	background-color: black;
	cursor: pointer;
	margin: 0px 0px 0px 20px;
	border: 1px solid white;
`;
