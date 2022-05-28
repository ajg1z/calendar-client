import styled, { keyframes } from "styled-components";
import { LoaderRotate } from "./loader-rotate/loader-rotate";
const move = keyframes`
	0% {
		right:10%
	}
	10% {
		right:20%
	}
	20% {
		right:30%
	}
	30% {
		right:40%
	}
	40% {
		right:50%
	}
	50% {
		right:60%
	}
	60% {
		right:70%
	}
	70% {
		right:80%
	}
	80% {
		right:90%
	}
`;

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: black;
	position: relative;
`;

export const TextLoader = styled.p`
	font-size: 18px;
	padding: 2rem;
	display: flex;
	align-items: center;
	color: white;
	position: absolute;
	bottom: 2rem;
	right: 4rem;
	transform: translateY(-50%);
`;

export const Loader: React.FC = () => {
	return (
		<Container>
			<TextLoader>
				<LoaderRotate />
			</TextLoader>
		</Container>
	);
};
