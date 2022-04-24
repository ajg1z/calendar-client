export interface ISelectContainerProps {
    width: number;
}

export interface ISelectProps {
    value: number;
    height: string;
    width: string;
    arrOptions: IOption[];
    setValue: any;
    defaultLabel: number | string
}

export interface IOption {
    label: string;
    value: number | string
}


export interface ILabel {
    width: number;
    height: number;
    open: boolean
}