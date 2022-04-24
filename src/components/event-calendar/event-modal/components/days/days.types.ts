import { TriggerEvent } from "react-contexify";
import { ISelectedDay } from "../../../../../store/reducers/events/types";

export interface IDaysProps {
    days: number[],
    year: number;
    month: number;
    displayMenu(e: TriggerEvent, value: ISelectedDay): void
}