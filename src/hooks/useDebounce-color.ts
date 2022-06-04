import React from "react";
import { IIconsEventColor } from "../store/reducers/setting/types";

export const useDebounce = (callback: any, delay: number) => {
	const timer = React.useRef<any | null>(null);
	const debouncedCallback = React.useCallback(
		(arg: IIconsEventColor) => {
			if (timer.current) {
				clearTimeout(timer.current);
			}
			timer.current = setTimeout(() => {
				callback(arg);
			}, delay);
		},
		[callback, delay]
	);

	return debouncedCallback;
};
