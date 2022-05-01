import { ISelects } from "./../modal-delete/modal-delete.types";
import { IModalProps } from "../modal-add/modal-add.types";

export interface IModalDeleteConfirmProps extends IModalProps {
  selects: string[];
}
