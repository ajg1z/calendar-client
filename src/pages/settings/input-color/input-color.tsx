import React from "react";
import { useDispatch } from "react-redux";
import { useDebounce } from "../../../hooks/useDebounce-color";
import { typeEvent } from "../../../models/event";
import { SettingActionCreater } from "../../../store/reducers/setting/action-creators";
import { IIconsEventColor } from "../../../store/reducers/setting/types";
import { Container, Icon, Color } from "./input-color.styled";

export const InputColor: React.FC<{
	icon: string;
	type: typeEvent;
	value: IIconsEventColor;
}> = ({ icon, type, value }) => {
	const dispatch = useDispatch();
	const [color, setColor] = React.useState(value);

	const debouncedSetColor = useDebounce((arg: IIconsEventColor) => {
		dispatch(SettingActionCreater.ChangeColorIcon(arg));
	}, 500);

	const ref = React.useRef<HTMLInputElement | null>(null);
	return (
		<Container onClick={() => ref.current!.click()}>
			<Color
				onChange={(e) => {
					debouncedSetColor({ [type]: e.target.value, ...color });
					setColor({ ...color, [type]: e.target.value });
				}}
				value={color[type]}
				ref={ref}
				type="color"
			/>
			<Icon>{icon}</Icon>
		</Container>
	);
};
