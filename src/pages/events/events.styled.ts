import { flexCenter, fullPage, scrollbar } from "./../../styled.common";
import styled from "styled-components";

export const Container = styled.div`
	${fullPage};
	height: 100vh;
`;
export const Title = styled.h2`
	padding: 10px 0px;
	text-align: center;
`;

export const Body = styled.main`
	display: flex;
	margin: 0px auto;
	width: 95%;
	height: 80%;
	padding: 20px 0px 0px 0px;
`;

export const Column = styled.div`
	transition: all 0.3s ease 0s;
	flex: 33%;
	:hover {
		${Title} {
			outline: 1px solid ${(props) => props.theme.colors.base};
		}
		outline: 1px solid ${(props) => props.theme.colors.base};
	}
`;

export const ListEvents = styled.div`
	overflow-y: auto;
	${scrollbar};
`;

export const Label = styled.p`
	line-height: 1;
	padding: 0;
	margin: 0;
	max-width: 400px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
`;

export const Item = styled.div`
	cursor: pointer;
	transition-timing-function: ease-in-out;
	transition: background-color 0.3s, color 0.3s;
	${flexCenter};
	justify-content: space-between;
	:hover {
		background-color: ${(props) => props.theme.colors.base};
		${Label} {
			color: ${(props) => props.theme.colors.background};
		}
	}
	padding: 10px;
`;
