import { ReactChild, ReactNode } from "react";

export interface IEventModalProps {
    footer?: boolean;
    title: string;
    close: () => void;
    leftBttn: string;
    rightBttn: string;
    children: ReactNode;
    width: number;
    height: number;
    disabled?: boolean;
    action: () => void
}

export interface IContainerProps {
    width: number;
    height: number
}

