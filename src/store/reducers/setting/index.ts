import { SettingAction, SettingActionEnum, SettingStateProps } from "./types";

const initialState: SettingStateProps = {
	colorIconsEvent: {
		holiday: "#ecb11c",
		myEvent: "#16d346",
		weekend: "#e11111",
	},
	font: "",
	language: "en",
	theme: "night",
	timezone: "UTC-2",
};

export default function settingReducer(
	state: SettingStateProps = initialState,
	action: SettingAction
): SettingStateProps {
	switch (action.type) {
		case SettingActionEnum.SET_TIMEZONE:
			return { ...state, timezone: action.payload };
		case SettingActionEnum.SET_THEME:
			return { ...state, theme: action.payload };
		case SettingActionEnum.SET_LANGUAGE:
			return { ...state, language: action.payload };
		case SettingActionEnum.SET_COLOR_ICON:
			return {
				...state,
				colorIconsEvent: {
					...state.colorIconsEvent,
					[action.payload.type]: action.payload.value,
				},
			};
		default:
			return state;
	}
}
