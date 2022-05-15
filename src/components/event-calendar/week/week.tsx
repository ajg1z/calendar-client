import React from "react";
import { useTypesSelector } from "../../../hooks/useTypedSelector";
import { Day } from "../days/days.styled";
import { Container, Img } from "./week.styled";
import { WeekProps } from "./week.types";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { TriggerEvent } from "react-contexify";
import { defineMonth, defineEvents } from "../../../utils/event";
import { useTransition } from "react-spring";

export const Week: React.FC<WeekProps> = ({
	day,
	days,
	typeCalendar,
	month,
	year,
	displayMenu,
	direction,
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

	const props = React.useMemo(() => {
		const obj = {
			from: {
				opacity: 0,
				transform:
					direction === "prev" ? "translateX(-100px)" : "translateX(100px)",
			},
			enter: { opacity: 1, transform: "translateX(0px)" },
			leave: {
				opacity: 0,
				transform:
					direction === "prev" ? "translateX(100px)" : "translateX(-100px)",
			},
			config: { duration: 200 },
			exitBeforeEnter: true,
		};
		return obj;
	}, [direction]);

	const transition = useTransition(days, props);
	return (
		<Container>
			<Img>
				<AccessTimeIcon />
			</Img>
			{transition((style, item, config, index) => {
				return (
					<Day
						style={style}
						onContextMenu={(e) => handleSelectDay(item, e, index)}
						key={item}
						current={defineCurrentDay(item)}
					>
						{item}
					</Day>
				);
			})}
		</Container>
	);
};
