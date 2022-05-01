import { IEvent } from "./../../models/event";
export interface IEventProps {
	// events: IEvent[]
}

export interface IEvents extends IEvent {
	count?: number;
}

export type typeCalendar = "standart" | "day" | "week";
export type direction = "prev" | "next";
