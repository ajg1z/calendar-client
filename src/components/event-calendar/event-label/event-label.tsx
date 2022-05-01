import React, { FC } from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0px 0px 0px 0px;
`;
const Box = styled.div<{ color: string }>`
  font-size: 20px;
  line-height: 1;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin: 0px 0px 5px 0px;
  padding: 2px 5px;
  background-color: ${(props) => props.color};
`;
interface EventLabelProps {
  typeEvent: string;
  count: number;
}

export const EventLabel: FC<EventLabelProps> = ({ typeEvent, count }) => {
  return (
    <Container>
      {typeEvent === "holiday" ? (
        <Box color="#ffcc00">H{count > 1 ? `(${count})` : ""}</Box>
      ) : typeEvent === "weekend" ? (
        <Box color="#eb250f">W</Box>
      ) : (
        <Box color="#6be54d">E{count > 1 ? `(${count})` : ""}</Box>
      )}
    </Container>
  );
};
