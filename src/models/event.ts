export interface IEvent {
  title: string;
  description: string;
  typeEvent: "holiday" | "weekend" | "myEvent";
  year: null | number;
  month: number;
  day: number;
  id: string;
  time:string
}

export interface IYear {
  year: number;
  month: IMonth[];
}

export interface IMonth {
  month: number;
  events: IEvent[];
}
