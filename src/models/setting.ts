import { IIconsEventColor } from "../store/reducers/setting/types";
import { theme } from "../store/reducers/setting/types";

export interface SettingUpdate {
	timezone?: string;
	theme?: theme;
	colorIconsEvent?: IIconsEventColor;
	isNotify?: boolean;
	notEventReceive?: boolean;
	includeAlignHolydaysEvent?: boolean;
	includeAlignEvent?: boolean;
}
