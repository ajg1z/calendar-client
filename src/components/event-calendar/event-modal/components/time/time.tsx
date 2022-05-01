import React from "react";
import { ConvertTime } from "../../../utils/time";
import { Container, Label, LabelTime, SwitchUTC } from "./time.styled";

export const Time = () => {
  const [modeTime, setModeTime] = React.useState("local");
  const [hour, setHour] = React.useState(
    modeTime === "local" ? new Date().getHours() : new Date().getUTCHours()
  );
  const [minit, setMinit] = React.useState(
    modeTime === "local" ? new Date().getMinutes() : new Date().getUTCMinutes()
  );
  const [seconds, setSeconds] = React.useState(
    modeTime === "local" ? new Date().getSeconds() : new Date().getUTCSeconds()
  );
  React.useEffect(() => {
    setInterval(() => {
      setHour(
        modeTime === "local" ? new Date().getHours() : new Date().getUTCHours()
      );
      setMinit(
        modeTime === "local"
          ? new Date().getMinutes()
          : new Date().getUTCMinutes()
      );
      setSeconds(
        modeTime === "local"
          ? new Date().getSeconds()
          : new Date().getUTCSeconds()
      );
    }, 1000);
  }, []);

  return (
    <Container>
      <LabelTime>
        {ConvertTime(hour)}:{ConvertTime(minit)}:{ConvertTime(seconds)}
      </LabelTime>
    </Container>
  );
};
