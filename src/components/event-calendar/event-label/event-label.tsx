import React, { FC } from "react";
import styled from "styled-components";
import { useTypesSelector } from "../../../hooks/useTypedSelector";

const Box = styled.div<{ color: string }>`
	font-size: 20px;
	padding: 2px 5px;
	background-color: ${(props) => props.color};
`;

interface EventLabelProps {
	typeEvent: string;
	count: number;
}

export const EventLabel: FC<EventLabelProps> = ({ typeEvent, count }) => {
	const { colorIconsEvent } = useTypesSelector((state) => state.setting);
	return (
		<>
			{typeEvent === "holiday" ? (
				<Box color={colorIconsEvent.holiday}>
					H{count > 1 ? `(${count})` : ""}
				</Box>
			) : typeEvent === "weekend" ? (
				<Box color={colorIconsEvent.weekend}>W</Box>
			) : (
				<Box color={colorIconsEvent.myEvent}>
					E{count > 1 ? `(${count})` : ""}
				</Box>
			)}
		</>
	);
};
