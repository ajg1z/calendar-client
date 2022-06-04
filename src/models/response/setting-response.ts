import { IIconsEventColor, theme } from "../../store/reducers/setting/types";

export interface SettingResponse {
	_id: string;
	user: string;
	timezone: string;
	theme: theme;
	colorIconsEvent: IIconsEventColor;
	isNotify: boolean;
	notEventReceive: boolean;
	includeAlignHolydaysEvent: boolean;
	includeAlignEvent: boolean;
}
