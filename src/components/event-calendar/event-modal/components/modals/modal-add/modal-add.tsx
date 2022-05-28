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
import { сoncatTimeToNumber } from "../../../../../../utils/time";
import { IEvent } from "../../../../../../models/event";

export const ModalAdd: FC<IModalAddProps> = ({
	dispatch,
	typeEvent,
	handleAdd,
}) => {
	const [title, setTitle] = React.useState("");
	const [description, setDescription] = React.useState("");
	const { selectedDay: selected } = useTypesSelector((state) => state.event);
	const [time, setTime] = React.useState(selected?.time || "");
	const { modalAdd } = useTypesSelector((state) => state.modal);
	const [date, setDate] = React.useState(() => {
		if (selected) {
			return `${selected!.year}-${ConvertTime(selected!.month)}-${ConvertTime(
				selected!.day
			)}`;
		} else return "";
	});

	const closeModalAdd = () => {
		cleanInputs();
		dispatch(modalActionCreator.SetModalAdd(false));
	};

	React.useEffect(() => {
		if (selected) {
			setDate(
				`${selected!.year}-${ConvertTime(selected!.month)}-${ConvertTime(
					selected!.day
				)}`
			);
		}
	}, [modalAdd]);

	const actionModalAdd = () => {
		const newEvent: IEvent = {
			time: time,
			day: сoncatTimeToNumber(date, [8, 9], true) as number,
			id: nanoid(5),
			month: сoncatTimeToNumber(date, [5, 6], true) as number,
			year: сoncatTimeToNumber(date, [0, 1, 2, 3], true) as number,
			typeEvent,
			description,
			title,
		};
		if (handleAdd) handleAdd(newEvent);
		dispatch(EventsActionCreator.FetchEvent(newEvent));
		cleanInputs();
		closeModalAdd();
	};

	const cleanInputs = () => {
		setTitle("");
		setTime("");
		setDescription("");
		if (selected)
			setDate(
				`${selected.year}-${ConvertTime(selected.month)}-${ConvertTime(
					selected.day
				)}`
			);
	};

	return (
		<EventModal
			footer
			isModal={modalAdd}
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
