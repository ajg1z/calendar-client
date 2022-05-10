export interface IEvent {
	title: string;
	description: string;
	typeEvent: typeEvent;
	year: null | number;
	month: number;
	day: number;
	id: string;
	time: string;
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
