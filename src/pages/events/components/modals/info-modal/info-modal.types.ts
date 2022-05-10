import { Dispatch } from "react";
import { IEvent } from "../../../../../models/event";

export interface InfoModalProps {
	dispatch: Dispatch<any>;
	modalConfirm: boolean;
	handleDelete: (id:string) => void;
	handleEdit: (event:IEvent) => void;
}

export type InputsModes = "title" | "time" | "description";
