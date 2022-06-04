import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { useTypesSelector } from "../../../../hooks/useTypedSelector";
import { labelsRoutes } from "../../../../router";
import { AuthActionCreators } from "../../../../store/reducers/auth/action-creators";
import {
	Container,
	Action,
	ActionItem,
	Avatar,
	LinkChain,
	LinkItem,
} from "./header.styled";
const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const { auth } = useTypesSelector((state) => state.auth);
	const {user}=useTypesSelector(state=>state.auth)
	const linkChain = React.useMemo(() => {
		if (!location.pathname.split("/").some((el) => el !== "")) return [];
		return location.pathname.split("/").map((p) => {
			if (p === "") return { label: "Home", path: "/" };
			return { label: labelsRoutes[p], path: p };
		});
	}, [location.pathname]);

	const linkSwitch = (p: string) => {
		navigate(`${p}`);
	};
	return (
		<Container>
			<LinkChain>
				{auth &&
					linkChain.map((el, i) => {
						return (
							<LinkItem onClick={() => linkSwitch(el.path)}>
								{el.label} {i === linkChain.length - 1 ? "" : "/"}
							</LinkItem>
						);
					})}
			</LinkChain>
			<Action>
				{auth && (
					<>
						<ActionItem
							onClick={() => {
								dispatch(AuthActionCreators.logout());
							}}
						>
							Logout
						</ActionItem>
						<Avatar>{user.email}</Avatar>
					</>
				)}
			</Action>
		</Container>
	);
};

export default Header;
