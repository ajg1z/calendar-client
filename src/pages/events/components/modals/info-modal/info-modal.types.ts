import { columnType } from "./../../../events.types";
import { Dispatch } from "react";
import { IEvent } from "../../../../../models/event";

export interface InfoModalProps {
	dispatch: Dispatch<any>;
	modalConfirm: boolean;
	handleDelete: (id: string) => void;
	handleEdit: (event: IEvent) => void;
	columnType?: columnType;
}

export type InputsModes = "title" | "time" | "description";
