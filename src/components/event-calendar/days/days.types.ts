import { TriggerEvent } from "react-contexify";
import { ISelectedDay } from "../../../store/reducers/events/types";
import { direction } from "../event-calendar.types";

export interface IDaysProps {
  days: IDays[];
  year: number;
  month: number;
  displayMenu(e: TriggerEvent, value: ISelectedDay): void;
  direction:direction
}

export interface IDays {
  day: number;
  month: string;
}
