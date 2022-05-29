import { columnType } from "../../../../events.types";

export interface FieldProps {
	value: string;
	setValue: React.Dispatch<React.SetStateAction<string>>;
	label: string;
	editModeInputs: {
		title: boolean;
		description: boolean;
		time: boolean;
		date: boolean;
	};
	setEditModeInputs: React.Dispatch<
		React.SetStateAction<{
			title: boolean;
			description: boolean;
			time: boolean;
			date: boolean;
		}>
	>;
	isNotEdit: boolean;
}
