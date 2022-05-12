import { Dispatch } from "redux";
import { ISelectedDay } from ".././../../../../../store/reducers/events/types";

export interface IModalDeleteProps {
	dispatch: Dispatch<any>;
	selected: ISelectedDay | null;
}

export interface ISelects {
	value: string;
	title: string;
}
