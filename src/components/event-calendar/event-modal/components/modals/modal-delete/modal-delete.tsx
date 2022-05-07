import React from "react";
import { EventModal } from "../../../event-modal";

import { IModalProps } from "../modal-add/modal-add.types";
import { IModalDeleteProps, ISelects } from "./modal-delete.types";
import "./mui-select.scss";
import { makeStyles } from "@mui/material";
import { modalActionCreator } from "../../../../../../store/reducers/modal/action-creators";
import { EventsActionCreator } from "../../../../../../store/reducers/events/action-creators";
import { Title, Container, WrapperSelect, Label } from "./modal-delete.styled";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";
import { FormControl, InputBase } from "@mui/material";
import { useTypesSelector } from "../../../../../../hooks/useTypedSelector";

export const ModalDelete: React.FC<IModalDeleteProps> = ({
  dispatch,
  selected,
}) => {
  const [selects, setSelects] = React.useState<string[]>([]);

  const closeModalDelete = () => {
    dispatch(modalActionCreator.SetModalDelete(false));
  };

  const actionModalDelete = () => {
    if (!selects) return;
    if (!selected) return;
    dispatch(
      EventsActionCreator.RemoveEvent({
        id: selects,
        month: selected.month,
        year: selected.year,
      })
    );
    dispatch(
      EventsActionCreator.SetSelectDay({
        ...selected,
        events: selected!.events.filter((event) => {
          let valid = true;
          selects.forEach((el) => {
            if (el === event.id) valid = false;
          });
          return valid;
        }),
      })
    );
    setSelects([] as string[]);
  };

  const handleChange = (event: SelectChangeEvent<typeof selects>) => {
    const {
      target: { value },
    } = event;
    setSelects(value as string[]);
  };

  return (
    <>
      <EventModal
        disabled={!selects.length}
        footer
        action={actionModalDelete}
        close={closeModalDelete}
        height={210}
        width={600}
        leftBttn="Delete"
        rightBttn="Cancel"
        title="Remove event"
      >
        <Container>
          <Title>Select event which want remove</Title>
          <WrapperSelect>
            {!selected!.events.length ? (
              <Label>This day not have events</Label>
            ) : (
              <Select
                sx={{
                  width: "220px",
                  "-ms-overflow-style": "none",
                  "scrollbar-width": "none",
                  "::-webkit-scrollbar": {
                    cursor: "pointer",
                    width: 0,
                    height: 0,
                  },
                }}
                value={selects}
                onChange={handleChange}
                multiple
              >
                {selected?.events.map((event) => {
                  return <MenuItem value={event.id}>{event.title}</MenuItem>;
                })}
              </Select>
            )}
          </WrapperSelect>
        </Container>
      </EventModal>
    </>
  );
};
