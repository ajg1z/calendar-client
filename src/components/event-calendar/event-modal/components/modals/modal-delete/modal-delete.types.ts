import { ISelectedDay } from ".././../../../../../store/reducers/events/types";
import { IModalProps } from "./../modal-add/modal-add.types";

export interface IModalDeleteProps extends IModalProps {
  selected: ISelectedDay | null;
}

export interface ISelects {
  value: string;
  title: string;
}
