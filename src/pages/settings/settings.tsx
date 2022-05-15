import React from "react";
import { Body } from "../events/events.styled";
import "./setting.scss";
import {
	Container,
	EventIcon,
	Left,
	Right,
	Section,
	SectionOptions,
	Line,
	Text,
	ListHolydays,
	ItemHolydays,
	NameEvent,
	Actions,
	Button,
} from "./settings.styled";
import { ISections } from "./settings.types";
import { Label } from "../events/components/modals/info-modal/info-modal.styled";
import { InputColor } from "./input-color/input-color";
import { useDispatch } from "react-redux";
import { SettingActionCreater } from "../../store/reducers/setting/action-creators";
import { useTypesSelector } from "../../hooks/useTypedSelector";
import { Checkbox, Switch } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { EventsActionCreator } from "../../store/reducers/events/action-creators";
import { IEvent } from "../../models/event";
import { modalActionCreator } from "../../store/reducers/modal/action-creators";
import { InfoModal } from "../events/components/modals/info-modal/info-modal";
import { ConfirmModal } from "../../components/event-calendar/event-modal/components/modals/modal-confirm/modal-confirm";
import { ModalAdd } from "../../components/event-calendar/event-modal/components/modals/modal-add/modal-add";
import { animated, useSpring } from "react-spring";
import { useLocation } from "react-router-dom";

const sections = ["customization", "time", "holidays", "language"];
export const Settings = () => {
	const location = useLocation().pathname;
	const dispatch = useDispatch();
	const { colorIconsEvent, font, language, theme, timezone } = useTypesSelector(
		(state) => state.setting
	);
	const { modalInfo, modalConfirm, modalAdd } = useTypesSelector(
		(state) => state.modal
	);
	const { events, selectedEvent } = useTypesSelector((state) => state.event);
	const [selectedSection, setSelectedSection] =
		React.useState<ISections | null>(null);
	const [prevState, setPrevState] = React.useState(true);
	const stylesToRight = useSpring({
		config: { duration: 200 },
		from: { transform: "translateX(-100px)", opacity: 0 },
		to: { transform: "translateX(0px)", opacity: 1 },
		reset: true,

		immediate: () => {
			if (!location.includes("setting")) return true;
			if (!prevState) return true;
			return false;
		},
	});

	const [listHolydays, setListHolidays] = React.useState<IEvent[]>([]);

	React.useEffect(() => {
		const holydays: IEvent[] = [];
		events.forEach((el) => {
			el.month.forEach((m) => {
				m.events.forEach((event) => {
					if (event.typeEvent === "holiday") holydays.push(event);
				});
			});
		});
		setListHolidays(holydays);
	}, []);

	const handleEdit = (event: IEvent) => {
		setListHolidays(
			listHolydays.map((ev) => {
				if (ev.id === event.id) {
					return event;
				}
				return ev;
			})
		);
	};

	const handleAdd = (event: IEvent) => {
		setListHolidays([...listHolydays, event]);
	};

	const handleDelete = (id: string) => {
		setListHolidays(listHolydays.filter((ev) => ev.id !== id));
	};

	const right = React.useMemo(() => {
		// debugger;
		switch (selectedSection) {
			case "customization": {
				return (
					<animated.div style={stylesToRight}>
						<SectionOptions>
							<Label>Event icon customization</Label>
							<Line>
								<Text>My event</Text>
								<InputColor
									value={colorIconsEvent.myEvent}
									type="myEvent"
									icon="E"
								/>
							</Line>
							<Line>
								<Text>Holidays</Text>
								<InputColor
									value={colorIconsEvent.holiday}
									type="holiday"
									icon="H"
								/>
							</Line>
							<Line>
								<Text>Weekend</Text>
								<InputColor
									value={colorIconsEvent.weekend}
									type="weekend"
									icon="W"
								/>
							</Line>
						</SectionOptions>
						<SectionOptions>
							<Label>Theme</Label>
							<Line>
								<Text>Day</Text>
								<Switch
									checked={theme === "day" ? false : true}
									inputProps={{ "aria-label": "controlled" }}
									onChange={(e) => {
										dispatch(
											SettingActionCreater.SetTheme(
												e.target.checked ? "night" : "day"
											)
										);
									}}
									className="switch-setting"
								/>
								<Text>Night</Text>
							</Line>
						</SectionOptions>
					</animated.div>
				);
			}
			case "holidays": {
				return (
					<animated.div style={stylesToRight}>
						<SectionOptions>
							<Label>Holidays</Label>
							<ListHolydays>
								{listHolydays.map((event) => {
									return (
										<ItemHolydays key={event.id} selected>
											<NameEvent
												onClick={() => {
													dispatch(EventsActionCreator.SetSelectEvent(event));
													dispatch(modalActionCreator.SetModalInfo(true));
												}}
											>
												{event.title}
											</NameEvent>
											<Actions>
												<DeleteIcon
													onClick={() => {
														dispatch(EventsActionCreator.SetSelectEvent(event));
														dispatch(modalActionCreator.SetModalConfirm(true));
													}}
													sx={{ cursor: "pointer" }}
												/>
											</Actions>
										</ItemHolydays>
									);
								})}
								<Button
									onClick={() => {
										dispatch(EventsActionCreator.SetSelectDay(null));
										dispatch(modalActionCreator.SetModalAdd(true));
									}}
								>
									Add holiday
								</Button>
							</ListHolydays>
						</SectionOptions>
					</animated.div>
				);
			}
			default:
				return <></>;
		}
	}, [selectedSection, listHolydays, theme]);

	return (
		<Container>
			<ConfirmModal
				dispatch={dispatch}
				title="delete"
				text="You really want to delete event?"
				textAction="delete"
				action={() => {
					if (selectedEvent) {
						handleDelete(selectedEvent.id);
						EventsActionCreator.RemoveEvent({
							month: selectedEvent.month,
							year: selectedEvent.year || 2022,
							id: selectedEvent.id,
						});
						dispatch(modalActionCreator.SetModalConfirm(false));
					}
				}}
			/>
			<ModalAdd handleAdd={handleAdd} typeEvent="holiday" dispatch={dispatch} />
			<InfoModal
				handleDelete={handleDelete}
				handleEdit={handleEdit}
				dispatch={dispatch}
				modalConfirm={modalConfirm}
			/>
			<Body>
				<Left>
					{sections.map((s) => {
						return (
							<Section
								key={s}
								onClick={() => {
									setPrevState(true);
									setSelectedSection(s as ISections);
									setTimeout(() => {
										setPrevState(false);
									}, 1000);
								}}
							>
								{s[0].toUpperCase() + s.slice(1)}
							</Section>
						);
					})}
				</Left>
				<Right>{right}</Right>
			</Body>
		</Container>
	);
};
