import { css } from "styled-components";

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const scrollbar = css`
  ::-webkit-scrollbar {
    cursor: pointer;
    width: 5px;
  }
  ::-webkit-scrollbar-thumb {
    width: 2px;
    background-color: #fff;
  }
`;
