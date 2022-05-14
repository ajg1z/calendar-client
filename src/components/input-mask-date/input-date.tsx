import React from "react";
import "./input-date.scss";
import NumberFormat, { NumberFormatValues } from "react-number-format";
import { InputTimeProps } from "./input-date.types";
import { useTypesSelector } from "../../hooks/useTypedSelector";
export const InputMaskDate = React.forwardRef<HTMLInputElement, InputTimeProps>(
	({ setValue, value, className, onBlur }, ref) => {
		const { theme } = useTypesSelector((state) => state.setting);
		const [formatsCharacter, setFormatsCharacter] = React.useState({
			"1": /[0-9]/,
			"2": /[0-9]/,
			"3": /[0-9]/,
			"4": /[0-9]/,
			"5": /[0-1]/,
			"6": /[0-9]/,
		});

		const calculateCountDays = (value: string) => {
			const year = +`${value[0]}${value[1]}${value[2]}${value[3]}`;
			const month = +`${value[4]}${value[5]}`;
			return new Date(year, month, 0).getDate().toString();
		};
		return (
			<NumberFormat
				getInputRef={ref}
				onBlur={onBlur}
				onValueChange={(values) => {
					const { formattedValue, value } = values;
					setValue(formattedValue);
				}}
				isAllowed={(values: NumberFormatValues) => {
					if (values.value[4] === "1") {
						setFormatsCharacter({ ...formatsCharacter, "6": /[0-2]/ });
					} else {
						setFormatsCharacter({ ...formatsCharacter, "6": /[0-9]/ });
					}
					if (values.value[4] === "0")
						setFormatsCharacter({ ...formatsCharacter, "6": /[1-9]/ });
					switch (values.value.length) {
						case 1:
							if (formatsCharacter["1"].test(values.value[0])) return true;
							return false;
						case 2:
							if (formatsCharacter["2"].test(values.value[1])) return true;
							return false;
						case 3:
							if (formatsCharacter["3"].test(values.value[2])) return true;
							return false;
						case 4:
							if (formatsCharacter["4"].test(values.value[3])) return true;
							return false;
						case 5:
							if (formatsCharacter["5"].test(values.value[4])) return true;
							return false;
						case 6:
							if (formatsCharacter["6"].test(values.value[5])) return true;
							return false;
						case 7:
							const countDays = calculateCountDays(values.value);
							if (new RegExp(`[0-${countDays[0]}]`).test(values.value[6]))
								return true;
							return false;
						case 8: {
							const countDays = calculateCountDays(values.value);
							if (values.value[6] === "0" && values.value[7] === "0")
								return false;
							if (`${values.value[6]}${values.value[7]}` <= countDays)
								return true;
							return false;
						}
						default:
							return true;
					}
				}}
				className={"input-date-mask " + className + " " + theme}
				displayType="input"
				mask="_"
				format="####-##-##"
				value={value}
			/>
		);
	}
);
