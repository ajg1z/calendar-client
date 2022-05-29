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
import { validateEmail } from "../../../../../../utils/email";
import { LabelStatus, Status } from "./modal-share.styled";
import { Select, SelectChangeEvent, MenuItem } from "@mui/material";
import { LoaderRotate } from "../../../../../loader/loader-rotate/loader-rotate";

export const ModalShare: FC<{ dispatch: Dispatch<any> }> = ({ dispatch }) => {
	const {
		selectedDay: selected,
		isLoading,
		errors,
	} = useTypesSelector((state) => state.event);
	const { theme } = useTypesSelector((state) => state.setting);
	const [selects, setSelects] = React.useState<string[]>([]);
	const [email, setEmail] = React.useState("");
	const [status, setStatus] = React.useState(false);
	const { modalShare } = useTypesSelector((state) => state.modal);
	const [isError, setIsError] = React.useState(false);
	const actionModalShare = () => {
		if (validateEmail(email)) {
			dispatch(EventsActionCreator.ShareEvent(email, selects));
			setStatus(true);
		} else {
			setIsError(true);
		}
	};
	if (!selected) return <></>;
	const handleOnchange = (value: string) => {
		setIsError(false);
		setEmail(value);
		setStatus(false);
	};
	const closeModalShare = () => {
		dispatch(modalActionCreator.SetModalShare(false));
		setStatus(false);
		setEmail("");
		setIsError(false);
	};
	const handleChangeSelect = (event: SelectChangeEvent<typeof selects>) => {
		const {
			target: { value },
		} = event;
		setSelects(value as string[]);
	};

	return (
		<EventModal
			isModal={modalShare}
			footer
			action={actionModalShare}
			close={closeModalShare}
			height={320}
			width={600}
			leftBttn="Share"
			rightBttn="Cancel"
			title="Share modal"
		>
			<Container>
				<LineInput>
					<Label>Select the events you want to share with</Label>
					<Select
						sx={{
							width: "80%",
							"-ms-overflow-style": "none",
							"scrollbar-width": "none",
							marginBottom: "15px",
							"::-webkit-scrollbar": {
								cursor: "pointer",
								width: 0,
								height: 0,
							},
						}}
						className={`select ${theme}`}
						value={selects}
						onChange={handleChangeSelect}
						multiple
					>
						{selected.events.map((event) => {
							return <MenuItem value={event.id}>{event.title}</MenuItem>;
						})}
					</Select>
					<Label>E-mail</Label>
					<Input
						value={email}
						onChange={(e) => handleOnchange(e.target.value)}
						type="email"
					/>
					{isError && <LabelStatus color="red">email is invalid</LabelStatus>}
					{isLoading && (
						<Status>
							<LoaderRotate />
						</Status>
					)}

					{!isLoading ? (
						status && errors.id ? (
							<LabelStatus color="red">Fail process</LabelStatus>
						) : (
							status &&
							!errors.id && (
								<LabelStatus color="green">Event sent successfully</LabelStatus>
							)
						)
					) : null}
				</LineInput>
			</Container>
		</EventModal>
	);
};
