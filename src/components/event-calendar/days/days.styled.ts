import styled from "styled-components";
import { flexCenter } from "../../../styled.common";

export const Container = styled.div`
	${flexCenter};
	width: 100%;
	justify-content: flex-end;
	flex-wrap: wrap;
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
	border: 1px solid white;
	${(props) =>
		props.current &&
		`
     border-width:2px;
      border-color:red;
      font-weight:500;
    `};
`;
