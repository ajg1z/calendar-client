import React from "react";
import { Container, Day, EventsLabel, ProgressDay, Line } from "./days.styled";
import { IDaysProps } from "./days.types";
import { EventLabel } from "../event-label/event-label";
import { IEvent } from "../../../models/event";
import { IEvents } from "../event-calendar.types";
import { useTypesSelector } from "../../../hooks/useTypedSelector";
import { defineEvents } from "../../../utils/event";
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
	const daysOfMonth = React.useMemo(() => {
		return new Array(days.length / 7)
			.fill(1)
			.map((el, index) =>
				new Array(7).fill(1).map((d, ind) => days[ind + 7 * index])
			);
	}, [days]);
	const transition2 = useTransition(daysOfMonth, props);
	const { events } = useTypesSelector((state) => state.event);
	const { includeAlignEvent, includeAlignHolydaysEvent } = useTypesSelector(
		(state) => state.setting
	);
	return (
		<Container>
			{transition2((style, item, config, index) => {
				return (
					<Line>
						{item.map((d, ind) => {
							const [displayEvents, allEventsDay] = defineEvents(
								{ day: d.day, month: d.month },
								month,
								year,
								ind + 7 * index,
								events,
								includeAlignEvent,
								includeAlignHolydaysEvent
							);

							return (
								<Day
									style={style}
									onContextMenu={(e) =>
										displayMenu(e, {
											day: d.day,
											month:
												d.month === "next"
													? month + 1
													: d.month === "prev"
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
										today === d.day &&
										d.month === "current"
									}
								>
									{currentYear === year &&
										month === currentMonth &&
										d.month === "current" &&
										today === d.day && (
											<ProgressDay progress={new Date().getHours() * 4} />
										)}
									{d.day}
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
					</Line>
				);
			})}
		</Container>
	);
};
