import React from "react";
import { ConvertTime } from "../../components/event-calendar/utils/time";
import { useTypesSelector } from "../../hooks/useTypedSelector";
import { Container } from "../menu/menu.styled";
import { InfoModal } from "./components/modals/info-modal/info-modal";
import { Body, Column, Item, Label, ListEvents, Title } from "./events.styled";
import { EventsActionCreator } from "../../store/reducers/events/action-creators";
import { useDispatch } from "react-redux";
import { modalActionCreator } from "../../store/reducers/modal/action-creators";
import { ConfirmModal } from "../../components/event-calendar/event-modal/components/modals/modal-confirm/modal-confirm";

export const Events = () => {
	const dispatch = useDispatch();
	const { events } = useTypesSelector((state) => state.event);
	const { modalInfo, modalConfirm } = useTypesSelector((state) => state.modal);
	return (
		<Container>
			{modalInfo && (
				<InfoModal modalConfirm={modalConfirm} dispatch={dispatch} />
			)}
			<Body>
				<Column>
					<Title>My Events</Title>
					<ListEvents>
						{events.map((ev) => {
							return ev.month.map((m) => {
								return m.events.map((event) => {
									return (
										<Item
											onClick={() => {
												dispatch(modalActionCreator.SetModalInfo(true));
												dispatch(EventsActionCreator.SetSelectEvent(event));
											}}
										>
											<Label>{event.title}</Label>
											<Label>
												{event.year}-{ConvertTime(event.month)}-
												{ConvertTime(event.day)}
											</Label>
										</Item>
									);
								});
							});
						})}
					</ListEvents>
				</Column>
				<Column>
					<Title>Dispatched events</Title>
				</Column>
				<Column>
					<Title>Received events</Title>
				</Column>
			</Body>
		</Container>
	);
};
