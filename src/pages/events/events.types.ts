import { IEvent } from "./../../models/event";
export interface EventsProps {}

export interface IEventOrder extends IEvent {
	order: number;
}
