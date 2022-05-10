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
export const Days: React.FC<IDaysProps> = ({
	days,
	month,
	year,
	displayMenu,
}) => {
	const { today, currentYear, currentMonth } = useTypesSelector(
		(state) => state.date
	);
	const { events } = useTypesSelector((state) => state.event);

	return (
		<Container>
			{days.map((day, i) => {
				
				const [displayEvents, allEventsDay] = defineEvents(
					{ day: day.day, month: day.month },
					month,
					year,
					i,
					events
				);
				return (
					<Day
						onContextMenu={(e) =>
							displayMenu(e, {
								day: day.day,
								month:
									day.month === "next"
										? month + 1
										: day.month === "prev"
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
							today === day.day &&
							day.month === "current"
						}
					>
						{currentYear === year &&
							month === currentMonth &&
							day.month === "current" &&
							today === day.day && (
								<ProgressDay progress={new Date().getHours() * 4} />
							)}
						{day.day}
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
