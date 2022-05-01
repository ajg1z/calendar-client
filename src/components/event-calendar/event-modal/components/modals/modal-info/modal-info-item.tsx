import React, { FC } from "react";
import styled from "styled-components";

interface IModalInfoProps {
  name: string;
}

const Container = styled.div`
  margin: 0px 0px 20px 0px;
`;
const Label = styled.p`
  padding: 5px;
`;
export const ModalInfoItem: FC<IModalInfoProps> = ({ name }) => {
  return (
    <Container>
      <Label>{name}</Label>
    </Container>
  );
};
