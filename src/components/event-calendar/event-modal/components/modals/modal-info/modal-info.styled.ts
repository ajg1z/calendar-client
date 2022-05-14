import styled from "styled-components";
import { scrollbar } from "../../../../../../styled.common";
import { Container as container } from "../modal-add/modal-add.styled";

export const Container = styled(container)`
	display: flex;
`;
export const Label = styled.p<{ active: boolean }>`
	padding: 5px;
	background-color: ${(props) => props.active && `gray`};
	cursor: pointer;
	transition: all 0.3s ease 0s;
	:hover {
		background-color: ${(props) => props.theme.colors.base};
		color: ${(props) => props.theme.colors.background};
	}
	margin: 0px 0px 15px;
`;

export const LabelNotEvents = styled.p`
	text-align: center;
	padding: 60px 0px 0px;
`;

export const Right = styled.div`
	padding: 5px;
	width: 50%;
	height: 100%;
	overflow-y: auto;
	overflow-x: hidden;
`;

export const Left = styled(Right)`
	border-right: 1px solid  ${props=>props.theme.colors.base};;
	${scrollbar};
`;

export const Info = styled.p`
	margin: 0px 0px 10px;
	padding: 0px 0px 5px;
	border-bottom: 1px solid  ${props=>props.theme.colors.base};;
`;

export const Date = styled.span`
	font-weight: 500;
`;

export const Field = styled.p<{ isInline?: boolean }>`
	margin: 0px 5px 0px 0px;
	font-weight: 600;
	display: ${(props) => props.isInline && "inline-block"};
`;
