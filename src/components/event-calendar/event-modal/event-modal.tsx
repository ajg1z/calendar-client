import React, { FC } from "react";
import { IEventModalProps } from "./event-modal.types";
import {
	Background,
	Body,
	Button,
	Close,
	Container,
	Footer,
	Top,
	Text
} from "./event.modal.styled";
import ReactDOM from "react-dom";
import { useSpring, animated, useTransition } from "react-spring";
import { useTypesSelector } from "../../../hooks/useTypedSelector";

export const EventModal: FC<IEventModalProps> = ({
	children,
	close,
	leftBttn,
	rightBttn,
	title,
	footer,
	height,
	width,
	action,
	disabled,
	customFooter,
	isModal,
}) => {
	const transition = useTransition(isModal, {
		enter: { scale: 1 },
		from: { scale: 0 },
		leave: { scale: 0 },
		config: { duration: 300 },
	});
	return ReactDOM.createPortal(
		transition((style, item: boolean) => {
			return (
				item && (
					<Background>
						<Container style={style} width={width} height={height}>
							<Top>
								<Text>{title}</Text>
								<Close onClick={close}>╳</Close>
							</Top>
							<Body>{children}</Body>
							{!footer && customFooter && customFooter()}
							{footer && (
								<Footer>
									{leftBttn !== "" && (
										<Button disabled={disabled} onClick={action}>
											{leftBttn}
										</Button>
									)}
									{rightBttn !== "" && (
										<Button onClick={close}>{rightBttn}</Button>
									)}
								</Footer>
							)}
						</Container>
					</Background>
				)
			);
		}),
		document.body
	);
};
