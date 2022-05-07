import React from "react";
import { EventCalendar } from "../../components/event-calendar/event-calendar";
import { Container } from "./calendar.styled";

export const Calendar = () => {
  return (
    <Container>
      <EventCalendar />
    </Container>
  );
};
