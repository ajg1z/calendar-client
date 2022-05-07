import { flexCenter, fullPage } from "./../../styled.common";
import styled from "styled-components";

export const Container = styled.div`
	${fullPage}
`;

export const MenuStyled = styled.div`
	margin: 100px 0px 0px 200px;
	border: 1px solid #000;
`;

export const Link = styled.button`
	width: 220px;
	cursor: pointer;
	margin: 0px 0px 40px 0px;
	background-color: #fff;
	color: black;
	height: 45px;
	${flexCenter};
	a {
		color: black;
		font-weight: 600;
		font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
			"Lucida Sans", Arial, sans-serif;
		letter-spacing: 2px;
        font-size: 18px;
	}
`;
