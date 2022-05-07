import { IYear } from "./../../../models/event";
import { IError } from "./../../../models/error";
import { EventsState, EventActionEnum, EventAction } from "./types";

const initialState: EventsState = {
	events: [],
	isLoading: false,
	selectedDay: null,
	selectedEvent: null,
	errors: {} as IError,
};

export default function eventsReducer(
	state = initialState,
	action: EventAction
): EventsState {
	switch (action.type) {
		case EventActionEnum.ADD_EVENT: {
			let newEvent: IYear[] = state.events;
			const isYear = state.events.find((y) => y.year === action.payload.year);
			if (isYear) {
				const isMonth = isYear.month.find(
					(m) => m.month === action.payload.month
				);
				if (isMonth) {
					newEvent
						.find((y) => y.year === action.payload.year)!
						.month.find((m) => m.month === action.payload.month)!
						.events.push(action.payload.event);
				} else {
					newEvent
						.find((y) => y.year === action.payload.year)
						?.month.push({
							month: action.payload.month,
							events: [action.payload.event],
						});
				}
			} else {
				newEvent.push({
					month: [
						{ month: action.payload.month, events: [action.payload.event] },
					],
					year: action.payload.year,
				});
			}

			return {
				...state,
				events: newEvent,
			};
		}
		case EventActionEnum.REMOVE_EVENT: {
			const removed = state.events.map((el) => {
				if (el.year === action.payload.year) {
					el.month.forEach((m) => {
						if (m.month === action.payload.month) {
							m.events = m.events.filter((ev) => {
								let isSave = true;
								if (typeof action.payload.id === "string") {
									if (action.payload.id === ev.id) isSave = false;
								} else {
									action.payload.id.forEach((id) => {
										if (id === ev.id) isSave = false;
									});
								}
								return isSave;
							});
						}
					});
				}
				return el;
			});
			return {
				...state,
				events: removed,
			};
		}

		case EventActionEnum.EDIT_EVENT:
			const edited = state.events.map((el) => {
				if (el.year === action.payload.year) {
					el.month.forEach((m) => {
						if (m.month === action.payload.month) {
							m.events.forEach((event) => {
								if (event.id === action.payload.id) {
									event = action.payload;
								}
							});
						}
					});
				}
				return el;
			});
			return {
				...state,
				events: edited,
			};

		case EventActionEnum.SET_ERROR:
			return {
				...state,
				errors: action.payload,
			};
		case EventActionEnum.SET_SELECT_DAY:
			return {
				...state,
				selectedDay: action.payload,
			};

		case EventActionEnum.SET_SELECT_EVENT:
			return {
				...state,
				selectedEvent: action.payload,
			};
		default:
			return state;
	}
}
