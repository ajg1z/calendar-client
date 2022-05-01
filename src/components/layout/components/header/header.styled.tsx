import styled from "styled-components";
import { flexCenter } from "../../../../styled.common";

export const Container = styled.div`
  width: 100%;
  display: flex;
  height: ${({ theme }) => theme.sizes.height.header};
  background-color: ${({ theme }) => theme.colors.base};
  padding: 5px 15px;
  justify-content: flex-end;
`;

export const Action = styled.div`
  position: relative;
  ${flexCenter}
  justify-content: space-between;
`;

export const ActionItem = styled.div`
  padding: 0px 15px;
  height: 100%;
  display: flex;
  color: ${({ theme }) => theme.colors.font};
  transition: all 0.3s ease 0s;
  align-items: center;
  cursor: pointer;
  :hover {
    color: black;
    background-color: #fff;
  }
`;

export const Avatar = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width: 35px;
  margin: 0px 30px 0px 0px;
  color: ${({ theme }) => theme.colors.font}; ;
`;
