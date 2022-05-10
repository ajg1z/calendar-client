import React from "react";

export const useDebounce = (callback: (arg: string) => void, delay: number) => {
	const timer = React.useRef<any | null>(null);
	const debouncedCallback = React.useCallback(
		(arg: string) => {
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
