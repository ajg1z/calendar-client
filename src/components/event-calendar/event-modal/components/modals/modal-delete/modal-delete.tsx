import React from "react";
import { EventModal } from "../../../event-modal";

import { IModalDeleteProps, ISelects } from "./modal-delete.types";
import "./mui-select.scss";
import { modalActionCreator } from "../../../../../../store/reducers/modal/action-creators";
import { EventsActionCreator } from "../../../../../../store/reducers/events/action-creators";
import { Container } from "./modal-delete.styled";
import { Label } from "../modal-add/modal-add.styled";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { Title } from "../../../../../../pages/events/events.styled";
import { useTypesSelector } from "../../../../../../hooks/useTypedSelector";

export const ModalDelete: React.FC<IModalDeleteProps> = ({
	dispatch,
	selected,
}) => {
	const { modalDelete } = useTypesSelector((state) => state.modal);
	const [selects, setSelects] = React.useState<string[]>([]);
	const { theme } = useTypesSelector((state) => state.setting);
	const closeModalDelete = () => {
		dispatch(modalActionCreator.SetModalDelete(false));
	};
	if (!selected) return <></>;

	const actionModalDelete = () => {
		if (!selects) return;
		if (!selected) return;
		dispatch(
			EventsActionCreator.FetchRemoveEvent(
				selects.length === 1 ? selects[0] : selects
			)
		);
		dispatch(
			EventsActionCreator.SetSelectDay({
				...selected,
				events: selected!.events.filter((event) => {
					let valid = true;
					selects.forEach((el) => {
						if (el === event.id) valid = false;
					});
					return valid;
				}),
			})
		);
		setSelects([] as string[]);
	};

	const handleChange = (event: SelectChangeEvent<typeof selects>) => {
		const {
			target: { value },
		} = event;
		setSelects(value as string[]);
	};

	return (
		<>
			<EventModal
				isModal={modalDelete}
				disabled={!selects.length}
				footer
				action={actionModalDelete}
				close={closeModalDelete}
				height={selected.events.length ? 240 : 150}
				width={600}
				leftBttn="Delete"
				rightBttn="Cancel"
				title="Remove event"
			>
				<Container>
					{selected.events.length ? (
						<Title>Select event which want remove</Title>
					) : (
						""
					)}
					{!selected.events.length ? (
						<Label>This day not have events</Label>
					) : (
						<Select
							sx={{
								width: "50%",
								"-ms-overflow-style": "none",
								"scrollbar-width": "none",
								"::-webkit-scrollbar": {
									cursor: "pointer",
									width: 0,
									height: 0,
								},
							}}
							className={`select ${theme}`}
							value={selects}
							onChange={handleChange}
							multiple
						>
							{selected.events.map((event) => {
								if (event.email) return;
								return <MenuItem value={event.id}>{event.title}</MenuItem>;
							})}
						</Select>
					)}
				</Container>
			</EventModal>
		</>
	);
};
