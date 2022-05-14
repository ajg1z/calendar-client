import { IYear } from "./../../../models/event";
import { IError } from "./../../../models/error";
import { EventsState, EventActionEnum, EventAction } from "./types";

const initialState: EventsState = {
	events: [
		{
			year: 2022,
			month: [
				{
					month: 8,
					events: [
						{
							day: 23,
							description: "blabal",
							id: "dsggs",
							month: 8,
							time: "22:00",
							title: "this fucking",
							typeEvent: "weekend",
							year: 2022,
						},
						{
							day: 25,
							description: "year dadasd",
							id: "sdaasd",
							month: 8,
							time: "22:00",
							title: "Holidays",
							typeEvent: "holiday",
							year: 2022,
						},
						{
							day: 13,
							description: "blabal",
							id: "fsdfdsf",
							month: 8,
							time: "22:00",
							title: "test 3",
							typeEvent: "holiday",
							year: 2022,
						},
						{
							day: 1,
							description: "test 2",
							id: "sfsdfsdfs",
							month: 8,
							time: "22:00",
							title: "Yup 00",
							typeEvent: "holiday",
							year: 2022,
						},
					],
				},
			],
		},
	],
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
						.events.push(action.payload);
				} else {
					newEvent
						.find((y) => y.year === action.payload.year)
						?.month.push({
							month: action.payload.month,
							events: [action.payload],
						});
				}
			} else {
				newEvent.push({
					month: [
						{
							month: action.payload.month,
							events: [action.payload],
						},
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
			let edited: IYear[];
			debugger;
			if (state.selectedEvent!.year === action.payload.year) {
				if (state.selectedEvent!.month === action.payload.month) {
					edited = state.events.map((el) => {
						if (el.year === action.payload.year) {
							el.month = el.month.map((m) => {
								if (m.month === action.payload.month) {
									m.events = m.events.map((event) => {
										if (event.id === action.payload.id) {
											event = action.payload;
										}
										return event;
									});
								}
								return m;
							});
						}
						return el;
					});
				} else {
					edited = state.events.map((el) => {
						if (el.year === action.payload.year) {
							el.month.push({
								month: action.payload.month,
								events: [action.payload],
							});
						}
						if (el.year === state.selectedEvent!.year) {
							el.month = el.month.map((m) => {
								if (m.month === state.selectedEvent!.month) {
									m.events = m.events.filter((event) => {
										if (event.id === state.selectedEvent!.id) return false;
									});
								}
								return m;
							});
						}
						return el;
					});
				}
			} else {
				edited = state.events.map((el) => {
					if (el.year === state.selectedEvent!.year) {
						el.month = el.month.map((m) => {
							if (m.month === state.selectedEvent!.month) {
								m.events = m.events.filter((event) => {
									if (event.id === state.selectedEvent!.id) return false;
									return true;
								});
							}
							return m;
						});
					}
					return el;
				});
				edited.push({
					year: action.payload.year,
					month: [{ month: action.payload.month, events: [action.payload] }],
				});
			}
			return {
				...state,
				events: edited as IYear[],
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
