import { IEvent, typeEvent } from "../../../models/event";
import { SettingResponse } from "../../../models/response/setting-response";

export interface SettingStateProps {
	timezone: string;
	theme: theme;
	colorIconsEvent: IIconsEventColor;
	language: language;
	font: string;
	loading: boolean;
	error: string;
	isNotify: boolean;
	notEventReceive: boolean;
	includeAlignHolydaysEvent: boolean;
	includeAlignEvent: boolean;
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
	SET_ERROR = "SET_ERROR",
	SET_STATE = "SET_STATE",
	SET_LOADING = "SET_LOADING",
	SET_IS_NOTIFY = "SET_IS_NOTIFY",
	SET_INCLUDE_ALIGN_EVENT = "SET_INCLUDE_ALIGN_EVENT",
	SET_INCLUDE_ALIGN_HOLYDAYS_EVENT = "SET_INCLUDE_ALIGN_HOLYDAYS_EVENT",
	SET_NOT_EVENT_RECEIVE = "SET_NOT_EVENT_RECEIVE",
}

export interface SetTimezone {
	type: SettingActionEnum.SET_TIMEZONE;
	payload: string;
}

export interface SetNotReceiveEvent {
	type: SettingActionEnum.SET_NOT_EVENT_RECEIVE;
	payload: boolean;
}

export interface SetNotify {
	type: SettingActionEnum.SET_IS_NOTIFY;
	payload: boolean;
}

export interface SetIncludeAlignEvent {
	type: SettingActionEnum.SET_INCLUDE_ALIGN_EVENT;
	payload: boolean;
}

export interface SetIncludeAlignHolydaysEvent {
	type: SettingActionEnum.SET_INCLUDE_ALIGN_HOLYDAYS_EVENT;
	payload: boolean;
}

export interface SetState {
	type: SettingActionEnum.SET_STATE;
	payload: SettingResponse;
}

export interface SetLoading {
	type: SettingActionEnum.SET_LOADING;
	payload: boolean;
}

export interface SetError {
	type: SettingActionEnum.SET_ERROR;
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
	payload: IIconsEventColor;
}

export type SettingAction =
	| SetTimezone
	| SetLanguage
	| SetTheme
	| SetColorIcon
	| SetLoading
	| SetError
	| SetState
	| SetNotify
	| SetIncludeAlignEvent
	| SetIncludeAlignHolydaysEvent
	| SetNotReceiveEvent;
