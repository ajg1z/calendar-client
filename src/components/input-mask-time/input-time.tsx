import React from "react";
import "./input-time.scss";
import NumberFormat, { NumberFormatValues } from "react-number-format";
import { InputTimeProps } from "./input-time.types";
export const InputMaskTime = React.forwardRef<HTMLInputElement, InputTimeProps>(
	({ setValue, value, className, onBlur }, ref) => {
		const formatsCharacter = {
			"1": /[0-2]/,
			"2": /[0-9]/,
			"3": /[0-5]/,
			"4": /[0-9]/,
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
					if (values.value[0] === "2") {
						formatsCharacter["2"] = /[0-3]/;
					} else {
						formatsCharacter["2"] = /[0-9]/;
					}

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
						default:
							return true;
					}
				}}
				className={"input-time-mask " + className}
				displayType="input"
				mask="_"
				format="##:##"
				value={value}
			/>
		);
	}
);
