import React from "react";
import { useTypesSelector } from "../../../hooks/useTypedSelector";
import { Day } from "../days/days.styled";
import { Container, Img } from "./week.styled";
import { WeekProps } from "./week.types";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const Week: React.FC<WeekProps> = ({
	day,
	days,
	typeCalendar,
	month,
	year,
}) => {
	const { today, currentYear, currentMonth } = useTypesSelector(
		(state) => state.date
	);
	const defineCurrentDay = (d: number) => {
    // debugger
		if (typeCalendar === "day") {
			if (d === day) return true;
		} else {
			if (d === today && month === currentMonth && currentYear === year)
				return true;
		}
		return false;
	};
	return (
		<Container>
			<Img>
				<AccessTimeIcon />
			</Img>
			{days.map((d) => {
				return (
					<Day key={d} current={defineCurrentDay(d)}>
						{d}
					</Day>
				);
			})}
		</Container>
	);
};
