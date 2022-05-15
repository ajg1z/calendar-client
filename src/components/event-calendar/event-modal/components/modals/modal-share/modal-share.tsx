import React, { FC } from "react";
import { EventsActionCreator } from "../../../../../../store/reducers/events/action-creators";
import { EventModal } from "../../../event-modal";
import {
	Container,
	Input,
	Label,
	LineInput,
} from "../modal-add/modal-add.styled";
import { modalActionCreator } from "../../../../../../store/reducers/modal/action-creators";
import { Dispatch } from "redux";
import { useTypesSelector } from "../../../../../../hooks/useTypedSelector";

export const ModalShare: FC<{ dispatch: Dispatch<any> }> = ({ dispatch }) => {
	const closeModalShare = () => {
		dispatch(modalActionCreator.SetModalShare(false));
	};
	const { modalShare } = useTypesSelector((state) => state.modal);
	const actionModalShare = () => {};

	return (
		<EventModal
			isModal={modalShare}
			footer
			action={actionModalShare}
			close={closeModalShare}
			height={180}
			width={600}
			leftBttn="Share"
			rightBttn="Cancel"
			title="Share modal"
		>
			<Container>
				<LineInput>
					<Label>E-mail</Label>
					<Input />
				</LineInput>
			</Container>
		</EventModal>
	);
};
