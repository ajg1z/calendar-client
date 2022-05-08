import React, { RefObject } from "react";
import { FieldProps } from "./field-string.types";
import {
	Button,
	Buttons,
	CheckButton,
	Edit,
	EditButton,
	Field as FieldStyled,
	InputEdit,
	Label,
	Text,
	TextInput,
} from "./field-string.styled";

export const FieldString: React.FC<FieldProps> = ({
	editModeInputs,
	setEditModeInputs,
	setValue,
	value,
	label,
}) => {
	const ref = React.useRef<HTMLInputElement>(null);
	return (
		<FieldStyled>
			<Label>{label}</Label>
			<Text>
				{editModeInputs.title ? (
					<InputEdit
						ref={ref}
						onChange={(e) => {
							setValue(e.target.value);
						}}
						value={value}
						onBlur={() => {
							setEditModeInputs({ ...editModeInputs, title: false });
							if (!value) setValue("this field must not be empty");
						}}
					/>
				) : (
					value
				)}
				<Edit>
					{editModeInputs.title ? (
						<CheckButton
							onClick={() => {
								setEditModeInputs({ ...editModeInputs, title: false });
							}}
						/>
					) : (
						<EditButton
							onClick={() => {
								setEditModeInputs({ ...editModeInputs, title: true });
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
