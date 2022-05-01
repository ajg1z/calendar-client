import React from "react";
import { EventCalendar } from "../../components/event-calendar/event-calendar";
import { Container } from "./event.styled";

export const Event = () => {
  return (
    <Container>
      <EventCalendar />
    </Container>
  );
};
