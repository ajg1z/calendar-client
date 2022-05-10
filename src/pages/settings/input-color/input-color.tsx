import React from "react";
import { useDispatch } from "react-redux";
import { useDebounce } from "../../../hooks/useDebounce-color";
import { typeEvent } from "../../../models/event";
import { SettingActionCreater } from "../../../store/reducers/setting/action-creators";
import { IColorIcon } from "../../../store/reducers/setting/types";
import { Container, Icon, Color } from "./input-color.styled";

export const InputColor: React.FC<{
	icon: string;
	type: typeEvent;
	value: string;
}> = ({ icon, type, value }) => {
	const dispatch = useDispatch();
	const [color, setColor] = React.useState(value);

	const debouncedSetColor = useDebounce((arg: IColorIcon) => {
		dispatch(SettingActionCreater.SetColorIcon(arg));
	}, 500);

	const ref = React.useRef<HTMLInputElement | null>(null);
	return (
		<Container onClick={() => ref.current!.click()}>
			<Color
				onChange={(e) => {
					debouncedSetColor({ value: e.target.value, type });
					setColor(e.target.value);
				}}
				value={color}
				ref={ref}
				type="color"
			/>
			<Icon>{icon}</Icon>
		</Container>
	);
};
