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

const sections = ["customization", "time", "holidays", "language"];
export const Settings = () => {
	const dispatch = useDispatch();
	const { colorIconsEvent, font, language, theme, timezone } = useTypesSelector(
		(state) => state.setting
	);
	const { modalInfo, modalConfirm } = useTypesSelector((state) => state.modal);
	const { events } = useTypesSelector((state) => state.event);
	const [selectedSection, setSelectedSection] =
		React.useState<ISections | null>(null);
	const [listHolydays, setListHolidays] = React.useState<IEvent[]>([]);

	React.useEffect(() => {
		const holydays: IEvent[] = [];
		events.forEach((el) => {
			el.month.forEach((m) => {
				m.events.forEach((event) => {
					holydays.push(event);
				});
			});
		});
		setListHolidays(holydays);
	}, [events]);

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

	const handleDelete = (id: string) => {
		setListHolidays(listHolydays.filter((ev) => ev.id !== id));
	};

	const right = React.useMemo(() => {
		switch (selectedSection) {
			case "customization": {
				return (
					<>
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
					</>
				);
			}
			case "holidays": {
				return (
					<>
						<SectionOptions>
							<Label>Holidays</Label>
							<ListHolydays>
								{listHolydays.map((event) => {
									return (
										<ItemHolydays selected>
											<NameEvent
												onClick={() => {
													dispatch(EventsActionCreator.SetSelectEvent(event));
													dispatch(modalActionCreator.SetModalInfo(true));
												}}
											>
												{event.title}
											</NameEvent>
											<Actions>
												<Checkbox />
												<DeleteIcon sx={{ cursor: "pointer" }} />
											</Actions>
										</ItemHolydays>
									);
								})}
							</ListHolydays>
						</SectionOptions>
					</>
				);
			}
			default:
				return <></>;
		}
	}, [selectedSection]);

	return (
		<Container>
			{modalInfo && (
				<InfoModal
					handleDelete={handleDelete}
					handleEdit={handleEdit}
					dispatch={dispatch}
					modalConfirm={modalConfirm}
				/>
			)}
			<Body>
				<Left>
					{sections.map((s) => {
						return (
							<Section onClick={() => setSelectedSection(s as ISections)}>
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
