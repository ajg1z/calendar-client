import { flexCenter, fullPage } from "./../../styled.common";
import styled from "styled-components";

export const Container = styled.div`
	${fullPage}
`;

export const Left = styled.div`
	height: 100%;
	flex: 20%;
	padding: 10px;
	:hover {
		outline: 2px solid white;
	}
`;

export const Section = styled.div`
	margin: 20px 0px;
	font-size: 20px;
	cursor: pointer;
`;

export const Right = styled.div`
	flex: 80%;
	height: 100%;
	:hover {
		outline: 2px solid white;
	}
`;
