import React, { FC } from "react";
import { EventsActionCreator } from "../../../../../../store/reducers/events/action-creators";
import { EventModal } from "../../../event-modal";
import {
	Container,
	Input,
	Label,
	LineInput,
	Textarea,
} from "../modal-add/modal-add.styled";
import { modalActionCreator } from "../../../../../../store/reducers/modal/action-creators";
import { useTypesSelector } from "../../../../../../hooks/useTypedSelector";

export const ModalEdit: FC<{ dispatch: any }> = ({ dispatch }) => {
	const actionModalEdit = () => {};
	const { modalEdit } = useTypesSelector((state) => state.modal);
	const closeModalEdit = () => {
		dispatch(modalActionCreator.SetModalEdit(false));
	};

	return (
		<EventModal
			isModal={modalEdit}
			footer
			action={actionModalEdit}
			close={closeModalEdit}
			height={320}
			width={600}
			leftBttn="Edit"
			rightBttn="Cancel"
			title="Edit event"
		>
			<Container>
				<LineInput>
					<Label>Name of event</Label>
					<Input />
				</LineInput>
				<LineInput>
					<Label>Description event</Label>
					<Input />
				</LineInput>
			</Container>
		</EventModal>
	);
};
