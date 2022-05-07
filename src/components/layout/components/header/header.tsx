import { Layout, Row, Menu } from "antd";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { labelsRoutes } from "../../../../router";
import {
	Container,
	Action,
	ActionItem,
	Avatar,
	LinkChain,
	LinkItem,
} from "./header.styled";
const Header = () => {
	const navigate = useNavigate();
	const location = useLocation();
	console.log(location.pathname.split("/"));
	const defineLinkChain = () => {
		return location.pathname.split("/").map((el) => {
			if (el === "") return { label: "Home", path: "/" };
			return { label: labelsRoutes[el], path: el };
		});
	};
	const linkChain = React.useMemo(() => {
		if (!location.pathname.split("/").some((el) => el !== "")) return [];
		return location.pathname.split("/").map((p) => {
			if (p === "") return { label: "Home", path: "/" };
			return { label: labelsRoutes[p], path: p };
		});
	}, [location.pathname]);

	const auth = true;
	const linkSwitch = (p: string) => {
		navigate(`${p}`);
	};
	return (
		<Container>
			<LinkChain>
				{linkChain.map((el, i) => {
					return (
						<LinkItem onClick={() => linkSwitch(el.path)}>
							{el.label} {i === linkChain.length - 1 ? "" : "/"}
						</LinkItem>
					);
				})}
			</LinkChain>
			<Action>
				{auth && <Avatar>Ajgiz</Avatar>}
				<ActionItem>{auth ? "Logout" : "Login"}</ActionItem>
			</Action>
		</Container>
	);
};

export default Header;
