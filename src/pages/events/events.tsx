import React from "react";
import { ConvertTime } from "../../utils/time";
import { useTypesSelector } from "../../hooks/useTypedSelector";
import { Container } from "../menu/menu.styled";
import { InfoModal } from "./components/modals/info-modal/info-modal";
import { Body, Column, Item, Label, ListEvents, Title } from "./events.styled";
import { EventsActionCreator } from "../../store/reducers/events/action-creators";
import { useDispatch } from "react-redux";
import { modalActionCreator } from "../../store/reducers/modal/action-creators";
import { IEvent } from "../../models/event";
import {
	DragDropContext,
	Droppable,
	Draggable,
	DropResult,
	ResponderProvided,
} from "react-beautiful-dnd";

export const Events = () => {
	const { events } = useTypesSelector((state) => state.event);
	const [listEvents, setListEvents] = React.useState<IEvent[]>([]);

	const reorder = (list: IEvent[], startIndex: number, endIndex: number) => {
		const result = Array.from(list);
		const [removed] = result.splice(startIndex, 1);
		result.splice(endIndex, 0, removed);

		return result;
	};
	const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
		if (!result.destination) return;
		const newList = reorder(
			listEvents,
			result.source.index,
			result.destination.index
		);
		setListEvents(newList);
	};
	const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
		// some basic styles to make the items look a bit nicer
		userSelect: "none",
		padding: 16,
		margin: `0 0 8px 0`,

		// change background colour if dragging
		background: isDragging ? "lightgreen" : "grey",

		// styles we need to apply on draggables
		...draggableStyle,
	});

	const handleEdit = (event: IEvent) => {
		setListEvents(
			listEvents.map((ev) => {
				if (ev.id === event.id) {
					return event;
				}
				return ev;
			})
		);
	};

	const handleDelete = (id: string) => {
		setListEvents(listEvents.filter((ev) => ev.id !== id));
	};

	const { modalInfo, modalConfirm } = useTypesSelector((state) => state.modal);
	React.useEffect(() => {
		const eventsLabels: IEvent[] = [];
		events.forEach((el) => {
			el.month.forEach((m) => {
				m.events.forEach((event) => {
					eventsLabels.push({ ...event });
				});
			});
		});
		setListEvents(eventsLabels);
	}, []);

	const dispatch = useDispatch();
	return (
		<Container>
			<InfoModal
				handleDelete={handleDelete}
				handleEdit={handleEdit}
				modalConfirm={modalConfirm}
				dispatch={dispatch}
			/>
			<Body>
				<Column>
					<Title>My Events</Title>
					<DragDropContext onDragEnd={onDragEnd}>
						<Droppable droppableId="droppable">
							{(provided, snapshot) => {
								return (
									<ListEvents
										{...provided.droppableProps}
										ref={provided.innerRef}
									>
										{listEvents.map((event, index) => {
											return (
												<Draggable
													key={event.id}
													draggableId={event.id}
													index={index}
												>
													{(provided, snapshot) => {
														return (
															<Item
																style={getItemStyle(
																	snapshot.isDragging,
																	provided.draggableProps.style
																)}
																ref={provided.innerRef}
																{...provided.dragHandleProps}
																{...provided.draggableProps}
																key={event.id}
																onClick={() => {
																	dispatch(
																		EventsActionCreator.SetSelectEvent(event)
																	);
																	dispatch(
																		modalActionCreator.SetModalInfo(true)
																	);
																}}
															>
																<Label>{event.title}</Label>
																<Label>
																	{event.year}-{ConvertTime(event.month + 1)}-
																	{ConvertTime(event.day)}
																</Label>
															</Item>
														);
													}}
												</Draggable>
											);
										})}
										{provided.placeholder}
									</ListEvents>
								);
							}}
						</Droppable>
					</DragDropContext>
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
