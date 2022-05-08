import { useTypesSelector } from "../hooks/useTypedSelector";
import { IEvents } from "../components/event-calendar/event-calendar.types";
import { IDays } from "../components/event-calendar/days/days.types";
import { nanoid } from "nanoid";
import { weekendDays } from "../const/calendar";
import { IEvent, IYear } from "../models/event";
import { EventsState } from "../store/reducers/events/types";

export const EventSome = (
	arr: IEvents[],
	type: "myEvent" | "holiday" | "weekend",
	elem: IEvents
) => {
	if (arr.find((i) => i.typeEvent === type)) {
		arr.forEach((i) => {
			if (!i.count) return;
			if (i.typeEvent === type) i.count += 1;
		});
	} else {
		arr.push({ ...elem, count: 1 });
	}
};

export const DefineEvents = (
	day: IDays,
	month: number,
	year: number,
	i: number,
	events: IYear[]
): [IEvents[], IEvent[]] => {
	// debugger;
	const displayEvents: IEvents[] = [];
	const allEventsDay: IEvent[] = [];
	let appropriateYear = events.find((event) => event.year === year);

	if (weekendDays.includes(i + 1)) {
		displayEvents.push({
			day: day.day,
			description: "weekend",
			id: nanoid(5),
			month:
				day.month === "prev"
					? month - 1
					: day.month === "next"
					? month + 1
					: month,
			title: "weekend",
			typeEvent: "weekend",
			year,
			time: "00:00",
		});
	}
	if (appropriateYear) {
		let appropriateMonth = appropriateYear.month.find(
			(d) =>
				d.month ===
				(day.month === "prev"
					? month - 1
					: day.month === "next"
					? month + 1
					: month)
		);
		if (appropriateMonth) {
			appropriateMonth.events.forEach((event) => {
				if (event.day === day.day) {
					if (event.typeEvent === "holiday" || event.typeEvent === "myEvent") {
						EventSome(displayEvents, event.typeEvent, event);
					} else {
						displayEvents.push(event);
					}
					allEventsDay.push(event);
				}
			});
		}
	}

	return [displayEvents, allEventsDay];
};

export const defineMonth = (
	selectedDay: number,
	year: number,
	month: number,
	weekDays: number[]
) => {
	const index = weekDays.indexOf(selectedDay);
	if (index > 3) {
		return new Date(year, month, weekDays[3] + (index - 3)).getMonth();
	} else {
		return new Date(year, month, weekDays[3] - (3 - index)).getMonth();
	}
};

export const defineYear = (
	year: number,
	month: number,
	weekDays: number[],
	selectedDay: number
) => {
	const index = weekDays.indexOf(selectedDay);
	if (index > 3 && month === 11 && selectedDay < 10) {
		return year + 1;
	}
	if (index < 3 && month === 0 && selectedDay > 20) {
		return year - 1;
	}
	return year
};
