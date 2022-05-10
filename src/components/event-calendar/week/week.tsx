import React from "react";
import { useTypesSelector } from "../../../hooks/useTypedSelector";
import { Day } from "../days/days.styled";
import { Container, Img } from "./week.styled";
import { WeekProps } from "./week.types";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { TriggerEvent } from "react-contexify";
import {  defineMonth,defineEvents } from "../../../utils/event";

export const Week: React.FC<WeekProps> = ({
	day,
	days,
	typeCalendar,
	month,
	year,
	displayMenu,
}) => {
	const { today, currentYear, currentMonth } = useTypesSelector(
		(state) => state.date
	);
	const { events } = useTypesSelector((state) => state.event);
	const defineCurrentDay = (d: number) => {
		if (typeCalendar === "day") {
			if (d === day) return true;
		} else {
			if (d === today && month === currentMonth && currentYear === year)
				return true;
		}
		return false;
	};

	const handleSelectDay = (d: number, e: TriggerEvent, i: number) => {
		e.preventDefault();

		const [displayEvents, allEventsDay] = defineEvents(
			{ day: d, month: "current" },
			month,
			year,
			i,
			events
		);
		displayMenu(e, {
			day: d,
			events: allEventsDay,
			month: defineMonth(d, year, month, days),
			year,
			time: "",
		});
	};
	return (
		<Container>
			<Img>
				<AccessTimeIcon />
			</Img>
			{days.map((d, i) => {
				return (
					<Day
						onContextMenu={(e) => handleSelectDay(d, e, i)}
						key={d}
						current={defineCurrentDay(d)}
					>
						{d}
					</Day>
				);
			})}
		</Container>
	);
};
