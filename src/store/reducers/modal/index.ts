import { ModalState, ModalActionEnum, ModalActions } from "./types";
const initialState: ModalState = {
	modalDelete: false,
	modalAdd: false,
	modalEdit: false,
	modalInfo: false,
	modalShare: false,
	modalConfirm: false,
	isModal: false,
};

export default function modalReducer(
	state = initialState,
	action: ModalActions
): ModalState {
	switch (action.type) {
		case ModalActionEnum.SET_MODAL_ADD:
			return {
				...state,
				modalAdd: action.payload,
				isModal: action.payload,
			};
		case ModalActionEnum.SET_MODAL_DELETE:
			return {
				...state,
				modalDelete: action.payload,
        isModal: action.payload,
			};
		case ModalActionEnum.SET_MODAL_CONFIRM:
			return {
				...state,
				modalConfirm: action.payload,
                isModal: action.payload,
		 	};
		case ModalActionEnum.SET_MODAL_EDIT:
			return {
				...state,
				modalEdit: action.payload,
        isModal: action.payload,
			};
		case ModalActionEnum.SET_MODAL_SHARE:
			return {
				...state,
				modalShare: action.payload,
                isModal: action.payload,
			};
		case ModalActionEnum.SET_MODAL_INFO:
			return {
				...state,
				modalInfo: action.payload,
        isModal: action.payload,
			};
		default:
			return state;
	}
}
