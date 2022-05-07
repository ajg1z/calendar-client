import { ISelects } from "../modal-delete/modal-delete.types";
import { IModalProps } from "../modal-add/modal-add.types";
import { Dispatch } from "react";

export interface IModalConfirmProps extends IModalProps {
	dispatch: Dispatch<any>;
	text: string;
	action: any;
	textAction: any;
	title: string;
}
