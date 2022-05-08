import { flexCenter, scrollbar } from "../../../../../../styled.common";
import styled, { StyledComponent } from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

export const Edit = styled.div`
	opacity: 0;
	visibility: hidden;
	position: absolute;
	top: -5px;
	right: 0;
	border-radius: 50%;
	z-index: 10;
	background-color: black;
	cursor: pointer;
`;

export const EditButton = styled(EditIcon)`
	width: 45px;
	height: 45px;
	padding: 10px;
	border-radius: 50%;
	border-top: 1px solid white;
	border-bottom: 1px solid white;
`;

export const CheckButton = styled(CheckIcon)`
	width: 45px;
	height: 45px;
	padding: 10px;
	border-radius: 50%;
	border-top: 1px solid white;
	border-bottom: 1px solid white;
`;

export const TextInput = styled.textarea`
	padding: 0px 0px 0px 5px;
	background-color: black;
	border: 1px solid white;
	width: 85%;
	${scrollbar};
`;

export const Buttons = styled.div`
	${flexCenter};
	justify-content: space-between;
`;

export const Button = styled.button`
	margin: 0px 10px 0px;
	:disabled {
		opacity: 0.5;
	}
	height: 35px;
	padding: 0px 20px;
	cursor: pointer;
	background-color: black;
	border: 1px solid white;
	outline: none;
`;

export const InputEdit = styled.input`
	padding: 0px 0px 0px 5px;
	height: 35px;
	outline: none;
	width: 80%;
	border: 1px solid white;
	background-color: black;
	color: white;
`;

export const Field = styled.div`
	margin: 0px 0px 10px 0px;
	position: relative;
	:hover {
		${Edit} {
			transition: all 0.3s ease 0s;
			opacity: 1;
			visibility: visible;
		}
	}
`;

export const Label = styled.label`
	font-size: 20px;
	border-bottom: 1px solid white;
	display: block;
	margin: 0px 0px 15px 0px;
`;

export const Text = styled.p`
	position: relative;
	min-height: 40px;
`;