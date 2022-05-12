import React, { FC } from "react";
import {
	Container,
	Input,
	Label,
	LineInput,
	Textarea,
} from "./modal-add.styled";
import { EventModal } from "../../../event-modal";
import { IModalAddProps } from "./modal-add.types";
import { modalActionCreator } from "../../../../../../store/reducers/modal/action-creators";
import { EventsActionCreator } from "../../../../../../store/reducers/events/action-creators";
import { useTypesSelector } from "../../../../../../hooks/useTypedSelector";
import { nanoid } from "nanoid";
import { InputMaskTime } from "../../../../../input-mask-time/input-time";
import { ConvertTime } from "../../../../../../utils/time";
import { InputMaskDate } from "../../../../../input-mask-date/input-date";
export const ModalAdd: FC<IModalAddProps> = ({ dispatch, typeEvent }) => {
	const [title, setTitle] = React.useState("");
	const [description, setDescription] = React.useState("");
	const { selectedDay: selected } = useTypesSelector((state) => state.event);
	const [time, setTime] = React.useState(selected?.time || "");

	const [date, setDate] = React.useState(() => {
		if (selected) {
			return `${selected!.year}-${ConvertTime(selected!.month)}-${ConvertTime(
				selected!.day
			)}`;
		} else return "";
	});

	const closeModalAdd = () => {
		dispatch(modalActionCreator.SetModalAdd(false));
	};

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
					typeEvent,
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
			height={490}
			width={600}
			leftBttn="OK"
			rightBttn="Cancel"
			title="Add event"
		>
			<Container>
				<LineInput>
					<Label>Название события</Label>
					<Input value={title} onChange={(e) => setTitle(e.target.value)} />
				</LineInput>
				<LineInput>
					<Label>Время события</Label>
					<InputMaskTime value={time} setValue={setTime} />
				</LineInput>
				<LineInput>
					<Label>Дата события</Label>
					<InputMaskDate setValue={setDate} value={date} />
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
