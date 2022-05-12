import { ISelects } from "../modal-delete/modal-delete.types";
import { Dispatch } from "react";

export interface IModalConfirmProps  {
	dispatch: Dispatch<any>;
	text: string;
	action: any;
	textAction: any;
	title: string;
}
