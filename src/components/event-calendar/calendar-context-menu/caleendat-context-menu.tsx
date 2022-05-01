import React, { FC } from "react";
import {
  Menu,
  Item,
  Separator,
  Submenu,
  useContextMenu,
} from "react-contexify";
import "react-contexify/dist/ReactContexify.css";
import { useDispatch } from "react-redux";
import { EventsActionCreator } from "../../../store/reducers/events/action-creators";
import { ISelectedDay } from "../../../store/reducers/events/types";
import { modalActionCreator } from "../../../store/reducers/modal/action-creators";

export const ContextDay: FC<{ id: string; selected: ISelectedDay | null }> = ({
  id,
  selected,
}) => {
  const dispatch = useDispatch();

  const handleAddEvent = () => {
    dispatch(modalActionCreator.SetModalAdd(true));
  };

  const handleRemoveEvent = () => {
    dispatch(modalActionCreator.SetModalDelete(true));
  };

  const handleShareEvent = () => {
    dispatch(modalActionCreator.SetModalShare(true));
  };

  const handleInfoEvent = () => {
    dispatch(modalActionCreator.SetModalInfo(true));
  };

  return (
    <Menu animation={false} id={id}>
      <Item onClick={handleAddEvent}>Add event</Item>
      {selected && selected.events.length && (
        <Item onClick={handleShareEvent}>Share event</Item>
      )}
      <Item onClick={handleInfoEvent}>Show info</Item>
      {selected && selected.events.length && (
        <>
          <Separator />
          <Item onClick={handleRemoveEvent}>Remove event</Item>
        </>
      )}
    </Menu>
  );
};
