import React from "react";
import { NavLink } from "react-router-dom";
import { Container, MenuStyled } from "./menu.styled";
import "./menu.scss";

export const Menu = () => {
	return (
		<Container>
			<MenuStyled>
				{" "}
				<NavLink className="nav-link-menu" to="/calendar">
					Calendar
				</NavLink>
				<NavLink className="nav-link-menu" to="/events">
					My events
				</NavLink>
				<NavLink className="nav-link-menu" to="/setting">
					Settings
				</NavLink>
			</MenuStyled>
		</Container>
	);
};
