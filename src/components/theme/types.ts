export interface ThemeTypes {
	colors: {
		font: string;
		base: string;
		secondary: string;
		success: string;
		danger: string;
		background: string;
	};
	fs: {
		base: number;
		title: number;
	};
	sizes: {
		width: {
			layout: string;
			calendar: string;
			footer: string;
			login: string;
		};
		height: {
			header: string;
			layout: string;
			calendar: string;
			login: string;
		};
	};
}
