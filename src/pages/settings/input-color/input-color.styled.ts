import styled from "styled-components";
import { flexCenter } from "../../../styled.common";

export const Container = styled.div`
	width: 30px;
	height: 30px;
	position: relative;
`;

export const Icon = styled.p`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const Color = styled.input`
	width: 100%;
	height: 100%;
	border: 0;
	outline: none;
`;
