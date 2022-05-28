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
	color: ${(props) => props.theme.colors.font};
	resize: none;
	width: 100%;
	font-size: ${(props) => props.theme.fs.base}px;
	background-color: ${(props) => props.theme.colors.background};
	outline: 1px solid ${(props) => props.theme.colors.base};
	display: block;
	padding: 5px;
	${scrollbar}
`;

export const Input = styled.input`
	padding: 0px 5px;
	font-size: ${(props) => props.theme.fs.base}px;
	width: 100%;
	color: ${(props) => props.theme.colors.font};
	background-color: ${(props) => props.theme.colors.background};
	height: 40px;
	outline: 1px solid ${(props) => props.theme.colors.base};
`;

export const Label = styled(L)`
	font-size: 18px;
	margin: 0px 0px 5px;
`;
