import { flexCenter, scrollbar } from "./../../styled.common";
import { ILabel } from "./select.types";
import styles from "styled-components";
import { styled } from "@mui/material/styles";
import { FormControl } from "@mui/material";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export const Container = styles.div`
    position: relative;
`;

export const CSelect = styled(Select)``;

export const COption = styled(MenuItem)``;

export const CFormControl = styled(FormControl)`
  &.MuiPaper-root {
    width: 80px;
  }
  & .MuiList-root {
    ::-webkit-scrollbar {
      width: 5px;
      background-color: black;
    }
  }
`;

export const Input = styles.input`
opacity: 0;
width:0px;
cursor: default;
`;

export const Option = styles.div<{ height: number }>`
width:100%;
cursor: pointer;
${flexCenter}
height:${({ height }) => height}px;
border-top: 1px solid white;
transition: all 0.3s ease 0s;
:hover{
    background-color: #fff;
    color:black;
}
`;

export const Label = styles.div<ILabel>`
border:1px solid white;
${flexCenter};
border-bottom: ${({ open }) => (!open ? "1px solid white" : "none")};
cursor: pointer;
height: ${({ height }) => height}px;
width: ${({ width }) => width}px;
`;

export const ListOptions = styles.div<{ open: boolean }>`
overflow: auto;
position: absolute;
right: 0;
left: 0;
bottom: 0;
z-index: 5;
opacity: 0;
visibility: hidden;
${({ open }) =>
  open &&
  `
opacity: 1;
visibility: visible;
`}
height:${({ open }) => !open && `0px`};
transition: all 0.3s ease 0s;
transform:translate(0,100%);
height: 260px;
${scrollbar}
`;
