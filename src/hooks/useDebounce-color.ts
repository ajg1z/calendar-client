import React from "react";
import { IColorIcon } from "../store/reducers/setting/types";

export const useDebounce = (callback: any, delay: number) => {
	const timer = React.useRef<any | null>(null);
	const debouncedCallback = React.useCallback(
		(arg: IColorIcon) => {
			// debugger;
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
