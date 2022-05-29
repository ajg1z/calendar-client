import React from "react";
import { ConvertTime } from "../../utils/time";
import { useTypesSelector } from "../../hooks/useTypedSelector";
import { Container } from "../menu/menu.styled";
import { InfoModal } from "./components/modals/info-modal/info-modal";
import {
	Body,
	Column,
	Item,
	Label,
	ListEvents,
	Loaded,
	Title,
} from "./events.styled";
import { EventsActionCreator } from "../../store/reducers/events/action-creators";
import { useDispatch } from "react-redux";
import { modalActionCreator } from "../../store/reducers/modal/action-creators";
import { IEvent, ISentSharedEvents } from "../../models/event";
import {
	DragDropContext,
	Droppable,
	Draggable,
	DropResult,
	ResponderProvided,
} from "react-beautiful-dnd";
import { LoaderRotate } from "../../components/loader/loader-rotate/loader-rotate";
import { useFetch } from "../../hooks/useFetch";
import $api from "../../http/axios";
import { EventService } from "../../http/event.service";
import { columnType } from "./events.types";

export const Events = () => {
	const { events, selectedEvent } = useTypesSelector((state) => state.event);
	console.log(events);
	const [listEvents, setListEvents] = React.useState<IEvent[]>([]);
	const [receivedEvents, setReceivedEvents] = React.useState<IEvent[]>([]);
	const [sentEvents, setSentEvent] = React.useState<ISentSharedEvents[]>([]);
	const { isLoading } = useTypesSelector((state) => state.event);
	const [column, setColumn] = React.useState<columnType>("all");
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

	const [fetch, loding, error] = useFetch(async () => {
		const sentEvents = await EventService.getSentEvents();
		setSentEvent(sentEvents);
	});

	React.useEffect(() => {
		fetch();
	}, []);

	const { modalInfo, modalConfirm } = useTypesSelector((state) => state.modal);
	React.useEffect(() => {
		if (isLoading || !events.length) return;
		const eventsLabels: IEvent[] = [];
		const receivedEvents: IEvent[] = [];
		events.forEach((el) => {
			el.month.forEach((m) => {
				m.events.forEach((event) => {
					if (event.email) {
						receivedEvents.push(event);
					} else eventsLabels.push({ ...event });
				});
			});
		});
		setReceivedEvents(receivedEvents);
		setListEvents(eventsLabels);
	}, [isLoading]);

	const dispatch = useDispatch();
	return (
		<Container>
			{isLoading && (
				<Loaded>
					<LoaderRotate />
				</Loaded>
			)}
			<InfoModal
				columnType={column}
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
																		EventsActionCreator.SetSelectEvent({
																			...event,
																			target: null,
																		})
																	);
																	dispatch(
																		modalActionCreator.SetModalInfo(true)
																	);
																	setColumn("all");
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
					<ListEvents>
						{sentEvents.map((el, i) => {
							return el.events.map((event) => {
								return (
									<Item
										key={i}
										onClick={() => {
											dispatch(
												EventsActionCreator.SetSelectEvent({
													...event,
													target: el.receiver,
												})
											);
											dispatch(modalActionCreator.SetModalInfo(true));
											setColumn("sent");
										}}
									>
										<Label>{event.title}</Label>
										<Label>
											{event.year}-{ConvertTime(event.month + 1)}-
											{ConvertTime(event.day)}
										</Label>
									</Item>
								);
							});
						})}
					</ListEvents>
				</Column>
				<Column>
					<Title>Received events</Title>
					<ListEvents>
						{receivedEvents.map((el, i) => {
							return (
								<Item
									key={el.id}
									onClick={() => {
										dispatch(
											EventsActionCreator.SetSelectEvent({
												...el,
												target: el.email,
											})
										);
										dispatch(modalActionCreator.SetModalInfo(true));
										setColumn("all");
									}}
								>
									<Label>{el.title}</Label>
									<Label>
										{el.year}-{ConvertTime(el.month + 1)}-{ConvertTime(el.day)}
									</Label>
								</Item>
							);
						})}
					</ListEvents>
				</Column>
			</Body>
		</Container>
	);
};
