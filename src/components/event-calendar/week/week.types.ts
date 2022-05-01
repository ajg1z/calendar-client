import { typeCalendar } from "../event-calendar.types";

export interface WeekProps {
  day: number;
  days: number[];
  year: number;
	month: number;
  typeCalendar: typeCalendar;
}
