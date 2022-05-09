import { ReactChild, ReactNode } from "react";

export interface IEventModalProps {
	footer?: boolean;
	title: string;
	close: () => void;
	leftBttn: string;
	rightBttn: string;
	children: ReactNode;
	width: number | string;
	height: number | string;
	disabled?: boolean;
	action: () => void;
	customFooter?: ()=>any;
}

export interface IContainerProps {
	width: number | string;
	height: number | string;
}
