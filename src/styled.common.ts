import { css } from "styled-components";
import { theme } from "./store/reducers/setting/types";

export const flexCenter = css`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const fullPage = css`
	width: 100vw;
	color: ${(props) => props.theme.colors.font};
	font-size: ${(props) => props.theme.fs.base};
	background-color: ${(props) => props.theme.colors.background};
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
