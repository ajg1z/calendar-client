import { IError } from "../../../models/error";
import { IYear, IEvent } from "../../../models/event";

export interface EventsState {
	isLoading: boolean;
	events: IYear[];
	selectedDay: ISelectedDay | null;
	selectedEvent: IEvent | null;
	errors: IError;
}

export interface ISelectedDay {
	day: number;
	month: number;
	year: number;
	time: null | string;
	events: IEvent[];
}

export enum EventActionEnum {
	ADD_EVENT = "ADD_EVENT",
	REMOVE_EVENT = "REMOVE_EVENT",
	EDIT_EVENT = "EDIT_EVENT",
	SET_LOADING = "SET_LOADING",
	SET_ERROR = "SET_ERROR",
	SET_SELECT_DAY = "SET_SELECT_DAY",
	SET_SELECT_EVENT = "SET_SELECT_EVENT",
}

export interface SelectedDay {
	type: EventActionEnum.SET_SELECT_DAY;
	payload: ISelectedDay;
}

export interface SelectedEvent {
	type: EventActionEnum.SET_SELECT_EVENT;
	payload: IEvent;
}

export interface IRemoveEvent {
	id: string[] | string;
	year: number;
	month: number;
}

export interface AddEvent {
	type: EventActionEnum.ADD_EVENT;
	payload: IEvent;
}

export interface RemoveEvent {
	type: EventActionEnum.REMOVE_EVENT;
	payload: IRemoveEvent;
}

export interface EditEvent {
	type: EventActionEnum.EDIT_EVENT;
	payload: IEvent;
}

export interface SetError {
	type: EventActionEnum.SET_ERROR;
	payload: IError;
}

export interface SetLoading {
	type: EventActionEnum.SET_LOADING;
	payload: boolean;
}

export type EventAction =
	| AddEvent
	| RemoveEvent
	| EditEvent
	| SetError
	| SetLoading
	| SelectedDay
	| SelectedEvent;
