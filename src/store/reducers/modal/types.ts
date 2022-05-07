export interface ModalState {
  modalDelete: boolean;
  modalEdit: boolean;
  modalAdd: boolean;
  modalShare: boolean;
  modalInfo: boolean;
  modalConfirm: boolean;
}

export enum ModalActionEnum {
  SET_MODAL_DELETE = "SET_MODAL_DELETE",
  SET_MODAL_EDIT = "SET_MODAL_EDIT",
  SET_MODAL_ADD = "SET_MODAL_ADD",
  SET_MODAL_SHARE = "SET_MODAL_SHARE",
  SET_MODAL_INFO = "SET_MODAL_INFO",
  SET_MODAL_CONFIRM = "SET_MODAL_CONFIRM",
}
export interface SetModalDelete {
  type: ModalActionEnum.SET_MODAL_DELETE;
  payload: boolean;
}
export interface SetModalShare {
  type: ModalActionEnum.SET_MODAL_SHARE;
  payload: boolean;
}
export interface SetModalInfo {
  type: ModalActionEnum.SET_MODAL_INFO;
  payload: boolean;
}
export interface SetModalConfirm {
  type: ModalActionEnum.SET_MODAL_CONFIRM;
  payload: boolean;
}
export interface SetModalAdd {
  type: ModalActionEnum.SET_MODAL_ADD;
  payload: boolean;
}
export interface SetModalEdit {
  type: ModalActionEnum.SET_MODAL_EDIT;
  payload: boolean;
}

export type ModalActions =
  | SetModalAdd
  | SetModalDelete
  | SetModalConfirm
  | SetModalEdit
  | SetModalShare
  | SetModalInfo;
