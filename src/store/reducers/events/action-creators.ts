import { IEvent } from "./../../../models/event";
import { IRemoveEvent } from "./types";
import { EventActionEnum, ISelectedDay } from "./types";

export const EventsActionCreator = {
	SetSelectDay: (value: ISelectedDay | null) => ({
		type: EventActionEnum.SET_SELECT_DAY,
		payload: value,
	}),
	AddEvent: (event: IEvent) => ({
		type: EventActionEnum.ADD_EVENT,
		payload: event,
	}),
	RemoveEvent: (value: IRemoveEvent) => ({
		type: EventActionEnum.REMOVE_EVENT,
		payload: value,
	}),
	SetSelectEvent: (value: IEvent) => ({
		type: EventActionEnum.SET_SELECT_EVENT,
		payload: value,
	}),
	EditEvent: (value: IEvent) => ({
		type: EventActionEnum.EDIT_EVENT,
		payload: value,
	}),
};
