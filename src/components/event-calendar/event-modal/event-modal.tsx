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
} from "./event.modal.styled";
import ReactDOM from "react-dom";

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
}) => {
	return ReactDOM.createPortal(
		<Background>
			<Container width={width} height={height}>
				<Close onClick={close}>x</Close>
				<Top>{title}</Top>
				<Body>{children}</Body>
				{!footer && customFooter && customFooter()}
				{footer && (
					<Footer>
						{leftBttn !== "" && (
							<Button disabled={disabled} onClick={action}>
								{leftBttn}
							</Button>
						)}
						{rightBttn !== "" && <Button onClick={close}>{rightBttn}</Button>}
					</Footer>
				)}
			</Container>
		</Background>,
		document.body
	);
};
