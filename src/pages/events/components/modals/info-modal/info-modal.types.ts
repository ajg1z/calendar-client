import { Dispatch } from "react";

export interface InfoModalProps {
	dispatch: Dispatch<any>;
	modalConfirm: boolean;
}

export type InputsModes = "title" | "time" | "description";
