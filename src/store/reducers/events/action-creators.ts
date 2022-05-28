import { AppDispatch } from "./../../index";
import { EventService } from "../../../http/event.service";
import { IEvent, IEventUpdate } from "./../../../models/event";
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
	UpdateEvent:
		(id: string, event: IEventUpdate) => async (dispatch: AppDispatch) => {
			try {
				dispatch(EventsActionCreator.SetLoading(true));
				const updatedEvent = await EventService.updateEvent(id, event);
				dispatch(
					EventsActionCreator.EditEvent({
						id: updatedEvent._id,
						day: updatedEvent.day,
						description: updatedEvent.description,
						month: updatedEvent.month,
						time: updatedEvent.time,
						title: updatedEvent.title,
						typeEvent: updatedEvent.typeEvent,
						year: updatedEvent.year,
					})
				);
			} catch (e: any) {
				dispatch(EventsActionCreator.SetError(e));
			} finally {
				dispatch(EventsActionCreator.SetLoading(false));
			}
		},
	FetchEvent: (event: IEvent) => async (dispatch: AppDispatch) => {
		try {
			dispatch(EventsActionCreator.SetLoading(true));
			const newEvent = await EventService.addEvent(event);
			dispatch(
				EventsActionCreator.AddEvent({
					id: newEvent._id,
					day: newEvent.day,
					description: newEvent.description,
					month: newEvent.month,
					time: newEvent.time,
					typeEvent: newEvent.typeEvent,
					title: newEvent.title,
					year: newEvent.year,
				})
			);
		} catch (e: any) {
			dispatch(EventsActionCreator.SetError(e));
		} finally {
			dispatch(EventsActionCreator.SetLoading(false));
		}
	},
	FetchRemoveEvent:
		(id: string | string[]) => async (dispatch: AppDispatch) => {
			try {
				dispatch(EventsActionCreator.SetLoading(true));
				const isRemoved = await EventService.removeEvent(id);
				if (isRemoved) {
					dispatch(
						EventsActionCreator.RemoveEvent({
							id: isRemoved.map((id) => id._id),
							month: isRemoved[0].month,
							year: isRemoved[0].year,
						})
					);
				}
			} catch (e: any) {
				dispatch(EventsActionCreator.SetError(e));
			} finally {
				dispatch(EventsActionCreator.SetLoading(false));
			}
		},
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
	SetError: (value: any) => ({
		type: EventActionEnum.SET_ERROR,
		payload: value,
	}),
	SetLoading: (value: boolean) => ({
		type: EventActionEnum.SET_LOADING,
		payload: value,
	}),
	GetEvents: () => async (dispatch: AppDispatch) => {
		try {
			dispatch(EventsActionCreator.SetLoading(true));
			const events = await EventService.getEvents();
			events.forEach((e) =>
				dispatch(
					EventsActionCreator.AddEvent({
						day: e.day,
						description: e.description,
						month: e.month,
						time: e.time,
						id: e._id,
						title: e.title,
						typeEvent: e.typeEvent,
						year: e.year,
					})
				)
			);
		} catch (e) {
			dispatch(EventsActionCreator.SetError(e));
		} finally {
			dispatch(EventsActionCreator.SetLoading(false));
		}
	},
};
