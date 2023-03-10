import React, { FC } from "react";
import { useTypesSelector } from "../../../../../../hooks/useTypedSelector";
import { EventsActionCreator } from "../../../../../../store/reducers/events/action-creators";
import { EventModal } from "../../../event-modal";
import { Container } from "./modal-confirm.styled";
import { modalActionCreator } from "../../../../../../store/reducers/modal/action-creators";
import { IModalConfirmProps } from "./modal-confirm.types";
import { Label } from "../modal-add/modal-add.styled";

export const ConfirmModal: FC<IModalConfirmProps> = ({
	dispatch,
	action,
	text,
	textAction,
	title,
}) => {
	const { modalConfirm } = useTypesSelector((state) => state.modal);
	const closeModalDelete = () => {
		dispatch(modalActionCreator.SetModalConfirm(false));
	};

	return (
		<EventModal
			isModal={modalConfirm}
			action={action}
			close={closeModalDelete}
			height={200}
			width={600}
			leftBttn={textAction}
			rightBttn="Cancel"
			title={title}
			footer
		>
			<Container>
				<Label>{text}</Label>
			</Container>
		</EventModal>
	);
};
