import styled from "styled-components";
import { scrollbar } from "../../../../../../styled.common";
import { Label as L } from "../../../../event-calendar.styled";

export const Container = styled.div`
	width: 100%;
	height: 100%;
`;

export const LineInput = styled.div`
	width: 90%;
	margin: 10px auto;
`;

export const Textarea = styled.textarea.attrs((props) => {
	return { rows: 5 };
})`
	resize: none;
	width: 100%;
	background-color: black;
	outline: 1px solid white;
	display: block;
	padding: 5px;
	${scrollbar}
`;

export const Input = styled.input`
	padding: 0px 5px;
	width: 100%;
	color: white;
	background-color: black;
	height: 40px;
	outline: 1px solid white;
	font-size: 18px;
`;

export const Label = styled(L)`
	font-size: 18px;
  margin:0px 0px 5px;
`;
