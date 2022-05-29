import { EventResponse } from "./response/event-response";

export interface IEvent {
	title: string;
	description: string;
	typeEvent: typeEvent;
	year: number;
	month: number;
	day: number;
	id: string;
	time: string;
	email: null | string;
}

export interface IEventUpdate {
	title?: string;
	description?: string;
	year?: number;
	month?: number;
	day?: number;
	time?: string;
}

export type typeEvent = "holiday" | "weekend" | "myEvent";

export interface IYear {
	year: number;
	month: IMonth[];
}

export interface IMonth {
	month: number;
	events: IEvent[];
}

export interface ISentSharedEvents {
	receiver: string;
	events: EventResponse[];
}

export interface IReceiveSharedEvents {
	sender: string;
	events: EventResponse[];
}
