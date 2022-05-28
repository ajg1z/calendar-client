import React from "react";
import { useDispatch } from "react-redux";
import { EventModal } from "../../../../../components/event-calendar/event-modal/event-modal";
import { InputMaskTime } from "../../../../../components/input-mask-time/input-time";
import {
	Container,
	EditButton,
	Field as FieldStyled,
	InputEdit,
	Label,
	Text,
	Edit,
	CheckButton,
	TextInput,
	Button,
	Buttons,
	TypeEvent,
} from "./info-modal.styled";
import { modalActionCreator } from "../../../../../store/reducers/modal/action-creators";
import { InfoModalProps, InputsModes } from "./info-modal.types";
import { EventsActionCreator } from "../../../../../store/reducers/events/action-creators";
import { useTypesSelector } from "../../../../../hooks/useTypedSelector";
import { ConfirmModal } from "../../../../../components/event-calendar/event-modal/components/modals/modal-confirm/modal-confirm";
import { FieldString } from "./field-string/field-string";
import { FieldDate } from "./field-date/field-date";
import { ConvertTime, сoncatTimeToNumber } from "../../../../../utils/time";
import { EventLabel } from "../../../../../components/event-calendar/event-label/event-label";
import { IEvent } from "../../../../../models/event";

export const InfoModal: React.FC<InfoModalProps> = ({
	dispatch,
	modalConfirm,
	handleDelete,
	handleEdit,
}) => {
	const { selectedEvent, errors } = useTypesSelector((state) => state.event);
	const [title, setTitle] = React.useState(selectedEvent?.title || "");
	const [time, setTime] = React.useState(selectedEvent?.time || "");
	const [description, setDescription] = React.useState(
		selectedEvent?.description || ""
	);

	const { modalInfo } = useTypesSelector((state) => state.modal);
	const [date, setDate] = React.useState(
		`${selectedEvent?.year}-${ConvertTime(
			selectedEvent?.month || 1
		)}-${ConvertTime(selectedEvent?.day || 1)}`
	);
	React.useEffect(() => {
		if (modalInfo && selectedEvent) {
			setTitle(selectedEvent.title);
			setTime(selectedEvent.time);
			setDescription(selectedEvent.description);
			setDate(
				`${selectedEvent?.year}-${ConvertTime(
					selectedEvent?.month || 1
				)}-${ConvertTime(selectedEvent?.day || 1)}`
			);
		}
	}, [modalInfo]);
	const closeModal = () => {
		dispatch(modalActionCreator.SetModalConfirm(false));
		dispatch(modalActionCreator.SetModalInfo(false));
	};
	const timeRef = React.useRef<HTMLInputElement>(null);
	const descRef = React.useRef<HTMLTextAreaElement>(null);
	const handleRemoveEvent = () => {
		setModalConfirm({
			title: "Removig event",
			text: "You definitely want to delete this event?",
			textAction: "Delete",
			action: () => {
				handleDelete(selectedEvent!.id);
				dispatch(EventsActionCreator.FetchRemoveEvent(selectedEvent!.id));
				closeModal();
			},
		});
		dispatch(modalActionCreator.SetModalConfirm(true));
	};

	const handleEditEvent = () => {
		dispatch(
			EventsActionCreator.UpdateEvent(selectedEvent!.id, isChangesProperties())
		);
		if (errors.id) return;
		handleEdit({
			day: сoncatTimeToNumber(date, [8, 9], true) as number,
			year: сoncatTimeToNumber(date, [0, 1, 2, 3], true) as number,
			description,
			month: (сoncatTimeToNumber(date, [5, 6], true) as number) - 1,
			id: selectedEvent!.id,
			time,
			title,
			typeEvent: selectedEvent!.typeEvent,
		});
		dispatch(
			EventsActionCreator.SetSelectEvent({
				day: сoncatTimeToNumber(date, [8, 9], true) as number,
				year: сoncatTimeToNumber(date, [0, 1, 2, 3], true) as number,
				description,
				month: сoncatTimeToNumber(date, [5, 6], true) as number,
				id: selectedEvent!.id,
				time,
				title,
				typeEvent: selectedEvent!.typeEvent,
			})
		);
		closeModal();
	};
	const [stateModalConfirm, setModalConfirm] = React.useState({
		title: "Removig event",
		text: "You definitely want to delete this event?",
		textAction: "Delete",
		action: handleRemoveEvent,
	});
	const isChangesProperties = () => {
		const obj = {} as IEvent;
		if (title !== selectedEvent!.title) obj.title = title;
		if (time !== selectedEvent!.time) obj.time = time;
		if (description !== selectedEvent!.description)
			obj.description = description;
		if (
			(сoncatTimeToNumber(date, [8, 9], true) as number) !== selectedEvent!.day
		)
			obj.day = сoncatTimeToNumber(date, [8, 9], true) as number;
		if (
			(сoncatTimeToNumber(date, [0, 1, 2, 3], true) as number) !==
			selectedEvent!.year
		)
			obj.year = сoncatTimeToNumber(date, [0, 1, 2, 3], true) as number;
		if (
			(сoncatTimeToNumber(date, [5, 6], true) as number) !==
			selectedEvent!.month
		)
			obj.month = сoncatTimeToNumber(date, [5, 6], true) as number;
		return obj;
	};

	const isChanges = () => {
		return (
			title === selectedEvent!.title &&
			time === selectedEvent!.time &&
			description === selectedEvent?.description &&
			`${selectedEvent!.year}-${ConvertTime(
				selectedEvent!.month
			)}-${ConvertTime(selectedEvent!.day)}` === date
		);
	};

	const [editModeInputs, setEditModeInputs] = React.useState({
		title: false,
		description: false,
		time: false,
		date: false,
	});

	const handleCloseModal = () => {
		if (!isChanges()) {
			dispatch(modalActionCreator.SetModalConfirm(true));
			setModalConfirm({
				title: "Save changes",
				text: "All your changes will be lost",
				textAction: "Close anyway",
				action: closeModal,
			});
			return;
		}
		dispatch(modalActionCreator.SetModalInfo(false));
	};
	if (!selectedEvent) return <></>;
	return (
		<EventModal
			isModal={modalInfo}
			action={() => console.log}
			close={handleCloseModal}
			height={550}
			width={500}
			leftBttn="Delete"
			rightBttn="Close"
			title="Events"
			customFooter={() => {
				return (
					<Buttons>
						<Button onClick={handleEditEvent} disabled={isChanges()}>
							Save
						</Button>
						<Button onClick={handleRemoveEvent}>Delete</Button>
						<Button onClick={handleCloseModal}>Close</Button>
					</Buttons>
				);
			}}
		>
			<ConfirmModal
				title={stateModalConfirm.title}
				textAction={stateModalConfirm.textAction}
				text={stateModalConfirm.text}
				action={stateModalConfirm.action}
				dispatch={dispatch}
			/>
			<Container>
				<Label>Type event</Label>
				<TypeEvent>
					{selectedEvent!.typeEvent}
					<EventLabel count={1} typeEvent={selectedEvent!.typeEvent} />
				</TypeEvent>
				<FieldString
					editModeInputs={editModeInputs}
					label={"Title"}
					setEditModeInputs={setEditModeInputs}
					setValue={setTitle}
					value={title}
				/>
				<FieldStyled>
					<Label>Time</Label>
					<Text>
						{editModeInputs.time ? (
							<InputMaskTime
								value={time}
								setValue={setTime}
								ref={timeRef}
								onBlur={() => {
									setEditModeInputs({ ...editModeInputs, time: false });
									if (!time) setTime("00:00");
								}}
							/>
						) : (
							time
						)}
						<Edit>
							{editModeInputs.time ? (
								<CheckButton
									onClick={() => {
										setEditModeInputs({ ...editModeInputs, time: false });
									}}
								/>
							) : (
								<EditButton
									onClick={() => {
										setEditModeInputs({ ...editModeInputs, time: true });
										setTimeout(() => {
											timeRef.current?.focus();
										}, 0);
									}}
								/>
							)}
						</Edit>
					</Text>
				</FieldStyled>
				<FieldDate
					setEditModeInputs={setEditModeInputs}
					editModeInputs={editModeInputs}
					label={"Date"}
					setValue={setDate}
					value={date}
				/>
				<FieldStyled>
					<Label>Description</Label>
					<Text>
						{editModeInputs.description ? (
							<TextInput
								rows={4}
								ref={descRef}
								onChange={(e) => {
									setDescription(e.target.value);
								}}
								value={description}
								onBlur={() => {
									setEditModeInputs({
										...editModeInputs,
										description: false,
									});
								}}
							/>
						) : (
							description
						)}
						<Edit>
							{editModeInputs.description ? (
								<CheckButton
									onClick={() => {
										setEditModeInputs({
											...editModeInputs,
											description: false,
										});
									}}
								/>
							) : (
								<EditButton
									onClick={() => {
										setEditModeInputs({ ...editModeInputs, description: true });
										setTimeout(() => {
											descRef.current?.focus();
										}, 0);
									}}
								/>
							)}
						</Edit>
					</Text>
				</FieldStyled>
			</Container>
		</EventModal>
	);
};
