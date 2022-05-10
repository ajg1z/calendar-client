import { flexCenter } from "./../../styled.common";
import styled from "styled-components";
import { Day } from "./days/days.styled";

export const Container = styled.div`
	width: 100%;
	padding: 0px 100px;
	position: relative;
	color: ${({ theme }) => theme.colors.base};
	background-color: ${({ theme }) => theme.colors.base}; ;
`;

export const Switch = styled.div<{
	top: number | string;
	left?: number | string;
	right?: number | string;
}>`
	position: fixed;
	${flexCenter};
	transition: all 0.3s ease 0s;
	top: ${({ top }) => top};
	right: ${({ right }) => right};
	width: 60px;
	height: 40px;
	cursor: pointer;
	left: ${({ left }) => left};
`;

export const SwitchText = styled.p`
	user-select: none;
	position: absolute;
	z-index: 2;
	top: 50%;
	transition: all 0.3s ease 0s;
	${flexCenter};
	width: 100px;
	height: 100px;
	color: black;
	opacity: 0;
	left: 50%;
	transform: translate(-50%, -50%);
	:hover {
		opacity: 1;
		background-color: white;
		border-radius: 50%;
	}
`;

export const Top = styled.div`
	${flexCenter}
	height: 80px;
	width: 100%;
	gap: 0px 20px;
	justify-content: space-between;
	margin: 0px 0px 20px 0px;
`;

export const Select = styled.select`
	border: 1px solid white;
	outline: none;
	width: 50px;
	padding: 10px;
	background-color: ${({ theme }) => theme.colors.base};
`;

export const WeekDays = styled.div`
	${flexCenter};
	padding: 0px 0px 0px 145px;
	justify-content: stretch;
`;

export const EventsLabel = styled.div`
	position: absolute;
	top: 2px;
	right: 5px;
`;

export const Active = styled.div`
	display: flex;
	flex: 20%;
	gap: 0px 20px;
	justify-content: space-between;
`;
export const SwitchType = styled.button<{ active: boolean }>`
	height: 40px;
	background-color: black;
	cursor: pointer;
	outline: none;
	border: 1px solid white;
	width: 120px;
	/* margin:0px 20px 0px 0px; */
	${({ active }) => active && `border-color:gold`}
`;

export const Left = styled.div`
	flex: 50%;
`;

export const WeekDay = styled.div<{ current: boolean }>`
	width: 180px;
	position: relative;
	${flexCenter}
	height:100px;
	border: 1px solid white;
	${(props) =>
		props.current &&
		`
       background-color:blue;
       `};
`;

export const Body = styled.div<{ typeWeek: boolean }>`
	${flexCenter};
	width: 100%;
	justify-content: stretch;
	flex-wrap: wrap;
	padding: 0px 0px 0px 45px;
	${({ typeWeek }) => typeWeek && `padding: 0px 100px;`}
`;

export const Hour = styled.div`
	width: 100px;
	height: 100px;
	border: 1px solid white;
	${flexCenter};
`;

export const Label = styled.p`
	font-size: 25px;
	padding: 10px 10px 0px;
	line-height: 1;
	margin: 0;
`;

export const Cell = styled(Day)`
	transition: all 0.3s linear;
	font-size: 20px;
	cursor: pointer;
	&:hover {
		background-color: #fff;
		color: black;
	}
`;

export const DayCell = styled.div`
cursor: pointer;
	transition: all 0.3s linear;
&:hover{
  background-color: #fff;
		color: black;
}
	height: 100px;
	/* flex: 100%; */
	width: 1260px;
	border: 1px solid white;
	${flexCenter};
`;

export const Line = styled.div`
	flex: 100%;
	${flexCenter};
	justify-content: flex-start;
`;
