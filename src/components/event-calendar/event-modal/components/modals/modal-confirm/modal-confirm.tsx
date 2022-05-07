import React, { FC } from "react";
import { useTypesSelector } from "../../../../../../hooks/useTypedSelector";
import { EventsActionCreator } from "../../../../../../store/reducers/events/action-creators";
import { EventModal } from "../../../event-modal";
import { IModalProps } from "../modal-add/modal-add.types";
import { Container, Label } from "./modal-confirm.styled";
import { modalActionCreator } from "../../../../../../store/reducers/modal/action-creators";
import { IModalConfirmProps } from "./modal-confirm.types";

export const ConfirmModal: FC<IModalConfirmProps> = ({
	dispatch,
	action,
	text,
	textAction,
	title,
}) => {
	const closeModalDelete = () => {
		dispatch(modalActionCreator.SetModalConfirm(false));
	};

	return (
		<EventModal
			action={action}
			close={closeModalDelete}
			height={140}
			width={600}
			leftBttn={textAction}
			rightBttn="Cancel"
			title={title}
			customFooter={() => {
				return;
			}}
		>
			<Container>
				<Label>{text}</Label>
			</Container>
		</EventModal>
	);
};
