import styled from "styled-components";
import { flexCenter } from "../../../styled.common";

export const Container = styled.div`
	${flexCenter};
	width: 100%;
	flex-wrap: wrap;
	padding: 0px 100px;
`;

export const EventsLabel = styled.div`
	position: absolute;
	top: 2px;
	right: 5px;
`;

export const ProgressDay = styled.div<{ progress: number }>`
	position: absolute;
	width: 100%;
	top: 0;
	height: ${({ progress }) => progress}%;
	background-color: rgb(71, 89, 226, 0.5);
`;

export const Day = styled.div<{ current: boolean }>`
	width: 180px;
	position: relative;
	${flexCenter}
	height:100px;
	outline: 1px solid white;
	${(props) =>
		props.current &&
		`
		outline-width:1px;
		outline-color:red;
      font-weight:500;
    `};
`;
