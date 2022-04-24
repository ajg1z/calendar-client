import { IEvents } from "../event-calendar.types";

export const EventSome = (arr: IEvents[],
     type: 'myEvent' | 'holiday' | 'weekend',
     elem: IEvents) => {
    if (arr.find(i => i.typeEvent === type)) {
        arr.forEach(i => {
            if (!i.count) return
            if (i.typeEvent === type) i.count += 1;
        })
    } else {
        arr.push({ ...elem, count: 1 })
    }
}