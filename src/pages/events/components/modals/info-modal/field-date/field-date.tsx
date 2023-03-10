import React, { RefObject } from "react";
import { FieldProps } from "./field-date.types";
import {
	Button,
	Buttons,
	CheckButton,
	EditButton,
	InputEdit,
	Label,
	Text,
	TextInput,
} from "../field-string/field-string.styled";
import { InputMaskDate } from "../../../../../../components/input-mask-date/input-date";
import { Field as FieldStyled, Edit } from "../info-modal.styled";
export const FieldDate: React.FC<FieldProps> = ({
	editModeInputs,
	setEditModeInputs,
	setValue,
	value,
	label,
	isNotEdit,
}) => {
	const ref = React.useRef<HTMLInputElement>(null);
	return (
		<FieldStyled isNotEdit={isNotEdit}>
			<Label>{label}</Label>
			<Text>
				{editModeInputs.date ? (
					<InputMaskDate
						ref={ref}
						setValue={setValue}
						value={value}
						className=""
						onBlur={() => {
							setEditModeInputs({ ...editModeInputs, date: false });
							if (!value) setValue("1970-01-01");
						}}
					/>
				) : (
					value
				)}
				<Edit>
					{editModeInputs.date ? (
						<CheckButton
							onClick={() => {
								setEditModeInputs({ ...editModeInputs, date: false });
							}}
						/>
					) : (
						<EditButton
							onClick={() => {
								setEditModeInputs({ ...editModeInputs, date: true });
								setTimeout(() => {
									ref!.current!.focus();
								}, 0);
							}}
						/>
					)}
				</Edit>
			</Text>
		</FieldStyled>
	);
};
