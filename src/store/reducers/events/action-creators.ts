import { IEvent } from "./../../../models/event";
import { Event, IRemoveEvent } from "./types";
import { EventActionEnum, ISelectedDay } from "./types";

export const EventsActionCreator = {
  SetSelected: (value: ISelectedDay | null) => ({
    type: EventActionEnum.SET_SELECTED,
    payload: value,
  }),
  AddEvent: (event: Event) => ({
    type: EventActionEnum.ADD_EVENT,
    payload: event,
  }),
  RemoveEvent: (value: IRemoveEvent) => ({
    type: EventActionEnum.REMOVE_EVENT,
    payload: value,
  }),
};
