import React, { FC } from "react";
import { Months, weekHours, Years, hours } from "../../const/calendar";
import Select from "../select/select";
import { WeekDays as weekDays } from "../../const/calendar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import {
	Body,
	Container,
	Top,
	WeekDay,
	WrapperFlex,
	EventsLabel,
	Switch,
	SwitchText,
	Active,
	Left,
	SwitchType,
	Label,
	Hour,
	Cell,
	DayCell,
	Line,
	Wrapper,
} from "./event-calendar.styled";
import {
	IEventProps,
	IEvents,
	typeCalendar,
	direction,
} from "./event-calendar.types";
import { Item, Menu, TriggerEvent, useContextMenu } from "react-contexify";
import { ContextDay } from "./calendar-context-menu/caleendat-context-menu";
import { useDispatch } from "react-redux";
import { useTypesSelector } from "../../hooks/useTypedSelector";
import { EventModal } from "./event-modal/event-modal";
import { ModalAdd } from "./event-modal/components/modals/modal-add/modal-add";
import { EventsActionCreator } from "../../store/reducers/events/action-creators";
import { ModalShare } from "./event-modal/components/modals/modal-share/modal-share";
import { ISelectedDay } from "../../store/reducers/events/types";
import { ModalInfo } from "./event-modal/components/modals/modal-info/modal-info";
import { ModalDelete } from "./event-modal/components/modals/modal-delete/modal-delete";
import "./mui.scss";
import { Days } from "./days/days";
import { IDays } from "./days/days.types";
import { Time } from "./time/time";
import { Week } from "./week/week";
import { Day } from "./days/days.styled";
import { IEvent } from "../../models/event";
import { modalActionCreator } from "../../store/reducers/modal/action-creators";
import { ConvertTime } from "../../utils/time";
import { defineMonth, defineYear } from "../../utils/event";
import { Spring, useSpring, useTransition } from "react-spring";

const MENU_ID = "calendar";

export const EventCalendar: FC<IEventProps> = () => {
	const [typeCalendar, setTypeCalendar] =
		React.useState<typeCalendar>("standart");

	const dispatch = useDispatch();
	const { modalAdd, modalDelete, modalEdit, modalInfo, modalShare } =
		useTypesSelector((state) => state.modal);
	const { currentMonth, currentYear, today } = useTypesSelector(
		(state) => state.date
	);
	const { selectedDay, events } = useTypesSelector((state) => state.event);
	const [day, setDay] = React.useState(today);
	const { show } = useContextMenu({
		id: MENU_ID,
	});
	const [direction, setDirection] = React.useState<direction>("next");
	const [year, setYear] = React.useState(currentYear);
	const [month, setMonth] = React.useState(currentMonth);
	const [daysOfWeek, setDaysOfWeek] = React.useState<number[]>([]);

	const setInitialState = () => {
		const currentDayOfWeek =
			new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;
		const todayOfWeek =
			new Date(year, month, today).getDay() === 0
				? 7
				: new Date(year, month, today).getDay();

		const firstDayOfWeek = new Date(year, month, today - currentDayOfWeek);

		const arrDays = [];
		for (
			let day = firstDayOfWeek.getDate();
			day < firstDayOfWeek.getDate() + 7;
			day++
		) {
			arrDays.push(new Date(year, firstDayOfWeek.getMonth(), day).getDate());
		}
		setDaysOfWeek(arrDays);
	};
	React.useEffect(() => {
		setInitialState();
	}, []);

	const oneDayMonthOnWeekPrev = new Date(year, month, 1).getDay();
	const lastDayMonthOnWeek = new Date(year, month + 1, 0).getDay();

	const handleChangeWeek = (type: direction) => {
		const lastOrFirstDay = new Date(
			year,
			month,
			type === "next"
				? daysOfWeek[daysOfWeek.length - 1] + 1
				: daysOfWeek[0] - 1
		).getDate();
		const newWeek = [];
		if (type === "next") {
			for (let day = lastOrFirstDay; day < lastOrFirstDay + 7; day++) {
				newWeek.push(new Date(year, month, day).getDate());
			}
		} else {
			for (let day = 0; day < 7; day++) {
				// const date = new Date(year, month, ).getDate();
				newWeek.push(new Date(year, month, lastOrFirstDay - day).getDate());
			}
			newWeek.reverse();
		}
		const checkTime = new Date(
			year,
			month,
			type === "next" ? daysOfWeek[3] + 7 : daysOfWeek[3] - 7
		);
		if (month !== checkTime.getMonth()) {
			setMonth(checkTime.getMonth());
		}
		if (year !== checkTime.getFullYear()) {
			setYear(checkTime.getFullYear());
		}
		setDaysOfWeek(newWeek);
		return newWeek;
	};

	const handleChangeDay = (type: direction) => {
		let week: number[] = daysOfWeek;
		let index: null | number = null;
		if (type === "next") {
			if (day === daysOfWeek[daysOfWeek.length - 1]) {
				week = handleChangeWeek("next");
				index = 0;
			}
			index = index !== null ? index : week.indexOf(day) + 1;
			setDay(week[index]);
		} else {
			if (day === daysOfWeek[0]) {
				week = handleChangeWeek("prev");
				index = 6;
			}
			index = index !== null ? index : week.indexOf(day) - 1;
			setDay(week[index]);
		}
	};

	const switchNextMonth = () => {
		if (typeCalendar === "week") {
			handleChangeWeek("next");
		} else if (typeCalendar === "day") {
			handleChangeDay("next");
		} else {
			if (month === 11) {
				setYear(year + 1);
				setMonth(0);
			} else {
				setMonth(month + 1);
			}
		}
		setDirection("next");
	};

	const switchPrevMonth = () => {
		if (typeCalendar === "week") {
			handleChangeWeek("prev");
		} else if (typeCalendar === "day") {
			handleChangeDay("prev");
		} else {
			if (month === 0) {
				setYear(year - 1);
				setMonth(11);
			} else {
				setMonth(month - 1);
			}
		}
		setDirection("prev");
	};

	const days = React.useMemo(() => {
		const countDaysPrevMonth =
			oneDayMonthOnWeekPrev === 0 ? 6 : oneDayMonthOnWeekPrev - 1;
		const prevMontLastDays = new Date(year, month, 0).getDate();
		const prev = new Array(countDaysPrevMonth).fill(1).map((day, index) => {
			return {
				day: prevMontLastDays - countDaysPrevMonth + (index + 1),
				month: "prev",
			};
		});

		const next = new Array(7 - lastDayMonthOnWeek).fill(1).map((day, index) => {
			return { day: index + 1, month: "next" };
		});

		const current = new Array(new Date(year, month + 1, 0).getDate())
			.fill(1)
			.map((el, index) => {
				return { day: index + 1, month: "current" };
			});
		return [...prev, ...current, ...next];
	}, [year, month, events]);

	const defineNameSwitch = (dir: direction) => {
		const direction = dir === "next" ? "Next" : "Prev";
		if (typeCalendar === "standart") return `${direction} month`;
		if (typeCalendar === "day") return `${direction} day`;
		if (typeCalendar === "week") return `${direction} week`;
	};

	const setCurrentTime = () => {
		setMonth(currentMonth);
		setYear(currentYear);
	};

	const handleChangeTypeCalendar = (type: typeCalendar) => {
		if (type === "standart") {
			setCurrentTime();
			setTypeCalendar("standart");
			return;
		} else if (type === "week") {
			setTypeCalendar("week");
			setCurrentTime();
			setInitialState();
		} else {
			setTypeCalendar("day");
			setCurrentTime();
			setDay(today);
		}
	};

	function displayMenu(e: TriggerEvent, value: ISelectedDay) {
		dispatch(EventsActionCreator.SetSelectDay(value));
		e.preventDefault();
		show(e);
	}

	const selectDayInWeekType = (time: string, d: number | null) => {
		dispatch(
			EventsActionCreator.SetSelectDay({
				day: d || day,
				year: defineYear(year, month, daysOfWeek, d || day),
				month: defineMonth(d || day, year, month, daysOfWeek),
				events: [] as IEvent[],
				time: time,
			})
		);
		dispatch(modalActionCreator.SetModalAdd(true));
	};
	const styledToCell = useSpring({
		config: { duration: 100 },
		from: { opacity: 0 },
		to: { opacity: 1 },
		reset: true,
	});
	
	const arrYears = React.useMemo(() => {
		let arrYears = [];
		for (let i = 1970; i <= year; i++) {
			arrYears.push({ label: i.toString(), value: i });
		}
		return arrYears;
	}, [year]);
	return (
		<>
			<Container>
				<Switch onClick={switchPrevMonth} left="30px" top="20%">
					<ArrowForwardIosIcon className="arrow arrow-prev" />
					<SwitchText>{defineNameSwitch("prev")}</SwitchText>{" "}
				</Switch>
				<Switch onClick={switchNextMonth} right="30px" top="20%">
					<ArrowForwardIosIcon className="arrow arrow-next" />
					<SwitchText>{defineNameSwitch("next")}</SwitchText>
				</Switch>
				<ContextDay selected={selectedDay} id={MENU_ID} />
				<ModalDelete selected={selectedDay} dispatch={dispatch} />
				<ModalInfo dispatch={dispatch} />
				<ModalAdd typeEvent="myEvent" dispatch={dispatch} />
				<ModalShare dispatch={dispatch} />
				<Top>
					<Left>
						<Time />
					</Left>
					<Active>
						<SwitchType
							onClick={() => handleChangeTypeCalendar("week")}
							active={typeCalendar === "week"}
						>
							Week-type
						</SwitchType>
						<SwitchType
							onClick={() => handleChangeTypeCalendar("day")}
							active={typeCalendar === "day"}
						>
							Day-type
						</SwitchType>
						<SwitchType
							onClick={() => handleChangeTypeCalendar("standart")}
							active={typeCalendar === "standart"}
						>
							Month-type
						</SwitchType>
						{typeCalendar !== "standart" ? (
							<>
								<Label>{year}</Label>
								<Label>{Months[month].label}</Label>
							</>
						) : (
							<>
								<Select
									height="40px"
									width="100px"
									value={year}
									setValue={setYear}
									defaultLabel={year}
									arrOptions={arrYears}
								/>
								<Select
									width="150px"
									height="40px"
									value={month}
									setValue={setMonth}
									defaultLabel={Months[month].label}
									arrOptions={Months}
								/>
							</>
						)}
					</Active>
				</Top>
				<WrapperFlex>
					{weekDays.map((i) => (
						<WeekDay current={false} key={i}>
							{i}
						</WeekDay>
					))}
				</WrapperFlex>
				<Body>
					<>
						{typeCalendar === "standart" ? (
							<Days
								direction={direction}
								days={days}
								displayMenu={displayMenu}
								month={month}
								year={year}
							/>
						) : (
							<Week
								direction={direction}
								displayMenu={displayMenu}
								month={month}
								year={year}
								typeCalendar={typeCalendar}
								day={day}
								days={daysOfWeek}
							/>
						)}
						{typeCalendar === "week" && (
							<>
								{weekHours.map((el) => {
									return (
										<Wrapper key={el.hour}>
											<Line>
												<Hour>{ConvertTime(el.hour)}</Hour>
												{el.days.map((day, index) => {
													return (
														<Cell
															style={styledToCell}
															onClick={() =>
																selectDayInWeekType(
																	`${ConvertTime(el.hour)}:00`,
																	daysOfWeek[index]
																)
															}
															current={false}
														>
															{day}
														</Cell>
													);
												})}
											</Line>
										</Wrapper>
									);
								})}
							</>
						)}
						{typeCalendar === "day" &&
							hours.map((el) => {
								return (
									<Wrapper key={el}>
										<Line key={el}>
											<Hour>{ConvertTime(el)}</Hour>
											<DayCell
												style={styledToCell}
												onClick={() =>
													selectDayInWeekType(`${ConvertTime(el)}:00`, null)
												}
											>
												+
											</DayCell>
										</Line>
									</Wrapper>
								);
							})}
					</>
				</Body>
			</Container>
		</>
	);
};
