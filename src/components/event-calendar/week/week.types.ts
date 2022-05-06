import { TriggerEvent } from "react-contexify";
import { ISelectedDay } from "../../../store/reducers/events/types";
import { typeCalendar } from "../event-calendar.types";

export interface WeekProps {
  day: number;
  days: number[];
  year: number;
	month: number;
  typeCalendar: typeCalendar;
  displayMenu:(e: TriggerEvent, value: ISelectedDay)=>void
}
