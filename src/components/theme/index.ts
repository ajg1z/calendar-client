import { theme } from "../../store/reducers/setting/types";

export const Theme = (theme: theme) => {
	return {
		colors: {
			font: theme === "day" ? "black" : "white",
			base: theme === "day" ? "black" : "white",
			background: theme === "night" ? "black" : "white",
			secondary: "#c3c3c3",
			success: "#4caf50",
			danger: "#f44336",
		},
		fs: {
			base: 16,
			title: 25,
		},
		sizes: {
			width: {
				layout: "100vw",
				calendar: "100vw",
				login: "100vw",
				footer: "100vw",
			},
			height: {
				header: "60px",
				layout: "100vh",
				calendar: "100v",
				login: "100vh",
			},
		},
	};
};
