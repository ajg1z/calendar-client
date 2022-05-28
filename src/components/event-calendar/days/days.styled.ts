import { animated } from "react-spring";
import styled from "styled-components";
import { flexCenter } from "../../../styled.common";

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const EventsLabel = styled.div`
	position: absolute;
	top: 2px;
	right: 5px;
`;

export const Line = styled.div`
	display: flex;
`;

export const ProgressDay = styled.div<{ progress: number }>`
	position: absolute;
	width: 100%;
	transition: height 5s ease 0s;
	top: 0;
	height: ${({ progress }) => progress}%;
	background-color: rgb(71, 89, 226, 0.5);
`;

export const Day = styled(animated.div)<{ current: boolean; }>`
	width: 180px;
	position: relative;
	${flexCenter}
	height:100px;
	outline: 1px solid ${(props) => props.theme.colors.base};
	${(props) =>
		props.current &&
		`
		outline-width:1px;
		outline-color:red;
      font-weight:500;
    `};
`;
