import styled from "styled-components";

export const LabelStatus = styled.p<{ color: string }>`
	color: ${({ color }) => color};
	font-size: 16px;
	margin: 1rem 0;
`;

export const Status = styled.div`
	position: absolute;
	bottom: -25%;
	left: 10px;
`;
