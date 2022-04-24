import { IError } from '../../../models/error';
import { IYear, IEvent } from '../../../models/event'

export interface EventsState {
    isLoading: boolean;
    events: IYear[],
    currentDay: number,
    currentYear: number;
    currentMonth: number;
    selected: ISelectedDay | null,
    errors: IError,
}

export interface ISelectedDay {
    day: number,
    month: number;
    year: number;
    events: IEvent[]
}

export enum EventActionEnum {
    ADD_EVENT = 'ADD_EVENT',
    REMOVE_EVENT = 'REMOVE_EVENT',
    EDIT_EVENT = 'EDIT_EVENT',
    SET_LOADING = 'SET_LOADING',
    SET_ERROR = 'SET_ERROR',
    SET_SELECTED = 'SET_SELECTED',
}

export interface SelectedDay {
    type: EventActionEnum.SET_SELECTED,
    payload: ISelectedDay
}

export interface Event {
    year:number;
    month:number;
    event:IEvent
}

export interface IRemoveEvent {
    id:string[];
    year:number;
    month:number
}

export interface AddEvent {
    type: EventActionEnum.ADD_EVENT,
    payload: Event
}

export interface RemoveEvent {
    type: EventActionEnum.REMOVE_EVENT,
    payload: IRemoveEvent
}
export interface EditEvent {
    type: EventActionEnum.EDIT_EVENT,
    payload: IEvent
}

export interface SetError {
    type: EventActionEnum.SET_ERROR
    payload: IError
}





export interface SetLoading {
    type: EventActionEnum.SET_LOADING
    payload: boolean
}


export type EventAction = AddEvent
    | RemoveEvent | EditEvent | SetError
    | SetLoading | SelectedDay

