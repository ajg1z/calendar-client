import React, { FC } from "react";
import { useTypesSelector } from "../../../../../../hooks/useTypedSelector";
import { EventsActionCreator } from "../../../../../../store/reducers/events/action-creators";
import { EventModal } from "../../../event-modal";
import { IModalProps } from "../modal-add/modal-add.types";
import { Container, Label } from "./modal-delete-confirm.styled";
import { modalActionCreator } from "../../../../../../store/reducers/modal/action-creators";
import { IModalDeleteConfirmProps } from "./modal-delete-confirm.types";

export const ModalDeleteConfirm: FC<IModalDeleteConfirmProps> = ({
  dispatch,
  selects,
}) => {
  const closeModalDelete = () => {
    dispatch(modalActionCreator.SetModalDelete(false));
  };

  const actionModalDelete = () => {};

  return (
    <EventModal
      footer
      action={actionModalDelete}
      close={closeModalDelete}
      height={140}
      width={600}
      leftBttn="Delete"
      rightBttn="Cancel"
      title="Remove event"
    >
      <Container>
        <Label>
          You really want to delete{" "}
          {selects.map((event) => event.split("+")[1] + " ")}
        </Label>
      </Container>
    </EventModal>
  );
};
