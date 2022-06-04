import { AppDispatch } from "./../../index";
import { typeEvent } from "../../../models/event";
import {
	SettingActionEnum,
	SetColorIcon,
	SetTheme,
	theme,
	SettingStateProps,
	IIconsEventColor,
} from "./types";
import { SettingService } from "../../../http/setting.service";
import { SettingResponse } from "../../../models/response/setting-response";

export const SettingActionCreater = {
	SetLoading: (value: boolean) => ({
		type: SettingActionEnum.SET_LOADING,
		payload: value,
	}),
	SetError: (value: string) => ({
		type: SettingActionEnum.SET_ERROR,
		payload: value,
	}),
	SetStateSetting: (value: SettingResponse) => ({
		type: SettingActionEnum.SET_STATE,
		payload: value,
	}),
	GetSetting: () => async (dispatch: AppDispatch) => {
		try {
			dispatch(SettingActionCreater.SetLoading(true));
			const setting = await SettingService.getSetting();
			dispatch(SettingActionCreater.SetStateSetting(setting));
		} catch (e: any) {
			dispatch(SettingActionCreater.SetError(e));
		} finally {
			dispatch(SettingActionCreater.SetLoading(false));
		}
	},
	ChangeTheme: (value: theme) => async (dispatch: AppDispatch) => {
		try {
			dispatch(SettingActionCreater.SetLoading(true));
			const updatedData = await SettingService.changeSetting({ theme: value });
			dispatch({
				type: SettingActionEnum.SET_THEME,
				payload: updatedData.theme,
			});
		} catch (e: any) {
			dispatch(SettingActionCreater.SetError(e));
		} finally {
			dispatch(SettingActionCreater.SetLoading(false));
		}
	},
	ChangeColorIcon:
		(value: IIconsEventColor) => async (dispatch: AppDispatch) => {
			try {
				dispatch(SettingActionCreater.SetLoading(true));
				const updatedData = await SettingService.changeSetting({
					colorIconsEvent: value,
				});

				dispatch({
					type: SettingActionEnum.SET_COLOR_ICON,
					payload: updatedData.colorIconsEvent,
				});
			} catch (e: any) {
				dispatch(SettingActionCreater.SetError(e));
			} finally {
				dispatch(SettingActionCreater.SetLoading(false));
			}
		},
	ChangeIsNotify: (value: boolean) => async (dispatch: AppDispatch) => {
		try {
			dispatch(SettingActionCreater.SetLoading(true));
			const updatedData = await SettingService.changeSetting({
				isNotify: value,
			});
			dispatch({
				type: SettingActionEnum.SET_IS_NOTIFY,
				payload: updatedData.isNotify,
			});
		} catch (e: any) {
			dispatch(SettingActionCreater.SetError(e));
		} finally {
			dispatch(SettingActionCreater.SetLoading(false));
		}
	},
	ChangeIncludeAlignEvent:
		(value: boolean) => async (dispatch: AppDispatch) => {
			try {
				dispatch(SettingActionCreater.SetLoading(true));
				const updatedData = await SettingService.changeSetting({
					includeAlignEvent: value,
				});
				dispatch({
					type: SettingActionEnum.SET_INCLUDE_ALIGN_EVENT,
					payload: updatedData.includeAlignEvent,
				});
			} catch (e: any) {
				dispatch(SettingActionCreater.SetError(e));
			} finally {
				dispatch(SettingActionCreater.SetLoading(false));
			}
		},
	ChangeIncludeAlignHolydaysEvent:
		(value: boolean) => async (dispatch: AppDispatch) => {
			try {
				dispatch(SettingActionCreater.SetLoading(true));
				const updatedData = await SettingService.changeSetting({
					includeAlignHolydaysEvent: value,
				});
				dispatch({
					type: SettingActionEnum.SET_INCLUDE_ALIGN_HOLYDAYS_EVENT,
					payload: updatedData.includeAlignHolydaysEvent,
				});
			} catch (e: any) {
				dispatch(SettingActionCreater.SetError(e));
			} finally {
				dispatch(SettingActionCreater.SetLoading(false));
			}
		},
	ChangeNotEventReceive: (value: boolean) => async (dispatch: AppDispatch) => {
		try {
			dispatch(SettingActionCreater.SetLoading(true));
			const updatedData = await SettingService.changeSetting({
				notEventReceive: value,
			});
			dispatch({
				type: SettingActionEnum.SET_NOT_EVENT_RECEIVE,
				payload: updatedData.notEventReceive,
			});
		} catch (e: any) {
			dispatch(SettingActionCreater.SetError(e));
		} finally {
			dispatch(SettingActionCreater.SetLoading(false));
		}
	},
};
