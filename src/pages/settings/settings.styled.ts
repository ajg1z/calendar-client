import { flexCenter, fullPage } from "./../../styled.common";
import styled from "styled-components";
import { animated } from "react-spring";

export const Container = styled.div`
	${fullPage};
	height: 100vh;
`;

export const Left = styled.div`
	height: 100%;
	flex: 20%;
	padding: 10px;
	:hover {
		outline: 2px solid ${(props) => props.theme.colors.base};
	}
`;

export const Section = styled.div`
	text-align: center;
	margin: 20px auto;
	padding: 10px 0px;
	width: 150px;
	font-size: 20px;
	border-radius: 5px;
	cursor: pointer;
	transition: all 0.3s ease 0s;
	:hover {
		background-color: #a4a4ac;
		transform: scale(1.1);
		box-shadow: 2px 2px 15px #a4a4ac;
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
		outline: 2px solid ${(props) => props.theme.colors.base};
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
	outline: 1px solid ${(props) => props.theme.colors.base};
	justify-content: space-between;
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
	color: ${(props) => props.theme.colors.font};
	overflow: hidden;
	position: relative;
	display: block;
	text-align: center;
	outline: 1px solid ${(props) => props.theme.colors.base};
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
	background-color: ${(props) => props.theme.colors.background}; ;
`;

export const NameEvent = styled.p`
	width: max-content;
	cursor: pointer;
`;

export const SectionOptions = styled(animated.div)`
	margin: 0px 0px 20px;
`;
