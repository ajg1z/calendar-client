import { flexCenter } from "../../../styled.common";
import styled from "styled-components";
import { Hour } from "../event-calendar.styled";

export const Container = styled.div`
	width: 100%;
	position: relative;
	${flexCenter};
`;
export const Img = styled(Hour)`
	position: absolute;
	top: 0;
	left: 11%;
`;
