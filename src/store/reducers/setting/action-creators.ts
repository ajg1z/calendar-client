import { typeEvent } from "../../../models/event";
import { SettingActionEnum, SetColorIcon, IColorIcon, SetTheme, theme } from "./types";

export const SettingActionCreater = {
	SetColorIcon: (value: IColorIcon): SetColorIcon => ({
		type: SettingActionEnum.SET_COLOR_ICON,
		payload: value,
	}),
	SetTheme:(value:theme):SetTheme=>({
		type:SettingActionEnum.SET_THEME,
		payload:value
	})
};
