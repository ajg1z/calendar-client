import React from "react";
import { useDispatch } from "react-redux";
import { EventModal } from "../../../../../components/event-calendar/event-modal/event-modal";
import { InputMaskTime } from "../../../../../components/input-mask-time/input-time";
import {
	Container,
	EditButton,
	Field,
	InputEdit,
	Label,
	Text,
	Edit,
	CheckButton,
	TextInput,
	Button,
	Buttons,
} from "./info-modal.styled";
import { modalActionCreator } from "../../../../../store/reducers/modal/action-creators";
import { InfoModalProps, InputsModes } from "./info-modal.types";
import { EventsActionCreator } from "../../../../../store/reducers/events/action-creators";
import { useTypesSelector } from "../../../../../hooks/useTypedSelector";
import { ConfirmModal } from "../../../../../components/event-calendar/event-modal/components/modals/modal-confirm/modal-confirm";

export const InfoModal: React.FC<InfoModalProps> = ({
	dispatch,
	modalConfirm,
}) => {
	const { selectedEvent } = useTypesSelector((state) => state.event);
	const [title, setTitle] = React.useState(selectedEvent!.title);
	const [time, setTime] = React.useState(selectedEvent!.time);
	const [description, setDescription] = React.useState(
		selectedEvent?.description
	);
	const [month, setMonth] = React.useState();
	const [day,setDay]=React.useState();
	const [year,setYear]=React.useState();
	
	const titleRef = React.useRef<HTMLInputElement>(null);
	const timeRef = React.useRef<HTMLInputElement>(null);
	const descRef = React.useRef<HTMLTextAreaElement>(null);
	const [stateModalConfirm, setModalConfirm] = React.useState({
		title: "Removig event",
		text: "You definitely want to delete this event?",
		testAction: "Delete",
		action: () => {
			// dispatch(EventsActionCreator.EditEvent({}));
		},
	});
	const [editModeInputs, setEditModeInputs] = React.useState({
		title: false,
		description: false,
		time: false,
	});

	const handleCloseModal = () => {
		dispatch(modalActionCreator.SetModalInfo(false));
	};

	return (
		<EventModal
			action={() => console.log}
			close={handleCloseModal}
			height={"max-content"}
			width={500}
			leftBttn="Delete"
			rightBttn="Close"
			title="Events"
			customFooter={() => {
				return (
					<Buttons>
						<Button
							disabled={
								title === selectedEvent!.title &&
								time === selectedEvent!.time &&
								description === selectedEvent?.description
							}
						>
							Save
						</Button>
						<Button
							onClick={() => {
								dispatch(
									EventsActionCreator.RemoveEvent({
										id: selectedEvent!.id,
										month: selectedEvent!.month,
										year: selectedEvent!.year || 0,
									})
								);
							}}
						>
							Delete
						</Button>
						<Button onClick={handleCloseModal}>Close</Button>
					</Buttons>
				);
			}}
		>
			{modalConfirm && (
				<ConfirmModal
					title=""
					textAction={"delete"}
					text="k"
					action={7}
					dispatch={dispatch}
				/>
			)}
			<Container>
				<Field>
					<Label>Title</Label>
					<Text>
						{editModeInputs.title ? (
							<InputEdit
								ref={titleRef}
								onChange={(e) => {
									setTitle(e.target.value);
								}}
								value={title}
								onBlur={() => {
									setEditModeInputs({ ...editModeInputs, title: false });
									if (!title) setTitle("this should be title event");
								}}
							/>
						) : (
							title
						)}
						<Edit>
							{editModeInputs.title ? (
								<CheckButton
									onClick={() => {
										setEditModeInputs({ ...editModeInputs, title: false });
									}}
								/>
							) : (
								<EditButton
									onClick={() => {
										setEditModeInputs({ ...editModeInputs, title: true });
										setTimeout(() => {
											titleRef.current?.focus();
										}, 0);
									}}
								/>
							)}
						</Edit>
					</Text>
				</Field>
				<Field>
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
				</Field>
				<Field>
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
				</Field>
			</Container>
		</EventModal>
	);
};
