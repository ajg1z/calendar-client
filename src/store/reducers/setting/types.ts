import { IEvent, typeEvent } from "../../../models/event";

export interface SettingStateProps {
	timezone: string;
	theme: theme;
	colorIconsEvent: IIconsEventColor;
	language: language;
	font: string;
}
export type theme = "day" | "night";
export type language = "ru" | "en";

export interface IIconsEventColor {
	weekend: string;
	holiday: string;
	myEvent: string;
}

export enum SettingActionEnum {
	SET_TIMEZONE = "SET_TIMEZONE",
	SET_THEME = "SET_THEME",
	SET_LANGUAGE = "SET_LANGUAGE",
	SET_COLOR_ICON = "SET_COLOR_ICON",
}

export interface SetTimezone {
	type: SettingActionEnum.SET_TIMEZONE;
	payload: string;
}

export interface SetLanguage {
	type: SettingActionEnum.SET_LANGUAGE;
	payload: language;
}

export interface SetTheme {
	type: SettingActionEnum.SET_THEME;
	payload: theme;
}

export interface SetColorIcon {
	type: SettingActionEnum.SET_COLOR_ICON;
	payload: IColorIcon;
}

export interface IColorIcon {
	value: string;
	type: typeEvent;
}

export type SettingAction = SetTimezone | SetLanguage | SetTheme | SetColorIcon;
