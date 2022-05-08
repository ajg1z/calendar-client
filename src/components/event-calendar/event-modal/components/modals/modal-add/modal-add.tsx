import React, { FC } from "react";
import {
	Container,
	Input,
	Label,
	LineInput,
	Textarea,
} from "./modal-add.styled";
import { EventModal } from "../../../event-modal";
import { IModalProps } from "./modal-add.types";
import { modalActionCreator } from "../../../../../../store/reducers/modal/action-creators";
import { EventsActionCreator } from "../../../../../../store/reducers/events/action-creators";
import { useTypesSelector } from "../../../../../../hooks/useTypedSelector";
import { nanoid } from "nanoid";
import { InputMaskTime } from "../../../../../input-mask-time/input-time";
import { ConvertTime } from "../../../../../../utils/time";
export const ModalAdd: FC<IModalProps> = ({ dispatch }) => {
	const [title, setTitle] = React.useState("");
	const [description, setDescription] = React.useState("");
	const { selectedDay:selected } = useTypesSelector((state) => state.event);
	const [time, setTime] = React.useState(selected!.time || "");

	const closeModalAdd = () => {
		dispatch(modalActionCreator.SetModalAdd(false));
	};
	console.log(selected);
	const actionModalAdd = () => {
		dispatch(
			EventsActionCreator.AddEvent({
				month: selected!.month,
				year: selected!.year,
				event: {
					time: time,
					day: selected!.day,
					id: nanoid(5),
					month: selected!.month,
					year: selected!.year,
					typeEvent: "myEvent",
					description,
					title,
				},
			})
		);
		closeModalAdd();
	};
	return (
		<EventModal
			footer
			action={actionModalAdd}
			close={closeModalAdd}
			height={450}
			width={600}
			leftBttn="OK"
			rightBttn="Cancel"
			title="Test modal"
		>
			<Container>
				<LineInput>
					<Label>
						{ConvertTime(selected!.day)}:{ConvertTime(selected!.month)}:
						{selected?.year}
					</Label>
				</LineInput>
				<LineInput>
					<Label>Название события</Label>
					<Input value={title} onChange={(e) => setTitle(e.target.value)} />
				</LineInput>
				<LineInput>
					<Label>Время события</Label>
					<InputMaskTime  value={time} setValue={setTime} />
				</LineInput>
				<LineInput>
					<Label>Описание событие</Label>
					<Textarea
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</LineInput>
			</Container>
		</EventModal>
	);
};
