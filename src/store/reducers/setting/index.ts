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
	loading: false,
	error: "",
	includeAlignEvent: true,
	includeAlignHolydaysEvent: false,
	isNotify: true,
	notEventReceive: false,
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
		case SettingActionEnum.SET_ERROR:
			return {
				...state,
				error: action.payload,
			};
		case SettingActionEnum.SET_LOADING:
			return {
				...state,
				loading: action.payload,
			};
		case SettingActionEnum.SET_COLOR_ICON:
			return {
				...state,
				colorIconsEvent: action.payload,
			};
		case SettingActionEnum.SET_NOT_EVENT_RECEIVE:
			return {
				...state,
				notEventReceive: action.payload,
			};	
		case SettingActionEnum.SET_INCLUDE_ALIGN_EVENT:
			return {
				...state,
				includeAlignEvent: action.payload,
			};

		case SettingActionEnum.SET_INCLUDE_ALIGN_HOLYDAYS_EVENT:
			return {
				...state,
				includeAlignHolydaysEvent: action.payload,
			};

		case SettingActionEnum.SET_IS_NOTIFY:
			return {
				...state,
				isNotify: action.payload,
			};
		case SettingActionEnum.SET_STATE:
			return {
				...state,
				colorIconsEvent: action.payload.colorIconsEvent,
				theme: action.payload.theme,
				timezone: action.payload.timezone,
				includeAlignEvent: action.payload.includeAlignEvent,
				isNotify: action.payload.isNotify,
				includeAlignHolydaysEvent: action.payload.includeAlignHolydaysEvent,
				notEventReceive: action.payload.notEventReceive,
			};
		default:
			return state;
	}
}
