import React, { FC } from "react";
import { useTypesSelector } from "../../../../../../hooks/useTypedSelector";
import { IEvent } from "../../../../../../models/event";
import { EventModal } from "../../../event-modal";
import { IModalProps } from "../modal-add/modal-add.types";
import { ModalInfoItem } from "./modal-info-item";
import {
  Container,
  Left,
  Right,
  Label,
  LabelNotEvents,
  Info,
  Date,
  Text,
  Field,
} from "./modal-info.styled";
import { ConvertTime } from "../../../../utils/time";
import { EventsActionCreator } from "../../../../../../store/reducers/events/action-creators";
import { modalActionCreator } from "../../../../../../store/reducers/modal/action-creators";

export const ModalInfo: FC<IModalProps> = ({ dispatch }) => {
  const { selected } = useTypesSelector((state) => state.event);
  const [selectedEvent, setSelectedEvent] = React.useState<IEvent | null>(null);
  const actionModalInfo = () => {};

  const closeModalInfo = () => {
    dispatch(modalActionCreator.SetModalInfo(false));
  };
  return (
    <EventModal
      action={actionModalInfo}
      close={closeModalInfo}
      height={500}
      width={900}
      leftBttn=""
      rightBttn="Close"
      title="Events"
    >
      <Container>
        <Left>
          {!selected?.events.length && (
            <LabelNotEvents>Not events</LabelNotEvents>
          )}
          {selected!.events.map((el) => {
            return (
              <Label
                active={selectedEvent?.id === el.id}
                onClick={() => setSelectedEvent(el)}
              >
                {el.title}
              </Label>
            );
          })}
        </Left>

        <Right>
          <Info>
            Date:
            <Date>{ConvertTime(selected!.day)}</Date>.
            <Date>{ConvertTime(selected!.month)}</Date>.
            <Date>{ConvertTime(selected!.year)}</Date>
          </Info>
          {selectedEvent ? (
            <>
              <Text>
                <Field isInline>Title:</Field> {selectedEvent.title}
              </Text>
              <Text>
                <Field isInline>Time:</Field> {selectedEvent.time}
              </Text>
              <Text>
                <Field isInline>Description:</Field>
                {selectedEvent.description}
              </Text>
            </>
          ) : (
            <Text>
              {selected!.events.length && !selectedEvent
                ? "Select event"
                : "Not event for select"}
            </Text>
          )}
        </Right>
      </Container>
    </EventModal>
  );
};
