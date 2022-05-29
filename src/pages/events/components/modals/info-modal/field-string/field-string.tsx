import React, { RefObject } from "react";
import { FieldProps } from "./field-string.types";
import {
	Button,
	Buttons,
	CheckButton,
	EditButton,
	InputEdit,
	Label,
	Text,
	TextInput,
} from "./field-string.styled";
import { Field as FieldStyled, Edit } from "../info-modal.styled";
export const FieldString: React.FC<FieldProps> = ({
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
