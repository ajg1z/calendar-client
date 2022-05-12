import { Dispatch } from "react";
import { typeEvent } from "../../../../../../models/event";

export interface IModalAddProps {
	dispatch: Dispatch<any>;
	typeEvent: typeEvent;
}
