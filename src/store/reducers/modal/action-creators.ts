import { ModalActionEnum } from "./types";
export const modalActionCreator = {
  SetModalDelete: (value: boolean) => ({
    type: ModalActionEnum.SET_MODAL_DELETE,
    payload: value,
  }),
  SetModalEdit: (value: boolean) => ({
    type: ModalActionEnum.SET_MODAL_EDIT,
    payload: value,
  }),
  SetModalAdd: (value: boolean) => ({
    type: ModalActionEnum.SET_MODAL_ADD,
    payload: value,
  }),
  SetModalShare: (value: boolean) => ({
    type: ModalActionEnum.SET_MODAL_SHARE,
    payload: value,
  }),
  SetModalInfo: (value: boolean) => ({
    type: ModalActionEnum.SET_MODAL_INFO,
    payload: value,
  }),
  SetModalDeleteConfirm: (value: boolean) => ({
    type: ModalActionEnum.SET_MODAL_DELETE_CONFIRM,
    payload: value,
  }),
};
