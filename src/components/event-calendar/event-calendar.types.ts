import { IEvent } from './../../models/event';
export interface IEventProps {
    // events: IEvent[]
}

export interface IEvents extends IEvent {
    count?: number;
}

