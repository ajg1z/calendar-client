import React from "react";
import { Container, Day, EventsLabel, ProgressDay } from "./days.styled";
import { IDaysProps } from "./days.types";
import { EventLabel } from "../event-label/event-label";
import { IEvent } from "../../../models/event";
import { IEvents } from "../event-calendar.types";
import { useTypesSelector } from "../../../hooks/useTypedSelector";
import { defineEvents, EventSome } from "../../../utils/event";
import { weekendDays } from "../../../const/calendar";
import { nanoid } from "nanoid";
import { useTransition, useSprings } from "react-spring";
export const Days: React.FC<IDaysProps> = ({
	days,
	month,
	year,
	direction,
	displayMenu,
}) => {
	const { today, currentYear, currentMonth } = useTypesSelector(
		(state) => state.date
	);
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
	}, [month, year]);

	const transition = useTransition(days, props);
	const { events } = useTypesSelector((state) => state.event);
	return (
		<Container>
			{transition((style, item, config, index) => {
				const [displayEvents, allEventsDay] = defineEvents(
					{ day: item.day, month: item.month },
					month,
					year,
					index,
					events
				);
				return (
					<Day
						style={style}
						onContextMenu={(e) =>
							displayMenu(e, {
								day: item.day,
								month:
									item.month === "next"
										? month + 1
										: item.month === "prev"
										? month - 1
										: month,
								year,
								time: null,
								events: allEventsDay,
							})
						}
						current={
							currentYear === year &&
							month === currentMonth &&
							today === item.day &&
							item.month === "current"
						}
					>
						{currentYear === year &&
							month === currentMonth &&
							item.month === "current" &&
							today === item.day && (
								<ProgressDay progress={new Date().getHours() * 4} />
							)}
						{item.day}
						<EventsLabel>
							{displayEvents.map((el) => {
								return (
									<EventLabel
										key={el.id}
										count={el.count ? el.count : 1}
										typeEvent={el.typeEvent}
									/>
								);
							})}
						</EventsLabel>
					</Day>
				);
			})}
		</Container>
	);
};
