import styled from "styled-components";
import { scrollbar } from "../../../../../../styled.common";
import { Container as container } from "../modal-add/modal-add.styled";
export const Container = styled(container)`
  display: flex;
  height: 467px;
`;
export const Label = styled.p<{ active: boolean }>`
  padding: 5px;
  background-color: ${(props) => props.active && `gray`};
  cursor: pointer;
  transition: all 0.3s ease 0s;
  :hover {
    background-color: #fff;
    color: black;
  }
  margin: 0px 0px 15px 0px;
`;

export const LabelNotEvents = styled.p`
  text-align: center;
  padding: 60px 0px 0px 0px;
`;

export const Right = styled.div`
  padding: 5px;
  width: 50%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
`;

export const Left = styled(Right)`
  border-right: 1px solid white;
  width: 50%;
  ${scrollbar};
`;

export const Info = styled.p`
  margin: 0px 0px 15px 0px;
  padding: 0px 0px 5px;
  border-bottom: 1px solid white;
`;

export const Date = styled.span`
  margin: 0px 0px 0px 5px;
  font-weight: 500;
`;

export const Text = styled.p`
  margin: 0px 0px 5px 0px;
`;

export const Field = styled.p<{ isInline?: boolean }>`
  margin: 0px 5px 0px 0px;
  font-weight: 600;
  display: ${(props) => props.isInline && "inline-block"};
`;
