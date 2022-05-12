import { flexCenter, fullPage } from "./../../styled.common";
import styled from "styled-components";

export const Container = styled.div`
	${fullPage};
	height: 100vh;
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
	:hover {
		text-decoration: underline;
	}
`;

export const Line = styled.div`
	${flexCenter};
	width: 120px;
	margin: 0px 0px 10px;
	justify-content: space-between;
`;

export const EventIcon = styled.p`
	width: 20px;
	cursor: pointer;
	height: 20px;
	line-height: 1;
	${flexCenter};
	outline: 1px solid white;
`;

export const Text = styled.p``;

export const Right = styled.div`
	padding: 10px;
	flex: 80%;
	height: 100%;
	:hover {
		outline: 2px solid white;
	}
`;
export const ListHolydays = styled.div`
	width: 450px;
`;

export const ItemHolydays = styled.div<{ selected: boolean }>`
	width: 100%;
	margin: 0px 0px 10px;
	padding: 10px;
	${flexCenter};
	justify-content: space-between;
	${({ selected }) => selected && `background-color:gray`};
`;

export const Actions = styled.div`
	${flexCenter}
`;

export const Button = styled.button`
	::before {
		transition: all 0.3s ease 0s;
		top: 22%;
		opacity: 0;
		left: 8%;
		content: "+";
		font-size: 25px;
		position: absolute;
	}
	overflow: hidden;
	position: relative;
	display: block;
	text-align: center;
	outline: 1px solid white;
	height: 3em;
	width: 40%;
	margin: 0px auto;
	cursor: pointer;
	transition: all 0.3s ease 0s;
	:hover {
		outline-color: darkblue;
		::before {
			opacity: 1;
		}
	}
	background-color: black;
`;

export const NameEvent = styled.p`
	width: max-content;
	cursor: pointer;
`;

export const SectionOptions = styled.div`
	margin: 0px 0px 20px;
`;
