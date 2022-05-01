import React, { FC } from "react";
import {
	Container,
	Input,
	Label,
	ListOptions,
	COption as Option,
} from "./select.styled";
import { IOption, ISelectProps } from "./select.types";
import ReactDom from "react-dom";
import { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { CFormControl as FormControl } from "./select.styled";
import Select from "@mui/material/Select";
const TopSelect: FC<ISelectProps> = ({
	arrOptions,
	setValue,
	defaultLabel,
	value,
	height,
	width,
}) => {
	const handleOnChange = (e: SelectChangeEvent) => {
		setValue(e.target.value);
	};
	return (
		<Select
			sx={{ height, width }}
			value={`${value}`}
			onChange={handleOnChange}
		>
			{arrOptions.map((day) => {
				return <Option value={day.value}>{day.label}</Option>;
			})}
		</Select>
	);
};
export default TopSelect;
