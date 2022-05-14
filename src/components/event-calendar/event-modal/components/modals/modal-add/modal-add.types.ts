import { Dispatch } from "react";
import { IEvent, typeEvent } from "../../../../../../models/event";

export interface IModalAddProps {
	dispatch: Dispatch<any>;
	typeEvent: typeEvent;
	handleAdd?: (event: IEvent) => void;
}
