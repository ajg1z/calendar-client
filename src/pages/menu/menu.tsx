import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Link, MenuStyled } from "./menu.styled";

export const Menu = () => {
	return (
		<Container>
			<MenuStyled>
				<Link>
					{" "}
					<NavLink to="/calendar">Calendar</NavLink>
				</Link>
				<Link>
					<NavLink to="/events">My events</NavLink>
				</Link>
				<Link>
					<NavLink to="/settings">Settings</NavLink>
				</Link>
			</MenuStyled>
		</Container>
	);
};
